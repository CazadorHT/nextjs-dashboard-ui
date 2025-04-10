import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Container from '../components/Container'
import Link from 'next/link'

function Register() {
  return (
    <Container>
      <Navbar />

        <div className="flex-glow">
          <div className="flex justify-center items-center">
            <div className='w-[400px] shadow-xl p-10 mt-5 rounded-xl'>
              <h3 className='text-3xl '>Register</h3>
              <hr  className='mt-3'/>
              <form action="">
                <input type="text" name="" id=""  className='w-full bg-gray-200 py-2 px-3 rounded text-lg my-2' placeholder='Enter Your Email'/>
                <input type="password" name="" id=""  className='w-full bg-gray-200 py-2 px-3 rounded text-lg my-2' placeholder='Enter Your email'/>
                <input type="password" name="" id=""  className='w-full bg-gray-200 py-2 px-3 rounded text-lg my-2' placeholder='Enter Your Password'/>
                <input type="password" name="" id=""  className='w-full bg-gray-200 py-2 px-3 rounded text-lg my-2' placeholder='Confirm Your Password'/>
                <button className='bg-green-500 text-white border py-2 px-3 rounded-md text-lg my-2cursor-pointer' type='submit'>Sing Up</button>
                <hr  className='my-3 '/>
                <p>
                   Already have  an account? Go go <Link href="/login" className='text-blue-500 hover:underline' >Login</Link> page
                </p>
              </form>

            </div>
          </div>

        </div>

      <Footer />
    </Container>
  )
}

export default Register