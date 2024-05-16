import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { MdVerified } from "react-icons/md";

const AccountNotVerified = () => {
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
        <div class="py-6 h-[400px] w-[500px] bg-white rounded-lg shadow-xl flex-col items-center justify-center text-center">
            <MdVerified className='text-2xl text-red-600 my-4 w-full ' />
            <div className='text-xl'>Verification denied</div>
            <div className='my-4 text-sm'>Sorry, <b>{data?.userName}!</b> </div>
            <div className='text-md px-10 pb-10 '>During your background check, we  had to reject your application. Please fill out your profile completely and confirm your company email. Without this we will not be able to verify your data.</div>
            <hr className='w-full' />
            <div className='flex items-center justify-center gap-12 w-full mt-8 '>
              <Link to='/AccountVerifying'><button className='text-red-700 font-medium hover:text-red-500 duration-400'>Skip</button></Link>

              <Link to='/Profile'><button className='py-2 px-12 rounded-2xl text-sm text-[#032B56] font-medium bg-transparent border border-[#032B56] hover:bg-[#4291fd] hover:text-white hover:border-[#4291fd] duration-200'>Go to my profile</button></Link>
            </div>
        </div>
    </div>
  )
}

export default AccountNotVerified