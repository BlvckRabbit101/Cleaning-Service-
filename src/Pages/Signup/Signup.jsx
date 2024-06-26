import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";
import axios from 'axios'

const Signup = () => {

    const [values, setValues]= useState({})
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const handleChange = (event)=>{
        const val = event.target.value
        const name = event.target.name

        setValues({...values,[name]: val,})
    }

    const onSubmit = async(e)=>{

        e.preventDefault()
        setIsLoading(true)
        await axios.post('https://cleaning-service-0mh2.onrender.com/api/users/signup',values).then((res)=>{
            setIsLoading(false)
            navigate('/Pin')
            localStorage.setItem('otpId', res.data.data)
            console.log(res)
        }).catch((error)=>{
            console.log(error)
        })
    }
    console.log(values)
  return (
    <div className='flex justify-center items-center w-full h-full mobile:py-0 mobile:h-auto tablet:py-0 tablet:h-auto'>
        <div className='flex justify-center items-center w-full h-auto font-[16px] mobile:w-full mobile:h-auto tablet:w-full tablet:h-auto '>
           <div className='flex justify-center items-center w-screen h-screen  bg-white text-white mobile:flex-col mobile:w-full mobile:h-auto tablet:flex-col tablet:w-full tablet:h-auto '>
                <div className='w-[50%] h-full bg-[url("C:\Users\USER\Desktop\ReactJs\Cleaning\Cleaning-Service-\src\assets\images\bluebg.jpg")] bg-cover flex flex-col justify-center items-center gap-[0px] opacity-90 mobile:w-full mobile:text-[14px] mobile:py-[20px] tablet:w-full tablet:text-[16px] tablet:py-[40px] mobile:hidden tablet:hidden'>
                <div className='text-[32px] font-medium mobile:text-[24px] tablet:text-[28px]'>Create an Account</div>
                    <div>Already have an account?</div>
                    <Link to='/Login'><button className='py-[8px] px-[50px] mt-[15px] bg-[#4291FD] rounded-[25px] text-[white] font-medium text-[16px] border-[2px] border-solid border-[#4291FD] hover:bg-transparent hover:text-[white] duration-700 mobile:text-[14px] mobile:py-[5px] mobile:px-[20px] mobile:mt-[5px] tablet:text-[16px] tablet:py-[5px] tablet:px-[20px] tablet:mt-[5px]'>Sign in</button></Link>
                </div>
                <div className='w-[50%] h-full text-[#333] flex flex-col justify-center items-start px-[50px] gap-[10px] mobile:w-full mobile:px-[20px] mobile:py-[30px] tablet:w-full tablet:py-[30px]'>
                    <div className=' text-[32px] font-medium mobile:text-[24px] tablet:text-[28px]'>Sign Up</div>
                    <form className='w-full' onSubmit={onSubmit}>
                    <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="userName" onChange={handleChange} id="userName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#34f6f2] focus:outline-none focus:ring-0 focus:border-[#34f6f2] peer" placeholder=" " required />
                        <label for="userName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#34f6f2] peer-focus:dark:text-[#34f6f2] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Full Name</label>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="tel" onChange={handleChange} name="phoneNo" id="phoneNo" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#34f6f2] focus:outline-none focus:ring-0 focus:border-[#34f6f2] peer" placeholder=" " required />
                        <label for="phoneNo" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#34f6f2] peer-focus:dark:text-[#34f6f2] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="companyName" id="companyName" onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#34f6f2] focus:outline-none focus:ring-0 focus:border-[#34f6f2] peer" placeholder=" " required />
                        <label for="companyName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#34f6f2] peer-focus:dark:text-[#34f6f2] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
                    </div>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="email" name="email" id="email" onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#34f6f2] focus:outline-none focus:ring-0 focus:border-[#34f6f2] peer" placeholder=" " required />
                    <label for="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#34f6f2] peer-focus:dark:text-[#34f6f2] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="password" name="password" onChange={handleChange} id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#34f6f2] focus:outline-none focus:ring-0 focus:border-[#34f6f2] peer" placeholder=" " required />
                    <label for="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#34f6f2] peer-focus:dark:text-[#34f6f2] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>
                        <div className="flex flex-col items-start justify-start gap-[10px] mt-[35px]">
                        <button disabled={isLoading} className="rounded-3xl w-full bg-[#4291FD] hover:bg-transparent border-[2px] border-solid border-[#4291FD] hover:text-[#4291FD] duration-300 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline" type="submit">
                                {isLoading? 'Signing Up...': 'Sign Up'}
                            </button>
                            <Link to='/Login'><a className="inline-block align-baseline font-bold text-sm text-[#333] hover:text-[#4291FD]" href="#">
                                Already have an account?
                            </a></Link>
                        </div>
                    </form>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Signup