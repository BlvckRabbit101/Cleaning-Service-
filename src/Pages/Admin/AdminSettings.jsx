import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminHeader from './AdminHeader'

const AdminSettings = () => {
  return (
    <div className='flex bg-neutral-100 h-screen w-screen overflow-hidden'>
        <AdminSidebar />
        <div className='flex-1'>
            <AdminHeader />
            <div>
                Your Settings
            </div>
        </div>
    </div>
  )
}

export default AdminSettings