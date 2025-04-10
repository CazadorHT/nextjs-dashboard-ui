import React from 'react'
import AdminNav from '../components/AdminNav'
import Footer from '../components/Footer'
import SideNav from '../components/SideNav'
import Container from '../components/Container'
import Link from 'next/link'

function AdminUserManagepage() {
  return (
    <Container>
        <AdminNav/>
        <div className="flex-grow">
            <div className="container mx-auto">
                <div className="flex mt-10">
                    <SideNav/>
                    <div className="p-10">
                        <h3 className='text-3xl mb-3'>Manege Users</h3>
                        <p>A list of users retrieved from a MongoDb database</p>
                        <div className="shadow-lg overflow-x-auto">
                            <table className='text-left rounded-md mt-3 table-fxed w-full'>
                                <thead>
                                    <tr className='bg-gray-400'>
                                        <th className='p-5 text-white' >ID</th>
                                        <th className='p-5 text-white'>User</th>
                                        <th className='p-5 text-white'>Email</th>
                                        <th className='p-5 text-white'>Password</th>
                                        <th className='p-5 text-white'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='p-5'>$84125415</td>
                                        <td className='p-5'>Joh doe</td>
                                        <td className='p-5'>johsadsa@fsdadfa.com</td>
                                        <td className='p-5'>515155asa</td>
                                        <td className='p-5'><Link className='bg-gray-500 text-white border py-2 px-3 rounded text-lg my-2' href="/admin/user/edit">Edit</Link></td>
                                        <td className='p-5'><Link className='bg-red-500 text-white border py-2 px-3 rounded text-lg my-2' href="/admin/user/delete">Delete</Link></td>
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

export default AdminUserManagepage