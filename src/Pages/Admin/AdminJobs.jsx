import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminHeader from './AdminHeader'
import {Link} from 'react-router-dom'
import JobData from '../../Components/Admin/JobData'
import OurJobs from '../../Components/Admin/OurOrder'

const AdminJobs = () => {
  return (
    <div className='flex bg-neutral-100 overflow-y-auto h-[calc(100vh-100px)]'>
      <div className=' w-full'>
                <div className='flex justify-between items-center'>
                  <div className='font-bold text-[24px]'>Jobs</div>
                  <Link to='/Admin/AddJobs '><button className='py-2 px-4 bg-white border rounded-md font-medium hover:text-gray-500 hover:border uppercase'>Create Job</button></Link>
                </div>
                <hr className='my-4 ' />
                <div className='flex w-full gap-4 mobile:flex-col tablet:flex-col'>
                  <div className='flex-1 w-full  bg-white p-4 rounded-md'>
                    <div className='font-medium text-[18px]'>Your Jobs</div>
                    <div className='font-normal text-[16px] text-gray-500'>All Available Jobs are displayed here</div>
                    <hr className='mt-4 ' />
                    <JobData />
                  </div>
                  {/* <div className='rounded-md w-[20rem] bg-white p-4 mobile:w-full tablet:w-full'>
                    <div className='font-medium text-[18px]'>Most Popular Jobs</div>
                    <OurJobs />
                  </div> */}
                </div>
            </div>
    </div>
  )
}

export default AdminJobs