import React from 'react'
import { Link } from 'react-router-dom'
import AccountHeader from './AccountHeader'
import AccountFooter from './AccountFooter'

const Notification = () => {
  return (
    <div className='w-full flex-col justify-start items-center '>
        <AccountHeader />
        <div className='w-full flex-col items-center justify-center'>
          <div className='w-[90%] font-medium text-lg mb-4 mx-8'>Notifications Coming Soon!</div>
        </div>
        <AccountFooter />
    </div>
  )
}

export default Notification