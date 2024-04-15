import React from 'react'
import { IoBagHandle } from 'react-icons/io5'
import { HiOutlineUserAdd, HiOutlineUsers, HiOutlineDocumentText } from "react-icons/hi";
import { GrUserWorker } from "react-icons/gr";

function DashboardStat () {
  return (
    <div className='flex gap-4 w-full'>
        <BoxWrapper>
            <div className='bg-sky-500 w-12 h-12 rounded-full flex items-center justify-center'>
                <IoBagHandle className='text-2xl text-white' />
            </div>
            <div className='pl-4'>
                <div className='text-sm text-gray-500 font-light'>Total Orders</div>
                <div className='flex items-center'>
                    <div className='text-xl text-gray-700 font-semibold'>N30,900</div>
                    <div className='text-sm text-green-500 pl-2'>+2200</div>
                </div>
            </div>
        </BoxWrapper>
        <BoxWrapper>
            <div className='bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center'>
                <HiOutlineUsers className='text-2xl text-white' />
            </div>
            <div className='pl-4'>
                <div className='text-sm text-gray-500 font-light'>Total Users</div>
                <div className='flex items-center'>
                    <div className='text-xl text-gray-700 font-semibold'>10,323</div>
                    <div className='text-sm text-green-500 pl-2'>+220</div>
                </div>
            </div>
        </BoxWrapper>
        <BoxWrapper>
            <div className='bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center'>
                <HiOutlineDocumentText className='text-2xl text-white' />
            </div>
            <div className='pl-4'>
                <div className='text-sm text-gray-500 font-light'>Job Offers</div>
                <div className='flex items-center'>
                    <div className='text-xl text-gray-700 font-semibold'>420</div>
                    <div className='text-sm text-green-500 pl-2'>+18</div>
                </div>
            </div>
        </BoxWrapper>
        <BoxWrapper>
            <div className='bg-green-600 w-12 h-12 rounded-full flex items-center justify-center'>
                <GrUserWorker className='text-2xl text-white' />
            </div>
            <div className='pl-4'>
                <div className='text-sm text-gray-500 font-light'>Total Cleaners</div>
                <div className='flex items-center'>
                    <div className='text-xl text-gray-700 font-semibold'>323</div>
                    <div className='text-sm text-green-500 pl-2'>+12</div>
                </div>
            </div>
        </BoxWrapper>
    </div>
  )
}

export default DashboardStat

function BoxWrapper({children}){
    return (
        <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center'>{children}</div>
    )
}