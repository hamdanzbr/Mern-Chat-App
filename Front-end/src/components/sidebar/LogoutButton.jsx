import React from 'react'
import { RiLogoutCircleLine } from "react-icons/ri";
import useLogout from '../../hooks/useLogout';

function LogoutButton() {
  const {loading,logout}=useLogout()
  return (
    <div className='mt-auto'>
    {!loading?(
      <RiLogoutCircleLine className='w-6 h-6 text-red-600' onClick={logout} />
    ):(
      <span className='loading loading-spinner'></span>
    )}
    </div>
  )
}

export default LogoutButton