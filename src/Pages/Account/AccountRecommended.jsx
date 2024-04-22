import React from 'react'
import AccountTitle from '../../Components/Account/AccountTitle'
import AccountCard from '../../Components/Account/AccountCard'
import AccountCardalt from '../../Components/Account/AccountCardalt'
import apartA from '../../assets/images/apartment.jpg'
import apartB from '../../assets/images/apartment1.jpg'
import indusA from '../../assets/images/industrialbld.jpg'
import indusB from '../../assets/images/industrialbld2.jpg'
import eventA from '../../assets/images/event.jpg'

const AccountRecommended = () => {
  return (
    <div className='flex justify-center items-center w-full bg-white py-[15px]' >
        <div className='flex flex-col justify-start items-start w-[80%]  font-normal text-[16px] '>
            <AccountTitle title="CleanX's Recommended" text="Choose from our highly recommended job offers"/>
           <div className='flex flex-wrap justify-start items-start gap-[20px] py-[20px] w-full '>
                <AccountCardalt status='Negotiable' img={apartA} title='Green Apartments' local='Lekki, Lagos' price='250,000/m' descr='We need complete residential and pool cleaning services, we have 360 rooms and baths, a lobby and yard.' date='April 28th 2024' />
                <AccountCardalt status='Non-Negotiable' img={indusA} title='Viju Manufacturing' local='Ikeja, Lagos' price='25,000/hr' descr='Looking for full compound cleaning, windows and floors. no interior cleaning necessary ' date='May 4th 2024' />
                <AccountCardalt status='Negotiable' img={eventA} title='Shoprite Events' local='Festac, Lagos' price='10,000/hr' descr='We have an event this weekend, looking for a clean up crew for before and after event.' date='April 20th 2024' />
           </div>
        </div>
    </div>
  )
}

export default AccountRecommended