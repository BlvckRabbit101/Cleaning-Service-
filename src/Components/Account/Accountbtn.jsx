import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";

const Accountbtn = (props) => {
  return (
    <button className='flex justify-center items-center text-sm font-medium text-center text-gray-900 bg-gray-100 border py-[2px] px-[10px] border-gray-300 rounded-2xl hover:bg-gray-200 duration-700'>{props.title}<RiArrowDropDownLine className='text-[28px]' /></button>
  )
}

export default Accountbtn