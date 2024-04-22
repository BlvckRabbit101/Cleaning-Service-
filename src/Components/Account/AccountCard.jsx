import React from 'react'
import { IoStarOutline } from "react-icons/io5";

const AccountCard = (props) => {
  return (
    <div className='flex flex-col justify-start items-start py-[20px] w-[340px] bg-gray-100 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 cursor-pointer hover:bg-gray-200 '>
        <div className='flex flex-col justify-start items-start w-full px-[20px]'>
            <div className='flex justify-between items-center w-full'>
                <div>
                    <img src="" alt="" />
                    <div className='text-[22px] font-bold text-[#032B56] uppercase'>{props.title}</div>
                </div>
            </div>
            <div className='text-gray-700'>{props.local}</div>
            <div className='font-bold text-[22px] text-orange-700'>₦{props.price}</div>
            <div className='text-gray-700'>{props.descr} </div>
            <div className='text-green-600 font-medium mt-2 '>{props.date}</div>
            <button class="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">Book Job</button>
        </div>
    </div>
  )
}

export default AccountCard