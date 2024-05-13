import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom'; 
import { IoBagHandle } from 'react-icons/io5'

const DashboardOrders = () => {
  const [data, setData] = useState()

    const getUser = async () => {
    
    await axios.get('https://cleaning-service-0mh2.onrender.com/api/job').then((res) => {
      console.log(res)
      setData(res.data.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  const filteredData = data?.filter((el)=> el.status === "complete")
  const priceData = filteredData?.reduce((index,el)=>{
    return index += el.price
  }, 0)

  const filterData = data?.filter((el)=> el.status === "confirmed")
  const newData = filterData?.reduce((index,el)=>{
    return index += el.price
  }, 0)
  
  console.log(filteredData)
  useEffect(()=>{
    getUser() 
  },[])


  return (
    <div className='flex'>
        <div className='bg-sky-500 w-12 h-12 rounded-full flex items-center justify-center'>
            <IoBagHandle className='text-2xl text-white' />
        </div>
        <div className='pl-4'>
            <div className='text-sm text-gray-500 font-medium'>Total Orders</div>
            <div className='flex items-center'>
                <div className='text-xl text-gray-700 font-semibold'>₦{priceData}</div>
                <div className='text-sm text-green-500 pl-2'>+₦{newData}</div>
            </div>
        </div>
    </div>
  )
}

export default DashboardOrders