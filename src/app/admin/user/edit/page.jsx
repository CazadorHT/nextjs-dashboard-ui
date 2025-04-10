import React from 'react'
import AdminNav from '../../components/AdminNav'
import Footer from '../../components/Footer'
import Container from '../../components/Container'
import Link from 'next/link'

function EditUserpage() {
  return (
    <Container>
        <AdminNav/>
        <div className="flex-grow">
            <div className="container mx-auto shadow-xl my-10 p-10 rounded-xl">
                    <Link href="/admin/user" className='bg-gray-500 inline-block text-white border py-2 px-3 rounded my-2'>Go Back</Link>
                    <hr className='my-3'/>
                    <h3 className='text-xl'>Admin edit user Post</h3>
                    <form action="">
                        <input type="text" className='w-[300px] block bg-gray-200  py-2 px-3 rounded text-lg my-2' placeholder='Username' />
                        <input type="text" className='w-[300px] block bg-gray-200  py-2 px-3 rounded text-lg my-2' placeholder='Email'/>
                        <input type="password" className='w-[300px] block bg-gray-200  py-2 px-3 rounded text-lg my-2' placeholder='Password'/>
                        <textarea cols={30} rows={10} className='w-[300px] block bg-gray-200  py-2 px-3 rounded text-lg my-2' placeholder='Enter your post content'>Content before update</textarea>
                        <button type="submit"name='update' className='bg-green-500 text-white border py-2 px-3 rounded text-lg my-2 cursor-pointer'>Update User</button>
                    </form> 
            </div>
        </div>
        <Footer />
    </Container>
  )
}

export default EditUserpage