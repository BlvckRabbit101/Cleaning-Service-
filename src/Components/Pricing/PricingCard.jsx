import React from 'react'
import { NavLink } from 'react-router-dom'

const PricingCard = (props) => {
  return (
    <div className='w-[340px] flex justify-center items-center rounded bg-white text-[#032B56] tablet:w-[250px] '>
        <div className='p-[30px] w-[450px] flex flex-col justify-center items-center rounded-lg  text-center bg-[#EEF8FF] tablet:w-full'>
            <img className='w-[50px] h-[50px] object-contain ' src={props.icon} alt="" />
            <div className='text-[28px] font-bold'>{props.title}</div>
            <div className='text-[28px] font-bold'>${props.price}</div>
            <ul className='flex flex-col justify-center items-start list-disc gap-[0px] text-[#4291FD] mb-4'>
                <li> Professional Cleaner</li>
                <li>  Kitchen Cleaning</li>
                <li>  Roof Cleaning</li>
                <li>  Bedrooms Cleaning</li>
                <li> Bathroom Cleaning</li>
                <li> Post Construction</li>
            </ul>
            <NavLink to='/Signup'><button className='py-[8px] px-[20px] bg-[#4291FD] rounded-[25px] text-white font-medium text-[16px] border-[2px] border-solid border-[#4291FD] hover:bg-transparent hover:text-[#4291FD] duration-700'>GET SERVICE</button></NavLink>
        </div>
    </div>
  )
}

export default PricingCard