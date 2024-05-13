import React from 'react'
import AccountTitle from '../../Components/Account/AccountTitle'
import AccountCard from '../../Components/Account/AccountCard'
import apartA from '../../assets/images/apartment.jpg'
import apartB from '../../assets/images/apartment1.jpg'

const AccountJobs = () => {
  
  return (
    <div className='flex justify-center items-center w-full bg-white py-[15px]' >
        <div className='flex flex-col justify-start items-start w-[90%]  font-normal text-[16px] '>
            <AccountTitle title="Our Jobs" text="These are our currently available Jobs..."/>
            <div className='flex flex-wrap justify-start items-start gap-[20px] py-[20px] w-full '>
                <AccountCard img={apartA}  />
                
           </div>
        </div>
    </div>
  )
}

export default AccountJobs