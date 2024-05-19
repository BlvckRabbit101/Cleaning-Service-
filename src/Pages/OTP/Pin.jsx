import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Pin = () => {

    const [values, setValues]= useState({})
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const handleChange = (event)=>{
        const val = event.target.value
        const name = event.target.name

        setValues({...values,[name]: val,})
    }

    const id = localStorage.getItem('otpId')
    // console.log(id)
    const onSubmit = async(e)=>{

        e.preventDefault()
        setIsLoading(true)
        await axios.patch(`https://cleaning-service-0mh2.onrender.com/api/users/verify/${id}`,values).then((res)=>{
            setIsLoading(false)
            navigate('/Login')
            console.log(res)
        }).catch((error)=>{
            console.log(error)
        })
    }
    console.log(values)
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center h-screen w-full dark:bg-gray-900">
        <div className="w-full max-w-md px-8 py-10 bg-white rounded-lg shadow-md dark:bg-gray-950 dark:text-gray-200">
            <h1 className="text-2xl font-semibold text-center mb-6">Enter OTP</h1>
            <p className="text-gray-600 text-center mb-4">Code sent to your Email</p>
            <div className="w-full my-2 flex items-center justify-center gap-4">
                <input type="number" name='otp' className="rounded-lg bg-gray-100 cursor-text text-[24px] text-center dark:bg-gray-800 w-full py-4 flex items-center justify-center" onChange={handleChange} />
            </div>
            <div className="flex items-center flex-col justify-between mb-6">
            <p className="text-gray-600 text-sm">Didn't receive code?</p>
            <div className="flex items-center space-x-2">
                <button className="px-3 py-2 text-sm font-medium text-center rounded text-gray-500 hover:text-[#4291FD] duration-300">Request via Call</button>
                <button className="px-3 py-2 text-sm font-medium text-center rounded text-gray-500 hover:text-[#4291FD] duration-300">Request Again (00:00:54)</button>
            </div>
            </div>
            <button disabled={isLoading} onClick={onSubmit} className="w-full px-4 py-2 text-lg font-medium text-white bg-[#4291FD] rounded-md hover:bg-blue-700 duration-300">{isLoading? 'Verifying...': 'Verify'}</button>
  </div>
    </div>
  )
}

export default Pin