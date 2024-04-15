import React from 'react'
import AccountTitle from '../../Components/Account/AccountTitle'
import AccountCard from '../../Components/Account/AccountCard'

const AccountRecommended = () => {
  return (
    <div className='flex justify-center items-center w-full bg-white py-[50px]' >
        <div className='flex flex-col justify-start items-start w-[80%]  font-normal text-[16px] '>
            <AccountTitle title="CleanX's Recommended" text="Choose from our highly vetted and recommended cleaning services"/>
           <div className='flex flex-wrap justify-start items-center gap-[10px] py-[30px]'>
                <AccountCard />
                <AccountCard />
                <AccountCard />
           </div>
        </div>
    </div>
  )
}

export default AccountRecommended