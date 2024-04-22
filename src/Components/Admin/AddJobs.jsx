import React from 'react'
import AdminSidebar from '../../Pages/Admin/AdminSidebar'
import AdminHeader from '../../Pages/Admin/AdminHeader'
import {Link} from 'react-router-dom'
import { RiAttachment2 } from "react-icons/ri";

const AddJobs = () => {
  return (
    <div className='flex bg-neutral-100 h-[calc(100vh-100px)]'>
        <div className='w-full'>
                <div className='flex justify-between items-center'>
                  <div className='font-bold text-[24px]'>Create Jobs</div>
                </div>
                <hr className='my-4' />
                <div className='flex w-full mobile:flex-col tablet:flex-col '>
                  <div className='flex-1 w-[35%] '>
                    <div className='font-medium text-[18px]'>Post Jobs</div>
                    <div className='font-normal text-[16px] text-gray-500'>This is where you add a Job to the client feed </div>
                  </div>
                  <div className='rounded-md w-[65%] bg-white p-4 flex flex-col gap-8 h-[480px] overflow-y-auto'>
                    <div>
                        <div className='font-medium text-[18px]'>Give the Job a title</div>
                        <div className='font-normal text-[16px] text-gray-500'>Keep it short and simple - this will help us match you to the right category. g</div>
                        <input className='w-full p-2 border rounded-md mt-4'  type="text" placeholder='Add Job Title' />
                    </div>
                    <div>
                        <div className='font-medium text-[18px] flex items-center gap-2'>What is the Price for this Job?</div>
                        <input className='w-full p-2 border rounded-md mt-4'  type="text" placeholder='Add the Job Price' />
                    </div>
                    <div>
                        <div className='font-medium text-[18px] flex items-center gap-2'>Where is the Clients Located?</div>
                        <input className='w-full p-2 border rounded-md mt-4'  type="text" placeholder='Add the Clients Location' />
                    </div>
                    <div>
                        <div className='font-medium text-[18px] flex items-center gap-2'>What date does the Client need the Job?</div>
                        <input className='w-full p-2 border rounded-md mt-4'  type="text" placeholder='Add the Job date' />
                    </div>
                    <div>
                        <div className='font-medium text-[18px] flex items-center gap-2'>Which category best fits this Job?</div>
                        <input className='w-full p-2 border rounded-md mt-4'  type="text" placeholder='Add a Category' />
                    </div>
                    <div>
                        <div className='font-medium text-[18px] flex items-center gap-2'>Which industry are you in?<div className='text-gray-300 font-normal'>(optional)</div></div>
                        <input className='w-full p-2 border rounded-md mt-4'  type="text" placeholder='What is the Clients Industry?' />
                    </div>
                    <div>
                        <div className='font-medium text-[18px]'>What are you looking to get done?</div>
                        <input className='w-full pt-2 pb-[100px] px-2 border rounded-md mt-4'  type="text" placeholder='Job Description...' />
                    </div>
                    <button className='flex gap-2 items-center justify-center border py-2 px-4 bg-[#032B56] text-white rounded-md hover:bg-[#4291FD] duration-300 font-bold '>POST</button>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default AddJobs