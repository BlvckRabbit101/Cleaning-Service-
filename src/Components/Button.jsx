import React from 'react'

const 
button = (props) => {
  return (
    <div>
        <button className='py-[10px] px-[20px] bg-[#4291FD] rounded-[25px] text-[white] font-bold text-[16px] sm:text-[14px] md:text-[14px] border-[2px] border-solid border-[#4291FD] hover:bg-[#032B56] hover:border-[#032B56]  hover:text-[#FEE023] duration-700'>{props.title}</button>
    </div>
  )
}

export default 
button