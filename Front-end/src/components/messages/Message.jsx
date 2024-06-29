import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/extractTime';

function Message({message}) {
    const {authUser}=useAuthContext();
    const {selectedConversation}=useConversation()
    const fromMe=message.senderId===authUser._id;
    const chatClassName=fromMe?'chat-end':"chat-start"
    const profile=fromMe?authUser.profile:selectedConversation.profile;
    const bubbleBgColor=fromMe?'bg-blue-500':'bg-gray-700'
    const formattedDateAndTime=extractTime(message.createdAt)
    const shakeClass=message.shouldShake?"shake":""
    return (
        <div className={`chat ${chatClassName}`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img src={profile} alt="avatar img" />
                </div>
            </div>
            <div className={`chat-bubble text-white bg-blue-500 ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>    
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-green-900">{formattedDateAndTime}</div>
        </div>
    )
}

export default Message