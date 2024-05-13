import React, { useEffect, useState } from 'react'
import axios from "axios";
import { HiOutlineUsers } from "react-icons/hi";

const DashboardUsers = () => {

  const [data, setData] = useState()

  const getUser = async () => {
  
  await axios.get('https://cleaning-service-0mh2.onrender.com/api/users').then((res) => {
    console.log(res)
    setData(res.data.data)
  }).catch((error) => {
    console.log(error)
  })
}

useEffect(()=>{
  getUser()
  console.log('hello');
},[])

console.log(data)
const myData = data?.length
console.log(myData)

  return (
    <div className='flex'>
        <div className='bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center'>
                <HiOutlineUsers className='text-2xl text-white' />
            </div>
            <div className='pl-4'>
                <div className='text-sm text-gray-500 font-medium'>Total Users</div>
                <div className='flex items-center'>
                    <div className='text-xl text-gray-700 font-semibold'>{myData}</div>
                    {/* <div className='text-sm text-green-500 pl-2'>+0</div> */}
                </div>
            </div>
    </div>
  )
}

export default DashboardUsers