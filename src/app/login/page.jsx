import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Container from '../components/Container'
import Link from 'next/link'

function Login() {
  return (
    <Container>
      <Navbar />

        <div className="flex-glow">
          <div className="flex justify-center items-center">
            <div className='w-[400px] shadow-xl p-10 mt-5 rounded-xl'>
              <h3 className='text-3xl '>Login</h3>
              <hr  className='mt-3'/>
              <form action="">
                <input type="text" name="" id=""  className='w-full bg-gray-200 py-2 px-3 rounded text-lg my-2' placeholder='Enter Your Email'/>
                <input type="password" name="" id=""  className='w-full bg-gray-200 py-2 px-3 rounded text-lg my-2' placeholder='Enter Your Password'/>
                <button className='bg-green-500 text-white border py-2 px-3 rounded text-lg my-2' type='submit'>Sing In</button>
                <hr  className='my-3'/>
                <p>
                  Do not have an account? Go go <Link href="/register" className='text-blue-500 hover:underline' >Register</Link> page
                </p>
              </form>

            </div>
          </div>

        </div>
 

      <Footer />
    </Container>
  )
}

export default Login