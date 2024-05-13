import React, { useEffect, useState } from 'react'
import {HiOutlineBell } from 'react-icons/hi'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminNotification = () => {

  const [change, setChange] = useState(false)
  const [data,setData] = useState()

  const navigate = useNavigate()

  const getOrders = async () => {
    
    await axios.get('https://cleaning-service-0mh2.onrender.com/api/job').then((res) => {
      console.log(res)
      setData(res.data.data)
      // setShowMore(newData.slice(0,20))
    }).catch((error) => {
      console.log(error)
    })
  }

  const filteredData = data?.filter((el)=> el.status === "confirmed")
  const filterOrders = filteredData?.filter((el)=> el.notifyAdmin)
  const ordersLength = filterOrders?.length

  useEffect(()=>{
    getOrders()
    console.log('good');
  },[])

 

  console.log(data)

  return (
    <div onMouseOver={() => setChange(true)} 
    onMouseLeave={() => setChange(false)} className='relative'>
    <HiOutlineBell className='cursor-pointer duration-300 mobile:hidden tablet:hidden' fontSize="30px" />
      {ordersLength > 0 ?<div className='rounded-full bg-red-600 w-5 h-5 text-white flex items-center justify-center text-xs top-[-10px] right-[-7px] absolute'>{ordersLength > 9? "9+" : ordersLength}</div> : null}
    <div className={`${change? 'visible' : 'invisible'} duration-150 `}
      onMouseOver={() => setChange('change')} 
      onMouseLeave={() => setChange('not-change')}>
        
        <div className='absolute h-[60px] w-[300px] top-10 right-1 border rounded-md py-4  flex justify-center items-center bg-white font-medium text-red-400'>
          
          <Link to='/Admin/AdminOrders' className='w-[90%]'>
            <div className='cursor-pointer flex py-2 h-10 w-full hover:bg-gray-100 hover:rounded-sm gap-2 justify-center items-center'>
                <div><HiOutlineBell className='text-xl' /></div>
                <div>You Have {ordersLength} New Order(s)</div>
            </div>
          </Link>
        </div>
         
    </div>
  </div>
  )
}

export default AdminNotification