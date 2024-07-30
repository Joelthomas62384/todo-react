import React from 'react'

const Navbar = () => {
  return (
<div className=" h-20 bg-violet-700 text-white">
<nav className='flex h-full justify-between items-center'>
        <div className="logo mx-8">
            <h2 className='text-2xl font-bold cursor-pointer'>CTasks</h2>
        </div>
        <ul className='flex gap-8  mx-8 select-none'>
            <li className='cursor-pointer hover:scale-110  transition-all '>Home</li>
            <li className='cursor-pointer hover:scale-110  transition-all '>About</li>
          
        </ul>
    </nav>
</div>

  )
}

export default Navbar