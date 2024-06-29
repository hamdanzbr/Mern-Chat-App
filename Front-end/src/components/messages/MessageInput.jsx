import React, { useState } from 'react';
import { BsSend } from "react-icons/bs";
import useSendMessage from '../../hooks/useSendMessage';

function MessageInput() {
    const [message, setMessage] = useState("");
    const { loading, sendMessage } = useSendMessage();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message) return;
        await sendMessage(message);
        setMessage("");
    };

    return (
        <form className='px-4 my-3' onSubmit={handleSubmit}>
            <div className='w-full relative'>
                <input
                    type='text'
                    value={message} // Bind the value to the state
                    onChange={(e) => setMessage(e.target.value)} // Update the state on change
                    className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
                    placeholder='Send a message'
                />
                <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
                    {loading ? <div className='loading loading-spinner'></div> : <BsSend className='text-green-700' />}
                </button>
            </div>
        </form>
    );
}

export default MessageInput;





// First draft
// import React from 'react'
// import {BsSend} from "react-icons/bs"
// function MessageInput() {
//     return (
//         <form className='px-4  my-3'>
//             <div className='w-full relative'>
//                 <input
//                     type='text'
//                     className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
//                     placeholder='Send a message'
//                 />
//                 <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
//                     <BsSend className='text-green-700'/>
//                 </button>

//             </div>
//         </form>
//     )
// }

// export default MessageInput