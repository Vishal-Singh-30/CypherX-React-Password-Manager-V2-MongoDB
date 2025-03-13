import React, { useEffect } from 'react'
import { useState } from 'react'

const Manager = () => {  // Manager component is Landing page

    // state variable to handle form data  - sitename , username and password
    const [form, setForm] = useState({
        sitename: "",
        username: "",
        password: ""
    })

    // state variable for passwordArray 
    const [passwordArray, setPasswordArray] = useState([]);



    // useEffect hook to get passwords from local storage and store it in passwordArray
    useEffect(()=>{
        let passwords = localStorage.getItem("passwords");
        let passwordArray;
        if(passwords){
            setPasswordArray(JSON.parse(passwords));
        }
    },[])



    const showPassword = () => {
    alert("Show Password");
    }

    const savePassword = () => {
        console.log(form);
        setPasswordArray([...passwordArray, form]); // add form data to passwordArray
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form])); // store passwordArray in local storage
        // we are using [...passwordArray, form] instead of passwordArray
        //  because it takes time for setStateVaribel function to reflect its changes in react.
        setForm({
            sitename: "",
            username: "",
            password: ""
        });
        console.log([...passwordArray, form]); 

    }

    // function to handle form input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setForm({
            ...form,
            [name]: value
        });
    };

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
                <input value={form.sitename} onChange={handleInputChange} placeholder='Enter Website URL' className='  rounded-full border border-white w-full py-1 px-4' type="text" name='sitename' id='sitename' />
                <div className="flex w-full gap-8 mt-4">
                <input value={form.username} onChange={handleInputChange} placeholder='Enter Username' className='  rounded-full border border-white w-full py-1 px-4' type="text" name='username' id='username' />
                <div className="relative w-2/3">
                <input value={form.password} onChange={handleInputChange} placeholder='Enter Password' className='  rounded-full border border-white w-full py-1 px-4' type="password" name='password' id='password' />
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
                
                <button onClick={savePassword} className='flex justify-center gap-4 items-center bg-[#1F51FF] text-white rounded-full px-6 py-2 w-fit hover:bg-white hover:text-[#1F51FF] transition-all duration-500  border-4 border-gray-800'>
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