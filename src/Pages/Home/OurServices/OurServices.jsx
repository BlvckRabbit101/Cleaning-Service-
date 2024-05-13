import React from 'react'
import { forwardRef } from 'react'
import OurServicesCard from '../../../Components/Subhero/OurServicesCard'
import house from '../../../assets/images/house.png'
import pot from '../../../assets/images/pot.png'
import office from '../../../assets/images/office.png'
import vacuum from '../../../assets/images/vacuum.png'
import road from '../../../assets/images/road.png'
import windowed from '../../../assets/images/window.png'


const OurServices = ({ref}) => {
  return (
    <div className='flex justify-center items-center w-full bg-[#EEF8FF] py-[15px]' id='Services' >
        <div className='flex flex-col justify-between items-center w-[80%] py-[50px] mobile:py-[50px] tablet:py-[50px]'>
            <div className='flex flex-col justify-start items-start mb-[50px] mobile:mb-[20px] tablet:mb-[30px] '>
                <div className='flex flex-col text-[58px] justify-center items-center text-center mb-[10px] w-[600px] font-medium mobile:w-full tablet:w-full'>
                    <div className='text-[20px] font-bold text-center text-[#333]'>Our Popular Services</div>
                    <div className='text-[#032B56] leading-none mobile:text-[24px] tablet:text-[32px] '>Our Success Cleaning
                    Up your Mess</div>
                </div>
            </div>
            <div className='flex flex-wrap gap-[20px]'>
                <OurServicesCard icon={pot} title='Kitchen Cleaning' text='Let us tackle grease and grime, leaving your kitchen sparkling and sanitized.' />
                <OurServicesCard icon={vacuum} title='Carpet Cleaning' text='Revitalize your carpets with our deep-cleaning expertise, removing stains and odors.' />
                <OurServicesCard icon={house} title='House Cleaning' text='Experience a fresh and tidy home with our comprehensive house cleaning solutions.' />
                <OurServicesCard icon={office} title='Office Cleaning' text='Maintain a professional workspace with our efficient and detail-oriented office cleaning services.' />
                <OurServicesCard icon={road} title='Road Cleaning' text='Keep streets pristine and safe with our thorough road cleaning services, enhancing community aesthetics.' />
                <OurServicesCard icon={windowed} title='Window Cleaning' text=' Enjoy crystal-clear views with our meticulous window cleaning service.' />
            </div>
        </div>
    </div>
  )
}

export default forwardRef(OurServices)