import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { MdVerified } from "react-icons/md";

const AccountVerified = () => {
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
    <div class="w-full h-screen pb-8 bg-gray-100 flex items-center justify-center">
        <div class="py-6 h-[380px] w-[500px] bg-white rounded-lg shadow-xl flex-col items-center justify-center text-center">
            <MdVerified className='text-2xl text-[#4291fd] my-4 w-full ' />
            <div className='text-xl'>Your account is verified</div>
            <div className='my-4 text-sm'>Congratulations, <b>{data?.userName}!</b> </div>
            <div className='text-md px-10 pb-10 '>We have verified your application and confirmed your status in your profile. You can learn more about the new features of your profile by clicking the "Continue" button.</div>
            <hr className='w-full' />
            <Link to='/Profile'><button className='mt-8 py-2 px-12 rounded-2xl text-sm text-white font-medium bg-[#4291fd] hover:bg-[#032B56] duration-200'>Continue</button></Link>
        </div>
    </div>
  )
}

export default AccountVerified