import React from 'react'
import { Link } from 'react-router-dom'
import AccountHeader from '../../Pages/Account/AccountHeader'
import AccountFooter from '../../Pages/Account/AccountFooter'

const Profile = () => {
  return (
    <div className='w-full flex-col justify-start items-center '>
        <AccountHeader />
        <div className='w-full flex-col items-center justify-center'>
          <div className='w-[90%] font-medium text-lg mb-4'>Profile Coming Soon!</div>
          <Link to='/AccountVerification' className='py-4 px-4 border border-black hover:bg-gray-200'>Verify Account</Link>
        </div>
        <AccountFooter />
    </div>
  )
}

export default Profile