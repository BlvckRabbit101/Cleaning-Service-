import React from 'react'
import AccountTitle from '../../Components/Account/AccountTitle'
import AccountCardalt from '../../Components/Account/AccountCardalt'
import apartA from '../../assets/images/apartment.jpg'
import apartB from '../../assets/images/apartment1.jpg'
import indusA from '../../assets/images/industrialbld.jpg'
import indusB from '../../assets/images/industrialbld2.jpg'
import eventA from '../../assets/images/event.jpg'
import eventB from '../../assets/images/event2.jpg'
import eventC from '../../assets/images/event3.jpg'

const AccountJobs = () => {
  return (
    <div className='flex justify-center items-center w-full bg-white py-[15px]' >
        <div className='flex flex-col justify-start items-start w-[80%]  font-normal text-[16px] '>
            <AccountTitle title="Our Jobs" text="These are our currently available Jobs..."/>
            <div className='flex flex-wrap justify-start items-start gap-[20px] py-[20px] w-full '>
                <AccountCardalt status='Negotiable' img={apartA} title='Blue Apartments' local='Lekki, Lagos' price='250,000/m' descr='We need complete residential and pool cleaning services, we have 360 rooms and baths, a lobby and yard.' date='April 28th 2024' />
                <AccountCardalt status='Non-Negotiable' img={indusA} title='Aquadana Manufacturing' local='Ikeja, Lagos' price='25,000/hr' descr='Looking for full compound cleaning, windows and floors. no interior cleaning necessary ' date='May 4th 2024' />
                <AccountCardalt status='Negotiable' img={eventC} title='Kode10x Events' local='Festac, Lagos' price='10,000/hr' descr='We have an event this weekend, looking for a clean up crew for before and after event.' date='April 20th 2024' />
                <AccountCardalt status='Negotiable' img={eventB} title='Club 68' local='Lekki, Lagos' price='30,000/hr' descr='We have an event this weekend, looking for a clean up crew for before and after event.' date='April 28th 2024' />
                <AccountCardalt status='Negotiable' img={apartB} title='Golden Apartments' local='Ikeja, Lagos' price='250,000/m' descr='We need complete residential and pool cleaning services, we have 360 rooms and baths, a lobby and yard.' date='May 3rd 2024' />
                <AccountCardalt status='Negotiable' img={indusB} title='Innoson Manufacturing' local='Ikotun, Lagos' price='345,000/d' descr='Looking for full compound cleaning, windows and floors. no interior cleaning necessary' date='June 15th 2024' />
           </div>
        </div>
    </div>
  )
}

export default AccountJobs