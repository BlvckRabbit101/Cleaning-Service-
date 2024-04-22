import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminHeader from './AdminHeader'

const AdminSettings = () => {
  return (
    <div className='flex bg-neutral-100 overflow-hidden'>
        <div className='w-full'>
                <div className='font-bold text-[24px]'>Settings</div>
                <hr className='my-4' />
                <div className='flex w-full mobile:flex-col tablet:flex-col'>
                  <div className='flex-1 w-[35%] '>
                    <div className='font-medium text-[18px]'>General Setting</div>
                    <div className='font-normal text-[16px] text-gray-500'>Admin configuration settings</div>
                  </div>
                  <div className='rounded-md w-[65%] bg-white p-4 flex flex-col gap-8'>
                    <div>
                        <div className='font-medium text-[18px]'>Give the project brief a title</div>
                        <div className='font-normal text-[16px] text-gray-500'>Keep it short and simple - this will help us match you to the right category.</div>
                        <input className='w-full p-2 border rounded-md mt-4'  type="text" placeholder='Job Title' />
                    </div>
                    <div>
                        <div className='font-medium text-[18px] flex items-center gap-2'>What is the Price for this Service?</div>
                        <input className='w-full p-2 border rounded-md mt-4'  type="text" placeholder='Add Price' />
                    </div>
                    
                    <button className='flex gap-2 items-center justify-center border py-2 px-4 bg-[#032B56] text-white rounded-md hover:bg-[#4291FD] duration-300 font-bold  '>SAVE</button>
                  </div>
                </div>
          </div>
    </div>
  )
}

export default AdminSettings