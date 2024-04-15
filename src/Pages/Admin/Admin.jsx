import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminHeader from './AdminHeader'
import Overview from '../../Components/Admin/Overview'

const Admin = () => {
  return (
    <div className='flex bg-neutral-100 h-screen w-screen overflow-hidden'>
        <AdminSidebar />
        <div className='flex-1'>
            <AdminHeader />
            <div className='p-4'>
              <Overview />
            </div>
        </div>
    </div>
  )
}

export default Admin