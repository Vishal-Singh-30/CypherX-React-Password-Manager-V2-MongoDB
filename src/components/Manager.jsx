import React from 'react'

const Manager = () => {  // Manager component is Landing page

    const showPassword = () => {
    alert("Show Password");
    }

    return (
        // Background gradient code
        <>
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#1F51FF_100%)]"></div>
        
        <div className=" mycontainer">
            <h1 className='text-4xl text-white font-bold text-center'>
                <span className='text-[#1F51FF]'>&lt;</span>
                Cypher
                <span className='text-[#1F51FF]'>X/&gt;</span>
            </h1>
            <p className='text-white text-lg text-center mt-4'>Forget Password? We've Got You Covered!</p>
            <div className='text-white flex flex-col p-4 text-white gap-6 mt-10 items-center'>
                <input placeholder='Enter Website URL' className='  rounded-full border border-white w-full py-1 px-4' type="text" name='' id='' />
                <div className="flex w-full gap-8 mt-4">
                <input placeholder='Enter Username' className='  rounded-full border border-white w-full py-1 px-4' type="text" name='' id='' />
                <div className="relative w-2/3">
                <input placeholder='Enter Password' className='  rounded-full border border-white w-full py-1 px-4' type="text" name='' id='' />
                <span className='absolute right-2 ' onClick={showPassword}>
                    <lord-icon
                        src="https://cdn.lordicon.com/dicvhxpz.json"
                        trigger="click"
                        delay="500"
                        stroke="bold"
                        state="hover-look-around"
                        colors="primary:#424242,secondary:#1f51ff"
                        className='cursor-pointer'
                        >
                    </lord-icon>
                </span>
                </div>
                
                </div>
                
                <button className='flex justify-center gap-4 items-center bg-[#1F51FF] text-white rounded-full px-6 py-2 w-fit hover:bg-white hover:text-[#1F51FF] transition-all duration-500  border-4 border-gray-800'>
                    <lord-icon
                    src="https://cdn.lordicon.com/jgnvfzqg.json"
                    trigger="hover">
                    </lord-icon>
                    Add Password
                </button>
            </div>
        </div>
        
        
        
        </>
    )
}

export default Manager