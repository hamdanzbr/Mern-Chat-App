import React from 'react'

function Login() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>

        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>

            <h1 className='text-3xl font-semibold text-center text-red-600'> 
            Login
            <span className='text-blue-500 m-1'>ChatApp</span>
            </h1>

            <form action="">

            <div>
                <label className="label p-2">
                    <span className='text-red-500 label-text'>Username</span>
                </label>
                <input type="text" placeholder='Enter User Name' className='w-full input input-bordered h-10' />
            </div>

            <div>
            <label className="label p-2">
                    <span className='text-red-500 label-text'>Password</span>
                </label>
                <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10' />
            </div>

            <div>
                <button className='btn btn-block btn-sm btn-success mt-4'>Login</button>
            </div>

            <a href="" className='text-blue-400 hover:underline hover:text-blue-600 mt-2 inline-block'>Don't have an account?</a>

            </form>
        
        </div>
        
    </div>
  )
}

export default Login




// Starter code for this page:

// import React from 'react'

// function Login() {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>

//         <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>

//             <h1 className='text-3xl font-semibold text-center text-red-600'> 
//             Login
//             <span className='text-blue-500 m-1'>ChatApp</span>
//             </h1>

//             <form action="">

//             <div>
//                 <label className="label p-2">
//                     <span className='text-red-500 label-text'>Username</span>
//                 </label>
//                 <input type="text" placeholder='Enter User Name' className='w-full input input-bordered h-10' />
//             </div>

//             <div>
//             <label className="label p-2">
//                     <span className='text-red-500 label-text'>Password</span>
//                 </label>
//                 <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10' />
//             </div>

//             <div>
//                 <button className='btn btn-block btn-sm btn-success mt-4'>Login</button>
//             </div>

//             <a href="" className='text-blue-400 hover:underline hover:text-blue-600 mt-2 inline-block'>Don't have an account?</a>

           

//             </form>


//         </div>
        
//     </div>
//   )
// }

// export default Login