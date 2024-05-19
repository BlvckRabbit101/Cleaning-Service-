import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { MdVerified } from "react-icons/md";

const AccountVerifying = () => {
    const [data, setData] = useState()

  const userToken = JSON.parse(localStorage.getItem('usertoken'))
  const getUser = async () => {
    const config = {
      authorization: `Bearer ${userToken.logInUserToken}`
    }
    await axios.get('https://cleaning-service-0mh2.onrender.com/api/users/profile',{headers: config}).then((res) => {
      console.log(res)
      setData(res.data.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(()=>{
    getUser()
  },[])

  console.log(data)


  return (
    <div className="w-full h-screen pb-8 bg-gray-100 flex items-center justify-center">
        <div className="py-6 h-[380px] w-[500px] bg-white rounded-lg shadow-xl flex-col items-center justify-center text-center">
            <MdVerified className='text-2xl text-gray-400 my-4 w-full ' />
            <div className='text-xl'>Your application is being Screened</div>
            <div className='my-4 text-sm'>Hello, <b>{data?.userName}!</b> </div>
            <div className='text-md px-16 pb-10 '>We have recieved your request to verify your profile. We are currently verifying your information. This may take 2 to 5 days.</div>
            <hr className='w-full' />
            <div className='flex items-center justify-center gap-12 w-full mt-8 '>
              <Link to='/AccountNotVerified'><button className='text-red-700 font-medium hover:text-red-500 duration-400'>Cancel Request</button></Link>

              <Link to='/Account'><button className='py-2 px-12 rounded-2xl text-sm text-[#032B56] font-medium bg-transparent border border-[#032B56] hover:bg-[#4291fd] hover:text-white hover:border-[#4291fd] duration-200'>Okay, go back</button></Link>
            </div>
        </div>
    </div>
  )
}

export default AccountVerifying