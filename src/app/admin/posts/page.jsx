import React from 'react'
import AdminNav from '../components/AdminNav'
import Footer from '../components/Footer'
import SideNav from '../components/SideNav'
import Container from '../components/Container'
import Link from 'next/link'
import Image from 'next/image'

function PostManagepage() {
  return (
    <Container>
        <AdminNav/>
        <div className="flex-grow">
            <div className="container mx-auto">
                <div className="flex mt-10">
                    <SideNav/>
                    <div className="p-10">
                        <h3 className='text-3xl mb-3'>Manege Post</h3>
                        <p>A list of post retrieved from a MongoDb database</p>
                        <div className="shadow-lg overflow-x-auto">
                            <table className='text-left rounded-md mt-3 table-fxed w-full'>
                                <thead>
                                    <tr className='bg-gray-400'>
                                        <th className='p-5 text-white' >Post ID</th>
                                        <th className='p-5 text-white'>Post Title</th>
                                        <th className='p-5 text-white'>Post Img</th>
                                        <th className='p-5 text-white'>Post Content</th>
                                        <th className='p-5 text-white'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='p-5'>$84125415</td>
                                        <td className='p-5'>This title</td>
                                        <td className='p-5'> 
                                                            <Image className='my-3 rounded-md' src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                            width={80} height={80} alt='Post img' /></td>
                                        <td className='p-5' >Lorem ipsum dolor sit amet consectetur adipisicing elit. </td>
                                        <td className='p-5'><Link className='bg-gray-500 text-white border py-2 px-3 rounded text-lg my-2' href="/admin/posts/edit">Edit</Link></td>
                                        <td className='p-5'><Link className='bg-red-500 text-white border py-2 px-3 rounded text-lg my-2' href="/admin/posts/delete">Delete</Link></td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>

    </Container>
  )
}

export default PostManagepage