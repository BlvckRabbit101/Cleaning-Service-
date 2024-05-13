import React, { useState } from 'react'
import AdminSidebar from '../../Pages/Admin/AdminSidebar'
import AdminHeader from '../../Pages/Admin/AdminHeader'
import {Link, useNavigate} from 'react-router-dom'
import { RiAttachment2 } from "react-icons/ri";
import axios from 'axios'

const AddClients = () => {

  const [values, setValues]= useState({})
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const handleChange = (event)=>{
        const val = event.target.value
        const name = event.target.name

        setValues({...values,[name]: val,})
    }

    const userToken = JSON.parse(localStorage.getItem('usertoken'))
    const onSubmit = async(e)=>{

        e.preventDefault()
        setIsLoading(true)
        const config = {
          authorization: `Bearer ${userToken.logInUserToken}`
        }
        await axios.post('https://cleaning-service-0mh2.onrender.com/api/users/signup/staff',values, {headers: config}).then((res)=>{
            setIsLoading(false)
            navigate('/Admin/AdminClients')
            console.log(res)
        }).catch((error)=>{
            console.log(error)
        })
    }
    console.log(values)

  return (
    <div className='flex bg-neutral-100 h-[calc(100vh-100px)]'>
        <div className='w-full'>
                <div className='flex justify-between items-center'>
                  <div className='font-bold text-[24px]'>Create Clients</div>
                </div>
                <hr className='my-4' />
                <div className='flex w-full mobile:flex-col tablet:flex-col '>
                  <div className='flex-1 w-[35%] '>
                    <div className='font-medium text-[18px]'>Post Clients</div>
                    <div className='font-normal text-[16px] text-gray-500'>This is where you add your Clients </div>
                  </div>
                  <div className='rounded-md w-[65%] bg-white p-4 flex flex-col gap-8 h-[480px] overflow-y-auto'>
                    <div>
                        <div className='font-medium text-[18px]'>What is the Client Name?</div>
                        <input onChange={handleChange} className='w-full p-2 border rounded-md mt-4'  type="text" placeholder='Client Name' name='userName' />
                    </div>
                    <div>
                        <div className='font-medium text-[18px] flex items-center gap-2'>What is the Company Name?</div>
                        <input onChange={handleChange} className='w-full p-2 border rounded-md mt-4'  type="text" placeholder='Company Name' name='companyName' />
                    </div>
                    <div>
                        <div className='font-medium text-[18px] flex items-center gap-2'>Where is the Clients Located?</div>
                        <input onChange={handleChange} className='w-full p-2 border rounded-md mt-4'  type="text" placeholder='Add the Clients Location i.e., City, State' name='address' />
                    </div>
                    <div>
                        <div className='font-medium text-[18px] flex items-center gap-2'>What is the Clients Email Address</div>
                        <input onChange={handleChange} className='w-full p-2 border rounded-md mt-4'  type="text" placeholder='Email Address...' name='email'/>
                    </div>
                    <div>
                        <div className='font-medium text-[18px] flex items-center gap-2'>What is the Clients Phone Number</div>
                        <input onChange={handleChange} className='w-full p-2 border rounded-md mt-4'  type="text" placeholder='Phone Number...' name='phoneNo' />
                    </div>
                    <button disabled={isLoading} onClick={onSubmit} className='flex gap-2 items-center justify-center border py-2 px-4 bg-[#032B56] text-white rounded-md hover:bg-[#4291FD] duration-300 font-bold '>{isLoading? 'POSTING...': 'POST'}</button>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default AddClients