import React from 'react'
import { Link } from 'react-router-dom'
import AccountHeader from '../Account/AccountHeader'
import AccountFooter from '../Account/AccountFooter'

const Profile = () => {
  return (
    <div className='w-full flex-col justify-start items-center '>
        <AccountHeader />
        <div className='w-full flex-col items-center justify-center'>
          <div className='w-[90%] font-medium text-lg mb-4'>Coming Soon!</div>
          <Link to='/AccountVerification'>
            <button className='py-4 px-2 border border-black rounded-md hover:bg-gray-100 font-medium'>Verify Account</button>
          </Link>
        </div>
        <AccountFooter />
    </div>
  )
}

export default Profile