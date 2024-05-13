import React from 'react'
import { MdOutlineArrowCircleRight } from "react-icons/md";


const OurServicesCard = (props) => {
  return (
    <div className='w-[340px] h-auto flex justify-center items-start rounded bg-white text-[#032B56] mobile:w-full mobile:h-auto tablet:w-full tablet:h-auto '>
        <div className='p-[20px] flex justify-center items-start gap-[15px] mobile:flex-col tablet:flex-col'>
            <div className='w-[25%] mobile:w-full tablet:w-full'>
                <img className='w-[70px] h-[60px]' src={props.icon} alt="" />
            </div>
            <div className='w-[75%] flex flex-col justify-start items-start mobile:w-full' >
                <div className='text-[24px] mb-[25px] hover:text-[#4291FD] cursor-pointer duration-700'>{props.title}</div>
                <div className='text-[16px] text-[#333] h-[100px] font-normal leading-[27px] mb-[20px]'>{props.text}</div>
                <div className='flex justify-center items-center text-[#032B56] text-[16px] hover:text-[#4291FD] hover:translate-x-[10px] cursor-pointer duration-700 gap-[5px]'>
                    <MdOutlineArrowCircleRight className='text-[20px]' />
                    <div>Read Details</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurServicesCard