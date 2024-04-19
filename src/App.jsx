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
        <Route path="/Admin/*" element={<Admin />} />
        
        
      </Routes>
      
    </BrowserRouter>
  )
}

export default App