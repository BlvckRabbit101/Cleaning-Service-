import { useEffect, useState } from 'react'
import {HiOutlineBell } from 'react-icons/hi'
import { IoWarning } from "react-icons/io5";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useGetSingleUserQuery } from '../../ReactRedux/UserRTK';

const AccountNotification = () => {

  const [change, setChange] = useState(false)
  const [jobData,setJobData] = useState()

  const {data,isLoading} = useGetSingleUserQuery({})

  const getOrders = async () => {
    
    await axios.get('https://cleaning-service-0mh2.onrender.com/api/job').then((res) => {
      setJobData(res.data.data)
      // setShowMore(newData.slice(0,20))
    }).catch((error) => {
      console.log(error)
    })
  }


  const filteredData = jobData?.filter((el)=> el.status === "confirmed")
  const filterOrders = filteredData?.filter((el)=> el.notifyAdmin)
  const ordersLength = filterOrders?.length

  useEffect(()=>{
    getOrders()
  },[])
  if (isLoading) return <h1>Loading...</h1>


  return (
    <div onMouseOver={() => setChange(true)} 
    onMouseLeave={() => setChange(false)} className='relative'>
    <HiOutlineBell className='cursor-pointer duration-300 hover:text-[#4291fd]' fontSize="24px"  />
      <div className='rounded-full bg-red-5cd00 w-3 h-3 text-white flex items-center justify-center text-xs top-[-5px] right-[0px] absolute'></div>
    <div className={`${change? 'visible' : 'invisible'} duration-150 `}
      onMouseOver={() => setChange('change')} 
      onMouseLeave={() => setChange('not-change')}>
        
        <div className='absolute h-auto w-[330px] top-10 right-1 border rounded-md py-4  flex justify-center items-center bg-white font-medium '>
          
          <div className='w-[90%]'>
            <Link to='/AccountVerification' className='w-[90%]'>
           {data?.data?.isVerified === true ? <div className='cursor-pointer flex py-2 h-10 w-full hover:bg-gray-100 hover:rounded-sm gap-2 justify-center items-center text-black'>
                <div><IoWarning className='text-2xl text-yellow-500 ' /></div>
                 <div>Your account is Not Verified</div> 
            </div>: null}
            </Link>
            <div className='cursor-pointer flex py-2 h-10 w-full hover:bg-gray-100 hover:rounded-sm gap-2 justify-center items-center text-red-400'>
                <div><HiOutlineBell className='text-2xl ' /></div>
                <div>There are {ordersLength} New Jobs(s) available</div>
            </div>
          </div>
        </div>
         
    </div>
  </div>
  )
}

export default AccountNotification