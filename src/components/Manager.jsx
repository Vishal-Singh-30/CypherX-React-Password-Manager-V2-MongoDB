import React, { useEffect } from 'react'
import { useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {  // Manager component is Landing page
    const showpassRef = useRef();


    // state variable to handle form data  - sitename , username and password
    const [form, setForm] = useState({
        sitename: "",
        username: "",
        password: ""
    })

    // state variable for passwordArray 
    const [passwordArray, setPasswordArray] = useState([]);



    // useEffect hook to get passwords from local storage and store it in passwordArray
    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        let passwordArray;
        if (passwords) {
            setPasswordArray(JSON.parse(passwords));
        }
    }, []) // empty dependency array - it will run only once when the component mounts



    const showPassword = () => {
        if (showpassRef.current.type === "password") {
            showpassRef.current.type = "text";
        } else {
            showpassRef.current.type = "password";
        }

    }

    const savePassword = () => {
        toast.success('Password Secured!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        console.log(form);
        setPasswordArray([...passwordArray, {...form, id: uuidv4()}]); // add form data to passwordArray
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id: uuidv4()}])); // store passwordArray in local storage
        // we are using [...passwordArray, form] instead of passwordArray
        //  because it takes time for setStateVaribel function to reflect its changes in react.
        setForm({
            sitename: "",
            username: "",
            password: ""
        });
        console.log([...passwordArray, {...form, id: uuidv4()}]);

    }


    // event handler for delete password 
    const deletePassword = (id) => {
        toast.error('Password Deleted', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        let confirm_popup = confirm("Are you sure you want to delete this password?");
        if(confirm_popup){
            let filteredArray = passwordArray.filter(item => item.id !== id); // remove password from passwordArray
            setPasswordArray(filteredArray); // update state
            localStorage.setItem("passwords", JSON.stringify(filteredArray)); // store updated passwordArray in local storage
        }
        
    }


    // event handler for edit password
    const editPassword = (id) => {
        let targetPassword = passwordArray.find(item => item.id === id); // get password from passwordArray
    setForm({
        sitename: targetPassword.sitename,
        username: targetPassword.username,
        password: targetPassword.password
    });
    let filteredArray = passwordArray.filter(item => item.id !== id); // remove password from passwordArray
    setPasswordArray(filteredArray); // update state and wait for user to press save button
    }


    // function to handle form input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setForm({
            ...form,
            [name]: value
        });
    };


    // function to handle copy text to clipboard
    const copyText = (text) => {
        toast.success('Copied To Clipboard!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        navigator.clipboard.writeText(text); // copy text to clipboard
    }


    return (
        // Background gradient code
        <>
            {/* toastify here  */}
            <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />




            <div className="relative min-h-screen">
                <div className="absolute inset-0 -z-10 min-h-screen h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#1F51FF_100%)]"></div>


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
                                <input ref={showpassRef} value={form.password} onChange={handleInputChange} placeholder='Enter Password' className='  rounded-full border border-white w-full py-1 px-4' type="password" name='password' id='password' />
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

                        <button onClick={savePassword} className='flex justify-center gap-4 items-center bg-[#1F51FF] text-white rounded-full px-6 py-2 w-fit hover:bg-white hover:text-[#1F51FF] transition-all duration-500  border-4 border-gray-900'>
                            <lord-icon
                                src="https://cdn.lordicon.com/jgnvfzqg.json"
                                trigger="hover">
                            </lord-icon>
                            Save Password
                        </button>
                    </div>


                    <div className="passwords text-white">
                        <h2 className='font-bold text-2xl mt-10'>Your Passwords</h2>
                        {passwordArray.length === 0 && <div className='mt-4'>No Passwords Stored Yet</div>}

                        {passwordArray.length != 0 && <table className="table-auto mt-10 w-full border rounded-xl overflow-hidden">
                            <thead className='bg-black text-white'>
                                <tr>
                                    <th className='py-2'>Site</th>
                                    <th className='py-2'>Username</th>
                                    <th className='py-2 text-[#1F51FF]'>Password</th>
                                    <th className='py-2'>Actions</th>
                                </tr>
                            </thead>
                            <tbody className='text-white bg-gray-900'>
                                {passwordArray.map((item) => {
                                    return <>
                                        <tr >
                                            <td className='py-2 border border-black text-center'>
                                                <div className='flex items-center justify-center'>
                                                    <a href={item.sitename} target='_blank'>{item.sitename}</a>
                                                    <div className='lordiconcopy ml-4 size-7 cursor-pointer' onClick={()=> copyText(item.sitename)}>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover"
                                                        colors="primary:#ffffff"
                                                        >
                                                    </lord-icon>
                                                    </div>
                                                </div>
                                                
                                            </td>
                                            <td className=' py-2 border border-black text-center'>
                                                <div className='flex items-center justify-center'>
                                                        <span>{item.username}</span>
                                                        <div className='lordiconcopy ml-4 size-7 cursor-pointer' onClick={()=> copyText(item.username)}>
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/iykgtsbt.json"
                                                            trigger="hover"
                                                            colors="primary:#ffffff"
                                                            >
                                                        </lord-icon>
                                                        </div>
                                                    </div>
                                            </td>
                                            <td className='py-2 border border-black text-center text-[#1F51FF]'>
                                            <div className='flex items-center justify-center'>
                                                        <span>{item.password}</span>
                                                        <div className='lordiconcopy ml-4 size-7 cursor-pointer' onClick={()=> copyText(item.password)}>
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/iykgtsbt.json"
                                                            trigger="hover"
                                                            colors="primary:#ffffff"
                                                            >
                                                        </lord-icon>
                                                        </div>
                                                    </div>
                                            </td>
                                            <td className='py-2 border border-black text-center text-white'>
                                            <span onClick={() => editPassword(item.id)} className='cursor-pointer ml-2 mr-2'>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/gwlusjdu.json"
                                                    trigger="hover"
                                                    colors="primary:#ffffff"
                                                    className='size-7 pt-1'
                                                    >
                                                </lord-icon>
                                            </span>
                                            <span onClick={() => deletePassword(item.id)} className='cursor-pointer ml-2 mr-2'>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/skkahier.json"
                                                    trigger="hover"
                                                    colors="primary:#ffffff"
                                                    className='size-7 pt-1'
                                                    >
                                                </lord-icon>
                                            </span>
                                            </td>
                                        </tr>
                                    </>
                                })}

                            </tbody>
                        </table>}
                    </div>


                </div>
            </div>


        </>
    )
}

export default Manager