import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
import Notification from './Pages/Account/Notification'
import Wishlist from './Pages/Account/Wishlist'
import Jobs from './Pages/Account/Jobs'


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
        <Route path="/Notification" element={<Notification />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/Jobs" element={<Jobs />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App