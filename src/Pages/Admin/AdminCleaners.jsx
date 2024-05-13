import React from 'react'
import CleanersData from '../../Components/Admin/CleanersData'
import OurCleaner from '../../Components/Admin/OurCleaner'


const AdminCleaners = () => {
  return (
    <div className='flex bg-neutral-100 overflow-hidden'>
       <div className=' w-full top-16'>
                <div className='flex justify-between items-center'>
                  <div className='font-bold text-[24px]'>Cleaners</div>
                </div>
                <hr className='my-4 ' />
                <div className='flex w-full gap-4 mobile:flex-col tablet:flex-col'>
                  <div className='flex-1 w-full mobile:w-[calc(100vw-10px)] bg-white p-4 rounded-md'>
                    <div className='font-medium text-[18px]'>Your Cleaners</div>
                    <div className='font-normal text-[16px] text-gray-500'>All Available Cleaners are displayed here</div>
                    <hr className='mt-4' />
                    <CleanersData />
                  </div>
                </div>
            </div>
    </div>
  )
}

export default AdminCleaners