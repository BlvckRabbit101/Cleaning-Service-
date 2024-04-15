import React from 'react'
import { HiOutlineSearch, HiOutlineChatAlt, HiOutlineBell } from 'react-icons/hi'
import profileimg from '../../assets/images/Professor.jpeg'

export default function AdminHeader () {
  return (
    <div className='bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200'>
        <div className='flex items-center justify-start h-10 w-[24rem] border border-gray-300 rounded-sm px-2'>
            <HiOutlineSearch className='text-gray-400 text-[20px] mr-2 ' />
            <input type="text" name="" id="" placeholder='Search...' className='text-sm outline-none w-full ' />
        </div>
        <div className='flex items-center gap-4 mr-2 text-[#032B56]'>
            <HiOutlineChatAlt fontSize={24} />
            <HiOutlineBell fontSize={24} />

            <div>
                <img src={profileimg} alt="" className='rounded-full h-10 w-10 ring-2' />
            </div>
        </div>
    </div>
  )
} 
