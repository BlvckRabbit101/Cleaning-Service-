import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Pages/Header/Header'
import Footer from './Pages/Footer/Footer'
import Banner from './Pages/Banner/Banner'
import Subhero from './Pages/Home/SubHero/Subhero'
import OurServices from './Pages/Home/OurServices/OurServices'
import Reviews from './Pages/Home/Review/Reviews'
import Hero from './Pages/Home/Hero/Hero'
import Contact from './Pages/Home/Contact/Contact'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import Forgotpss from './Pages/Forgotpss/Forgotpss'
import Account from './Pages/Account/Account'
import Profile from './Pages/Profile/Profile'
import Admin from './Pages/Admin/Admin'
import AdminOrders from './Pages/Admin/AdminOrders'
import AdminCleaners from './Pages/Admin/AdminCleaners'
import AdminCustomers from './Pages/Admin/AdminCustomers'
import AdminJobs from './Pages/Admin/AdminJobs'
import AdminMessages from './Pages/Admin/AdminMessages'
import AdminSettings from './Pages/Admin/AdminSettings'
import AdminSupport from './Pages/Admin/AdminSupport'


const App = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Forgotpss" element={<Forgotpss />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/AdminOrders" element={<AdminOrders />} />
        <Route path="/AdminCleaners" element={<AdminCleaners />} />
        <Route path="/AdminCustomers" element={<AdminCustomers />} />
        <Route path="/AdminJobs" element={<AdminJobs />} />
        <Route path="/AdminMessages" element={<AdminMessages />} />
        <Route path="/AdminSettings" element={<AdminSettings />} />
        <Route path="/AdminSupport" element={<AdminSupport />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App