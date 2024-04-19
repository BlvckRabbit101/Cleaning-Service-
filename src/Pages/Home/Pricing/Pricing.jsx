import React from 'react'
import PricingCard from '../../../Components/Pricing/PricingCard'
import residential from '../../../assets/images/residential.png'
import commercial from '../../../assets/images/commercial.png'
import industrial from '../../../assets/images/industrial.png'

const Pricing = () => {
  return (
    <div className='flex justify-center items-center w-full bg-white py-[15px] ' id='Pricing'>
        <div className='flex flex-col justify-start items-center w-[80%] font-[16px] py-[100px] mobile:py-[50px] tablet:py-[50px]'>
            <div className='flex flex-col text-[32px] justify-start items-center text-center mb-[50px] w-[600px] font-medium gap-[15px] mobile:w-full mobile:gap-[5px] tablet:w-full tablet:gap-[5px]'>
                <div className='text-[22px] font-bold text-center text-[#032B56]'>CLEANING PLANS</div>
                <div className='text-[#032B56] leading-none mobile:text-[24px] mobile:w-full tablet:text-[24px] tablet:w-full'>Take a look at our Pricing and
                select Your Choice</div>
            </div>
           <div className='flex flex-wrap gap-[20px] mobile:gap-[40px] tablet:gap-[20px]'>
                <PricingCard icon={residential} title='Residential' price='20' />
                <PricingCard icon={commercial} title='Commercial' price='36' />
                <PricingCard icon={industrial} title='Industrial' price='49' />
           </div>
        </div>
    </div>
  )
}

export default Pricing