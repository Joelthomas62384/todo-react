import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
<div className=" h-20 bg-violet-700 text-white sticky top-0 z-50">
<nav className='flex h-full justify-between items-center'>
        <div className="logo mx-8">
            <h2 className='text-2xl font-bold cursor-pointer'>CTasks</h2>
        </div>
        <ul className='flex gap-8  mx-8 select-none'>
           <NavLink to="/" className={({isActive})=>(`${isActive && "border-b-4 border-blue-400"}`)}> <li className='cursor-pointer hover:scale-110 transition-all'>Home</li></NavLink>
           <NavLink to="/about" className={({isActive})=>(`${isActive && "border-b-4 border-blue-400"} `)}><li className='cursor-pointer hover:scale-110 transition-all'>About</li></NavLink> 
          
        </ul>
    </nav>
</div>

  )
}

export default Navbar