import React from 'react'
function gender() {
    return (
        <div className='flex'>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer`}>
                <span className='label-text text-red-400'>Male</span>
                <input type="checkbox" className='checkbox border-slate-900'/>
                </label>
            </div>
            <div className='form-control'>
            <label className={`label gap-2 cursor-pointer`}>
                <span className='label-text text-red-400'>Female</span>
                <input type="checkbox" className='checkbox border-slate-900'/>
                </label>
            </div>
        </div>
    )
}

export default gender



// First draft
// import React from 'react'
// function gender() {
//     return (
//         <div className='flex'>
//             <div className='form-control'>
//                 <label className={`label gap-2 cursor-pointer`}>
//                 <span className='label-text text-red-400'>Male</span>
//                 <input type="checkbox" className='checkbox border-slate-900'/>
//                 </label>
//             </div>
//             <div className='form-control'>
//             <label className={`label gap-2 cursor-pointer`}>
//                 <span className='label-text text-red-400'>Female</span>
//                 <input type="checkbox" className='checkbox border-slate-900'/>
//                 </label>
//             </div>
//         </div>
//     )
// }

// export default gender