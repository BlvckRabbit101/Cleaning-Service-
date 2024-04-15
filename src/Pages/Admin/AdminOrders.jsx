import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminHeader from './AdminHeader'

const AdminOrders = () => {
  return (
    <div className='flex bg-neutral-100 h-screen w-screen overflow-hidden'>
        <AdminSidebar />
        <div className='flex-1'>
            <AdminHeader />
            <div>
                Your Orders
            </div>
        </div>
    </div>
  )
}

export default AdminOrders