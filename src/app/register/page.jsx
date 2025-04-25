"use client"
import React , { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Container from '../components/Container'
import Link from 'next/link'
import { set } from 'mongoose'

function Register() {

    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[confirmPassword,setConfirmPassword] = useState("");
    const[error,setError] = useState("");
    const[success,setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(password != confirmPassword){
            setError("Password do not match");
            return;
        }
        if(!name || !email || !password || !confirmPassword) {
            setError("Please complete all inputs")
            return;
        }

        //api
        try{

            const resUserExists = await fetch("http://localhost:3000/api/userExists",{
              method:"POST",
              headers:{
                "Content-Type":"application/json"
              },
              body: JSON.stringify({email})
            })

              const {user} = await resUserExists.json();

              if(user){
                setError("User already exists.")
                return;
              }

            const res = await fetch("http://localhost:3000/api/register",{
                method : "POST",
                headers :{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    name,email,password
                })
            })

            if(res.ok){
                const form=e.target;
                setError("");
                setSuccess("User registered Successfully.")
                form.reset();
            } else {
                console.log("User registration failed.")
            }
        } catch(error){
                console.log("error during registrarion",error);
            }
    }

  return (
    <main>
    <Container>
      <Navbar />
        <div className="flex-glow">
          <div className="flex justify-center items-center">
            <div className='w-[400px] shadow-xl p-10 mt-5 rounded-xl'>
              <h3 className='text-3xl '>Register</h3>
              <hr  className='mt-3'/>
              <form onSubmit={handleSubmit}>

                {error && (
                    <div className="bg-red-500 w-fit text-white py-1 px-3 rounded-md mt-2">
                        {error}
                    </div>
                )}
                {success && (
                    <div className="bg-green-500 w-fit text-white py-1 px-3 rounded-md mt-2">
                        {success}
                    </div>
                )}

                <input type="text" name="" onChange={(e) => setName(e.target.value)} id=""  className='w-full bg-gray-200 py-2 px-3 rounded text-lg my-2' placeholder='Enter Your Email'/>
                <input type="email" name="" onChange={(e) => setEmail(e.target.value)} id=""  className='w-full bg-gray-200 py-2 px-3 rounded text-lg my-2' placeholder='Enter Your email'/>
                <input type="password" name="" onChange={(e) => setPassword(e.target.value)} id=""  className='w-full bg-gray-200 py-2 px-3 rounded text-lg my-2' placeholder='Enter Your Password'/>
                <input type="password" name="" onChange={(e) => setConfirmPassword(e.target.value)} id=""  className='w-full bg-gray-200 py-2 px-3 rounded text-lg my-2' placeholder='Confirm Your Password'/>
                <button className='bg-green-500 text-white border py-2 px-3 rounded-md text-lg my-2cursor-pointer' type='submit'>Sing Up</button>
                <hr  className='my-3 '/>
                <p>
                   Already have  an account? Go go <Link href="/login" className='text-blue-500 hover:underline' >Login</Link> page
                </p>
              </form>

            </div>
          </div>
        </div>
    </Container>
    <Footer/>
    </main>
  )
}

export default Register