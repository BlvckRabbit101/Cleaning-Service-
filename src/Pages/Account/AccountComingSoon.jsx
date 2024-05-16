import React from 'react'
import AccountHeader from '../Account/AccountHeader'
import AccountFooter from '../Account/AccountFooter'

const AccountComingSoon = () => {
  return (
    <div className='w-full flex-col justify-start items-center'>
        <AccountHeader />
        <div className='w-full flex-col items-center justify-center'>
          <div className='w-[90%] font-medium text-lg '>Coming Soon!</div>
        </div>
        <AccountFooter />
    </div>
  )
}

export default AccountComingSoon