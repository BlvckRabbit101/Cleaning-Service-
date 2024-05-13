import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminHeader from './AdminHeader'
import Overview from '../../Components/Admin/Overview'
import { Routes, Route } from 'react-router-dom'
import AdminOrders from '../../Pages/Admin/AdminOrders'
import AdminCleaners from '../../Pages/Admin/AdminCleaners'
import AdminClients from '../../Pages/Admin/AdminClients'
import AdminJobs from '../../Pages/Admin/AdminJobs'
import AdminMessages from '../../Pages/Admin/AdminMessages'
import AdminSettings from '../../Pages/Admin/AdminSettings'
import AdminSupport from '../../Pages/Admin/AdminSupport'
import AddJobs from '../../Components/Admin/AddJobs'
import AddClients from '../../Components/Admin/AddClients'


const Admin = () => {
  return (
    <div className='flex bg-neutral-100 w-screen'>
        <AdminSidebar/>
        <div className='flex-1 mobile:w-full'>
            <AdminHeader />
            <div className='p-4'>
              
              <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/AdminOrders" element={<AdminOrders />} />
              <Route path="/AdminCleaners" element={<AdminCleaners />} />
              <Route path="/AdminClients" element={<AdminClients />} />
              <Route path="/AdminJobs" element={<AdminJobs />} />
              <Route path="/AdminMessages" element={<AdminMessages />} />
              <Route path="/AdminSettings" element={<AdminSettings />} />
              <Route path="/AdminSupport" element={<AdminSupport />} />
              <Route path="/AddJobs" element={<AddJobs />} />
              <Route path="/AddClients" element={<AddClients />} />
              
            </Routes>
            </div>
        </div>
        
    </div>
  )
}

export default Admin