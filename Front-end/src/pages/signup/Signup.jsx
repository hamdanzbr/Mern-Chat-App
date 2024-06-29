import React, { useState } from 'react'
import Gender from './Gender'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'
function Signup() {
    const [inputs,setInputs]=useState({
        fullName:'',
        username:'',
        password:'',
        confirmPassword:'',
        gender:''
    })

    const {loading,signup}=useSignup()

    const handleCheckboxChange=(gender)=>{
        setInputs({...inputs,gender})
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        await signup(inputs);
    }


    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>

                <h1 className='text-3xl font-semibold text-center text-red-600'>
                    Signup
                    <span className='text-blue-500 m-1'>ChatApp</span>
                </h1>
                <form onSubmit={handleSubmit}>
                <div>
                <label className="label p-2">
                    <span className='text-red-500 label-text'>Full Name</span>
                </label>
                <input type="text" placeholder='Enter Full Name' className='w-full input input-bordered h-10' value={inputs.fullName}
                onChange={(e)=>setInputs({...inputs,fullName:e.target.value})}
                />
            </div>

            <div>
                <label className="label p-2">
                    <span className='text-red-500 label-text'>Username</span>
                </label>
                <input type="text" placeholder='Enter User Name' className='w-full input input-bordered h-10' 
                value={inputs.username}
                onChange={(e)=>setInputs({...inputs,username:e.target.value})}
                />
            </div>

            <div>
                <label className="label p-2">
                    <span className='text-red-500 label-text'>Password</span>
                </label>
                <input type="text" placeholder='Enter Password' className='w-full input input-bordered h-10' 
                value={inputs.password}
                onChange={(e)=>setInputs({...inputs,password:e.target.value})}
                />
            </div>

            <div>
                <label className="label p-2">
                    <span className='text-red-500 label-text'>Confirn Password</span>
                </label>
                <input type="text" placeholder='Confirm Passworde' className='w-full input input-bordered h-10'
                value={inputs.confirmPassword}
                onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}
                />
            </div>

            {/* Gender checkbox */}

            <Gender onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>
            <div>
            <button className='btn btn-block btn-sm btn-success mt-4' disabled={loading} >
                {loading? <span className='loading loading-spinner'></span>:"Sign Up"}
            </button>
            </div>

            <Link to={'/login'} className='text-blue-400 hover:underline hover:text-blue-600 mt-2 inline-block'>Don't have an account?</Link>
                </form>

            </div>

        </div>
    )
}

export default Signup



// first draft
// import React from 'react'
// import Gender from './Gender'
// function Signup() {
//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//             <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>

//                 <h1 className='text-3xl font-semibold text-center text-red-600'>
//                     Signup
//                     <span className='text-blue-500 m-1'>ChatApp</span>
//                 </h1>
//                 <form action="">
//                 <div>
//                 <label className="label p-2">
//                     <span className='text-red-500 label-text'>Full Name</span>
//                 </label>
//                 <input type="text" placeholder='Enter Full Name' className='w-full input input-bordered h-10' />
//             </div>

//             <div>
//                 <label className="label p-2">
//                     <span className='text-red-500 label-text'>Username</span>
//                 </label>
//                 <input type="text" placeholder='Enter User Name' className='w-full input input-bordered h-10' />
//             </div>

//             <div>
//                 <label className="label p-2">
//                     <span className='text-red-500 label-text'>Password</span>
//                 </label>
//                 <input type="text" placeholder='Enter Password' className='w-full input input-bordered h-10' />
//             </div>

//             <div>
//                 <label className="label p-2">
//                     <span className='text-red-500 label-text'>Confirn Password</span>
//                 </label>
//                 <input type="text" placeholder='Confirm Passworde' className='w-full input input-bordered h-10' />
//             </div>

//             {/* Gender checkbox */}

//             <Gender/>
//             <div>
//             <button className='btn btn-block btn-sm btn-success mt-4'>Login</button>
//             </div>

//             <a href="" className='text-blue-400 hover:underline hover:text-blue-600 mt-2 inline-block'>Don't have an account?</a>
//                 </form>

//             </div>

//         </div>
//     )
// }

// export default Signup