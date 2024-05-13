import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom'; 
import AccountFooter from './AccountFooter'
import AccountHeader from './AccountHeader';
import { IoHomeOutline, IoShareSocial, IoInformationCircleOutline  } from "react-icons/io5";
import { HiOutlineDotsHorizontal,HiOutlineCalendar , HiOutlineClock, HiOutlineLocationMarker, HiOutlineFlag   } from "react-icons/hi";
import { Link } from 'react-router-dom';
import AccountSimilar from './AccountSimilar';

const AccountDetail = () => {

    const [change, setChange] = useState(false)
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const {id} = useParams()

    const getOneJob = async () => {
    
    await axios.get(`https://cleaning-service-0mh2.onrender.com/api/job/${id}`).then((res) => {
        console.log(res)
        setIsLoading(false)
        setData(res.data.data)
    }).catch((error) => {
        console.log(error)
    })
    }

    useEffect(()=>{
    getOneJob()
    console.log('hello');
    },[])
    
    const bookJob = async () => {
      setIsLoading(true)
      await axios.patch(`https://cleaning-service-0mh2.onrender.com/api/job/update/${data._id}/`, {status: 'confirmed'}).then((res) => {
          console.log(res)
          setData(res.data.data)
      }).catch((error) => {
          console.log(error)
      })
      }

    console.log(data)
  return (
    <div className='flex-col justify-center items-center w-full'>
      <AccountHeader />
        <div className='flex flex-col justify-center items-center w-full font-normal text-[16px] py-[50px] '>
          <div className='w-[90%] '>
            <div className='flex justify-start items-center w-full gap-2 text-[18px] mb-4'>
              <Link to='/Account'><IoHomeOutline /></Link>
              <div className='text-gray-500'>/</div>
              <div className='flex-1'>{data?.jobTitle}</div>
              <button className='flex-col justify-center items-center text-xl font-medium text-center bg-gray-100 border py-[5px] px-[10px] border-gray-300 rounded-lg hover:bg-gray-200 duration-700'><IoShareSocial /></button>
              <button onClick={() => setChange(true)} 
                onMouseLeave={() => setChange(false)}  className='flex-col justify-center items-center text-xl font-medium text-center bg-gray-100 border py-[5px] px-[10px] border-gray-300 rounded-lg hover:bg-gray-200 duration-700'><HiOutlineDotsHorizontal />
                <div className={`${change? 'visible' : 'invisible'} duration-150 `}
                  onMouseOver={() => setChange('change')} 
                  onMouseLeave={() => setChange('not-change')}>
                    
                    <div className='absolute w-[200px] top-[170px] py-2 right-[65px]  bg-white border rounded-md flex justify-center items-center bg-whitefont-medium text-blue-900 '>
                      <div className='w-full flex justify-center items-center py-2 px-2 gap-2 hover:bg-gray-100 hover:rounded-sm'>
                        <HiOutlineFlag />
                        <div> Report this Job</div>
                        </div>
                      
                    </div>
                    
                </div>
                </button>
            </div>
            <div className='flex justify-center items-start'>
              <div className='flex flex-col justify-start items-start w-[60%] gap-2'>
                <div className='text-3xl font-bold text-[#032B56] mb-2'>{data?.jobTitle}</div>
                <div className='text-[18px] font-bold py-2 pr-4 border-b border-t border-graay-400'>What is this Job about?</div>
                <div className='text-[16px] font-medium w-[90%]'>We need you to complete a Cleaning service job request within the giving time frame. We offer Residential, Commercial & Industrial cleaning service Jobs and are looking for reliable cleaning service agencies to complete this offers! Upon Job completion, a supervisor will inspect your work to ensure its completion. Please find a more detailed description of our offer below: </div>
                <div className='text-[18px] font-bold py-2 pr-4 border-b border-t border-graay-400'>Detailed Job Information</div>
                <div className='flex-col items-start justify-start gap-4 text-[16px]'>
                  <div className='font-bold'>The pay for each Job varies, paying per day, week or month!</div>
                  <div className='flex gap-2 items-center'>The pay for this Job is <div className='text-lg font-medium'> ₦{data?.price}</div>, Book Now to get more Information</div>
                </div>
                <div className='flex-col items-start justify-start gap-4 text-[16px]'>
                  <div className='font-bold'>Job Offer Date</div>
                  <div className='flex gap-2 items-center'>The Client will need this job on <div className='text-lg font-medium'>{data?.jobDate}</div> at <div>{data?.jobTime}</div> Book Now for more Info</div>
                </div>
                <div className='flex-col items-start justify-start gap-4 text-[16px]'>
                  <div className='font-bold'>Job Offer Location</div>
                  <div className='flex gap-2 items-center'>This Job would be taking place at <div className='text-lg font-medium'>{data?.jobLocation}</div>, the exact Location will be sent to you on Booking Confirmation</div>
                </div>
                <div className='flex-col items-start justify-start gap-4 text-[16px]'>
                  <div className='font-bold'>Job Offer Request</div>
                  <div>Client Request: {data?.jobDescription}</div>
                </div>
                
                
                
                
              </div>
              <div className='flex flex-col justify-start items-end w-[40%]  '>
                <div className='border-gray-300 rounded-sm border w-[80%] flex flex-col justify-start items-center text-[16px]'>
                  <div className='py-4 w-full border-b-gray-300 border-b font-bold text-center text-lg uppercase'>Job Offer</div>
                  <div className='flex justify-center items-center w-[90%] text-[18px] py-6'>
                    <div className='flex-1 font-medium '>Job Pay</div>
                    <div>₦{data?.price}</div>
                  </div>
                  <div className='font-medium text-gray-600 text-center mb-2 '>Read our detailed description before Booking Job</div>
                  <div className='w-[90%] text-gray-500 mb-2'>
                    <div className='flex justify-start items-center gap-2 '>
                      <IoInformationCircleOutline  />
                      <div>Booking Info </div>
                    </div>
                    <div className='flex justify-start items-center gap-2 '>
                      <HiOutlineCalendar  />
                      <div>Booking  Date</div>
                    </div>
                    <div className='flex justify-start items-center gap-2 '>
                      <HiOutlineClock />
                      <div>Booking Time </div>
                    </div>
                    <div className='flex justify-start items-center gap-2 '>
                      <HiOutlineLocationMarker  />
                      <div>Booking  Location</div>
                    </div>
                  </div>
                  <button disabled={isLoading}  onClick={bookJob} className='mt-4 text-xl w-[90%] text-white font-medium bg-[#4291FD] py-2 rounded-sm mb-4 shadow-lg'>{isLoading? 'Job Booked': 'Book Job'}</button>
                </div>
              </div>
            </div>
           
          </div>
        </div>
        <AccountSimilar />
        <AccountFooter />
    </div>
  )
}

export default AccountDetail