import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";

const Login = () => {
  return (
    <div className='flex justify-center items-center w-full bg-[#EEF8FF] py-[100px] h-[100vh] mobile:py-0 mobile:h-screen tablet:py-0 tablet:h-screen'>
        <div className='flex justify-center items-center w-[80%] font-[16px] mobile:w-full mobile:h-screen tablet:w-full tablet:h-screen '>
           <div className='flex justify-center items-center w-[100%] h-[450px] bg-white text-white mobile:flex-col mobile:w-full mobile:h-auto tablet:flex-col tablet:w-full tablet:h-auto'>
                <div className='w-[50%] h-full bg-[url("C:\Users\USER\Desktop\ReactJs\Cleaning\client\src\assets\images\bluebg.jpg")] bg-cover flex flex-col justify-center items-center gap-0 opacity-90 mobile:w-full mobile:text-[14px] mobile:py-[20px] tablet:w-full tablet:text-[16px] tablet:py-[40px]'>
                    <div className='text-[32px] font-medium mobile:text-[24px] tablet:text-[28px]'>Welcome back!</div>
                    <div>Dont have an account?</div>
                    <Link to='/Signup'><button className='py-[8px] px-[50px] mt-[15px] bg-[#4291FD] rounded-[25px] text-[white] font-medium text-[16px] border-[2px] border-solid border-[#4291FD] hover:bg-transparent hover:text-[white] duration-700 mobile:text-[14px] mobile:py-[5px] mobile:px-[20px] mobile:mt-[5px] tablet:text-[16px] tablet:py-[5px] tablet:px-[20px] tablet:mt-[5px]' >Sign Up</button></Link>
                </div>
                <div className='w-[50%] h-full text-[#333] flex flex-col justify-center items-start p-[50px] gap-[30px] mobile:w-full mobile:px-[20px] tablet:w-full tablet:py-[20px] '>
                    <NavLink to='/'><FaArrowLeftLong /></NavLink>
                    <div className=' text-[32px] font-medium mobile:text-[24px] tablet:text-[28px]'>Sign In</div>
                    <form className='w-full'>
                        <div className="relative z-0 w-full mb-5 group">
                        <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#34f6f2] focus:outline-none focus:ring-0 focus:border-[#34f6f2] peer" placeholder=" " required />
                        <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#34f6f2] peer-focus:dark:text-[#34f6f2] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#34f6f2] focus:outline-none focus:ring-0 focus:border-[#34f6f2] peer" placeholder=" " required />
                            <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#34f6f2] peer-focus:dark:text-[#34f6f2] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-[10px] mt-[30px]">
                            <Link to='/Account'><button className="rounded-3xl w-full bg-[#4291FD] hover:bg-transparent border-[2px] border-solid border-[#4291FD] hover:text-[#4291FD] duration-300 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline" type="button">
                                    Sign In
                            </button></Link>
                            <Link to='/Forgotpss'><a className="inline-block align-baseline font-bold text-sm text-[#333] hover:text-[#4291FD]" href="#">
                                Forgot Password?
                            </a></Link>
                        </div>
                    </form>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Login