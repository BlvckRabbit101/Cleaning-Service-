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
                <OurServicesCard icon={pot} title='Kitchen Cleaning' text='Bras fringilla conubia odios uira metus torquent commodo quam praesent torna pede' />
                <OurServicesCard icon={vacuum} title='Carpet Cleaning' text='Bras fringilla conubia odios uira metus torquent commodo quam praesent torna pede' />
                <OurServicesCard icon={house} title='House Cleaning' text='Bras fringilla conubia odios uira metus torquent commodo quam praesent torna pede' />
                <OurServicesCard icon={office} title='Office Cleaning' text='Bras fringilla conubia odios uira metus torquent commodo quam praesent torna pede' />
                <OurServicesCard icon={road} title='Road Cleaning' text='Bras fringilla conubia odios uira metus torquent commodo quam praesent torna pede' />
                <OurServicesCard icon={windowed} title='Window Cleaning' text='Bras fringilla conubia odios uira metus torquent commodo quam praesent torna pede' />
            </div>
        </div>
    </div>
  )
}

export default forwardRef(OurServices)