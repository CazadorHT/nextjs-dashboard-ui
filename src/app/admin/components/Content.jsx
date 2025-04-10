import React from 'react'
import {FaUsers, FaRegnewspaper} from 'react-icons/fa6'
function Content() {
  return (
    <div className='px-10 rounded-lg '>
        <div className="flex ">
            <div className="shadow-lg w-[300px] m-3 p-10 rounded-lg">
                <h3 className='flex items-center'><FaUsers className='mr-2 '/> Total Users </h3>
                    <p className='text-5xl mt-6'>99</p>
            </div>
            <div className="shadow-lg w-[300px] m-3 p-10 rounded-lg">
                <h3 className='flex items-center'><FaUsers className='mr-2 '/> Total Posts </h3>
                    <p className='text-5xl mt-6'>158</p>
            </div>
        </div>       
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laborum ratione fugiat ab maxime nesciunt corrupti harum odit architecto soluta qui fugit aut eveniet aliquid odio explicabo, suscipit nisi recusandae.
        </p> 
    </div>
  )
}

export default Content