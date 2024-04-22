import React from 'react'
import AccountTitle from '../../Components/Account/AccountTitle'
import AccountCard from '../../Components/Account/AccountCard'
import CardAlt from '../../Components/Account/CardAlt'
import indusB from '../../assets/images/industrialbld2.jpg'
import apartB from '../../assets/images/apartment1.jpg'
import eventA from '../../assets/images/event.jpg'
import AccountCardalt from '../../Components/Account/AccountCardalt'

const AccountPopular = () => {
  return (
    <div className='flex justify-center items-center w-full bg-white py-[15px]' >
        <div className='flex flex-col justify-start items-start w-[80%]  font-normal text-[16px] '>
            <AccountTitle title="Most Popular Jobs" text="These are the most popular Jobs available..."/>
            <div className='flex flex-wrap justify-start items-start gap-[20px] py-[20px] w-full '>
              <AccountCardalt status='Negotiable' img={eventA} title='Cubana Palace' local='Lekki, Lagos' price='30,000/hr' descr='We have an event this weekend, looking for a clean up crew for before and after event.' date='April 28th 2024' />
              <AccountCardalt status='Negotiable' img={apartB} title='Aqua Apartments' local='Ikeja, Lagos' price='450,000/m' descr='We need complete residential and pool cleaning services, we have 360 rooms and baths, a lobby and yard.' date='May 3rd 2024' />
              <AccountCardalt status='Negotiable' img={indusB} title='Milo Manufacturing' local='Ikotun, Lagos' price='105,000/d' descr='Looking for full compound cleaning, windows and floors. no interior cleaning necessary' date='June 15th 2024' />
           </div>
        </div>
    </div>
  )
}

export default AccountPopular