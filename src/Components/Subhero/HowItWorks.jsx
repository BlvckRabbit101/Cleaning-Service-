import React from 'react'

const HowItWorks = (props) => {
  return (
    <div className='w-[350px] h-[250px] flex flex-col justify-start items-center tablet:w-[30%] tablet:h-auto tablet:text-center '>
        <img className='w-[130px] h-[130px] mb-[40px] mobile:w-[100px] mobile:h-[100px] mobile:mb-[15px] tablet:w-[80px] tablet:h-[80px] tablet:mb-[15px]' src={props.icon} alt="" />
        <div className='text-[24px] font-medium text-[#032B56] mobile:text-[22px] tablet:text-[18px]' >{props.title}</div>
        <div className='text-center text-[#333] font-normal text-[15px] mobile:w-[80%] tablet:text-[12px]'>{props.text}</div>
    </div>
  )
}

export default HowItWorks