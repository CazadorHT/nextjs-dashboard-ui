import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Container from '../components/Container'
import Link from 'next/link'
import Image from 'next/image'

function Welcomepage() {
  return (
    <Container>
        <Navbar />
        <div className="flex-grow">
            <div className="container mx-auto shadow-xl my-10 p-10 rounded-xl">
                <div className="flex justify-between">
                    <div>
                        <h3 className='text-3xl'>Profile</h3>
                        <p>Welcome, John Doe</p>
                    </div>
                    <div>
                        <Link href="/create" className='bg-green-500 text-white border py-2 px-3 rounded-md text-lg my-2'>Create Post</Link>
                    </div>
                </div>

                {/* {User Posts Data} */}
                <div>
                    <div className="shadow-xl my-10 p-10 rounded-xl">
                        <h4 className='text-2xl'> Porst Title </h4>
                        <Image className='my-3 rounded-md' src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width={300} height={0} alt='Post img' />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum distinctio laboriosam asperiores nesciunt illo quidem. Sunt quo quaerat laboriosam veniam at provident nesciunt molestiae omnis! Nostrum iure amet quam magnam.</p>
                        <div className='mt-5'>
                            <Link className='bg-gray-500 text-white border py-2 px-3 rounded-md text-lg my-2' href="/edit">Edit</Link>
                            <Link className='bg-red-500 text-white border py-2 px-3 rounded-md text-lg my-2' href="/delete">Delete</Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <Footer />
    </Container>
    
    
  )
}

export default Welcomepage