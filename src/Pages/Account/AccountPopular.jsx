import React from 'react'
import AccountTitle from '../../Components/Account/AccountTitle'
import AccountCard from '../../Components/Account/AccountCard'
import CardAlt from '../../Components/Account/CardAlt'

const AccountPopular = () => {
  return (
    <div className='flex justify-center items-center w-full bg-white py-[15px]' >
        <div className='flex flex-col justify-start items-start w-[80%]  font-normal text-[16px] '>
            <AccountTitle title="Most Popular Jobs" text="These are the most popular Jobs available..."/>
            <div className='flex '>
                <CardAlt />
           </div>
        </div>
    </div>
  )
}

export default AccountPopular