import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const OurCleaner = () => {
	
	const [data, setData] = useState()

    const getUser = async () => {
    
    await axios.get('https://cleaning-service-0mh2.onrender.com/api/users').then((res) => {
      console.log(res)
      setData(res.data.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  const filteredData = data?.filter((el)=> el.isVerified === true)

  console.log(filteredData)

  useEffect(()=>{
    getUser()
    console.log('hello');
  },[])

  console.log(data)
  const newData = data?.slice(0,8)

  return (
<div className='bg-white pb-4 rounded-sm border-none  w-[16.1rem] mobile:w-full tablet:w-full'>
        {filteredData?.map((props) => (
        <div className='mb-[10px] mt-[10px]'>
            <div className='text-md text-gray-700 font-bold'>{props.userName}</div>
            <div className='flex items-center'>
                <div className='text-sm text-gray-500 font-semibold'>{props.companyName}</div>
                <div className='text-sm text-green-500 pl-2'>{props.isVerified? 'Verified' : 'Not Verified'}</div>
            </div>
        </div>
        ))}
    </div>
  )
}

export default OurCleaner