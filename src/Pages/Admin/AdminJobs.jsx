import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminHeader from './AdminHeader'

const AdminJobs = () => {
  return (
    <div className='flex bg-neutral-100 h-screen w-screen overflow-hidden'>
        <AdminSidebar />
        <div className='flex-1'>
            <AdminHeader />
            <div>
                Your Jobs
            </div>
        </div>
    </div>
  )
}

export default AdminJobs