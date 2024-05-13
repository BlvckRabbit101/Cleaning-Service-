import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { IoStarOutline , IoTime, IoLocationSharp} from "react-icons/io5";
import apartA from '../../assets/images/apartment.jpg'

const AccountCard = (props) => {

  const [data, setData] = useState()

  const getJob = async () => {
  
  await axios.get('https://cleaning-service-0mh2.onrender.com/api/job').then((res) => {
    console.log(res)
    setData(res.data.data)
  }).catch((error) => {
    console.log(error)
  })
}

useEffect(()=>{
  getJob()
  console.log('hello');
},[])

console.log(data)

  return (
    <>
    {data?.map((props) => (
    <div className='flex flex-col justify-start items-start px-6 pt-6 pb-6 w-[32%] bg-white rounded-xl shadow-lg transform hover:scale-105 transition duration-500 hover:bg-gray-100 mobile:w-full tablet:w-full'>
        <h3 className="mb-3 text-xl font-bold text-[#4291FD]">Open</h3>
        <div className="relative">
          <img className="w-full rounded-xl" src={apartA}/>
          <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">₦{props.price}</p>
        </div>
        <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">{props.jobTitle}</h1>
        <div className="my-4 flex-1">
                <div className='flex gap-1'>
                    <IoTime className='h-6 w-6 text-[#4291FD] mb-1.5' />
                    <p>{props.jobDate}</p>
                </div>
                <div className='flex gap-1'>
                    <IoLocationSharp className='h-6 w-6 text-[#4291FD] mb-1.5' />
                    <p>{props.jobLocation}</p>
                </div>
                <div className=' h-[70px]'>
                  <p>{props.jobDescription}</p>
                </div>
        </div>
        <Link to={`/AccountDetail/${props.jobID}`} className='w-full'><button className="mt-4 text-xl w-full text-white font-medium bg-[#4291FD] py-2 rounded-xl shadow-lg">Book Job</button></Link>
          
    </div>
    ))}
    </>
  )
}

export default AccountCard