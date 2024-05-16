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
import Otp from './Pages/OTP/Pin'
import privateRoute from './privateRoute'
import AccountDetail from './Pages/Account/AccountDetail'
import AccountComingSoon from './Pages/Account/AccountComingSoon'
import ComingSoon from './Pages/Home/ComingSoon'
import AccountVerification from './Pages/Account/AccountVerification'
import AccountVerified from './Pages/Account/AccountVerified'
import AccountNotVerified from './Pages/Account/AccountNotVerified'
import AccountVerifying from './Pages/Account/AccountVerifying'


const App = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Forgotpss" element={<Forgotpss />} />
        <Route path="/Account" element={<privateRoute><Account /></privateRoute>} />
        <Route path="/AccountDetail/:id" element={<AccountDetail/>} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Admin/*" element={<Admin />} />
        <Route path="/Pin" element={<Otp />} />
        <Route path="/AccountComingSoon" element={<AccountComingSoon />} />
        <Route path="/ComingSoon" element={<ComingSoon />} />
        <Route path="/AccountVerification" element={<AccountVerification />} />
        <Route path="/AccountVerified" element={<AccountVerified />} />
        <Route path="/AccountNotVerified" element={<AccountNotVerified />} />
        <Route path="/AccountVerifying" element={<AccountVerifying />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App