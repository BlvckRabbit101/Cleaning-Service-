import React from 'react'
import HowItWorks from '../../../Components/Subhero/HowItWorks'
import home from '../../../assets/images/booking.png'
import padlock from '../../../assets/images/validation.png'
import calendar from '../../../assets/images/janitor2.png'

const Subhero = () => {
  return (
    <div className='flex justify-center items-center w-full bg-white py-[15px] mobile:py-[0px] tablet:py-[0px]' id='Subhero'>
        <div className='flex flex-col justify-start items-center w-[80%] py-[100px] mobile:py-[50px] tablet:py-[50px] '>
            <div>
                <div className='flex gap-[10px] text-[58px] font-medium justify-center items-center text-center mb-[10px] mobile:text-[32px] tablet:text-[38px] tablet:mb-0'>
                    <div className='text-[#032B56]'>How it</div>
                    <div className='text-[#4291FD] underline'>works</div>
                </div>
                <div className='text-[18px] font-normal text-center text-[#333] mobile:text-[14px] tablet:text-[14px]'>We’ve made all the hardwork for making it simple for you. Here’s how it works</div>
            </div>
            <div className='flex flex-wrap mt-[50px] justify-between mobile:mt-[15px] tablet:mt-[25px]'>
                <HowItWorks icon={home} title='Book a Cleaning' text='Click the book now button to make a booking on your preffered date and time' />
                <HowItWorks icon={padlock} title='Confirm Booking' text='We will confirm your booking along with your instructions via secure transaction.' />
                <HowItWorks icon={calendar} title='Get Expert Cleaner' text='Our trusted & experienced maid will come to your door-step on the time for a cleaning' />
            </div>
        </div>
    </div>
  )
}

export default Subhero