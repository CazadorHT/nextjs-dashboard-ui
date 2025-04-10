import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Container from '../components/Container'
import Link from 'next/link'
import Image from 'next/image'

function Create() {
  return (
    <Container>
        <Navbar />
        <div className="flex-grow">
            <div className="container mx-auto shadow-xl my-10 p-10 rounded-xl">
                <Link href="/welcome" className='bg-gray-500 inline-block text-white border py-2 px-3 rounded my-2'>Go Back</Link>
                <hr className='my-3'/>
                <h3 className='text-xl'>Create Post</h3>
                <form action="">
                    <input type="text" className='w-[300px] block bg-gray-200  py-2 px-3 rounded text-lg my-2' placeholder='Post title'/>
                    <input type="text" className='w-[300px] block bg-gray-200  py-2 px-3 rounded text-lg my-2' placeholder='Post Image Url'/>
                    <textarea cols={30} rows={10} className='w-[300px] block bg-gray-200  py-2 px-3 rounded text-lg my-2' placeholder='Enter your post content'/>
                    <button type="submit"name='create' className='bg-green-500 text-white border py-2 px-3 rounded text-lg my-2 cursor-pointer'>Create Post</button>
                </form> 
            </div>
        </div>

    </Container>
  )
}

export default Create