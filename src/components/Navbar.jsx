import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-white'>
        <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">

        
        
            <div className="logo font-bold text-white text-2xl">
                <span className='text-[#1F51FF]'>&lt;</span>
                Cypher
                <span className='text-[#1F51FF]'>X/&gt;</span>
            </div>
        
        <ul>
            <li className='flex gap-10'>
                <a className='hover:scale-110' href="#">Home</a>
                <a className='hover:scale-110' href="#">About</a>
                <a className='hover:scale-110' href="#">Contact</a>
            </li>
        </ul>
        <div className='ml-25'>
            <a href="https://github.com/Vishal-Singh-30/React-Password-Manager" target="_blank">
            <img className='w-10 hover:cursor-pointer hover:scale-110 transition-all duration-300' src="github_logo.png" alt="github_logo" />
            </a>
            
        </div>
        </div>
    </nav>
  )
}

export default Navbar