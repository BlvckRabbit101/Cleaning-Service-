import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt  } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='flex justify-center items-center w-full bg-[#032B56] py-[10px] mobile:hidden tablet:hidden ' id='Banner'>
        <div className='flex justify-between items-center w-[80%] text-[#FEE023] text-[16px] mobile:flex-col mobile:text-[12px] tablet:flex-col tablet:text-[12px] mobile:gap-[5px] tablet:gap-[5px]  '>
            <div className=' flex justify-center items-center font-medium gap-[20px]  '>
                <div>FOLLOW US:</div>
                <div className='flex justify-center items-center gap-[10px] text-[#4291FD]'>
                    <div className='border-[1px] border-solid border-[#4291FD] p-2 rounded-full hover:bg-[#4291FD] cursor-pointer hover:translate-y-[-10px] duration-[700ms] hover:text-black'><FaFacebookF  /></div>
                    <div className='border-[1px] border-solid border-[#4291FD] p-2 rounded-full hover:bg-[#4291FD] cursor-pointer hover:translate-y-[-10px] duration-[700ms] hover:text-black'><FaTwitter /></div>
                    <div className='border-[1px] border-solid border-[#4291FD] p-2 rounded-full hover:bg-[#4291FD] cursor-pointer hover:translate-y-[-10px] duration-[700ms] hover:text-black'><FaInstagram /></div>
                    <div className='border-[1px] border-solid border-[#4291FD] p-2 rounded-full hover:bg-[#4291FD] cursor-pointer hover:translate-y-[-10px] duration-[700ms] hover:text-black'><FaLinkedinIn /></div>
                </div>
            </div>
            <div className=' flex justify-center items-center gap-[20px]'>
                <div className='flex justify-center items-center gap-[10px]'>
                    <div><FaPhoneAlt className='w-[25px] h-[25px] text-[#4291FD]' /></div>
                    <Link to='https://www.whatsapp.com/'><div className='cursor-pointer hover:text-[#4291FD] duration-[700ms] font-medium'>
                        070 3710 2658
                    </div></Link>
                </div>
                <div className='flex justify-center items-center gap-[10px]'>
                    <div ><IoMailSharp className='w-[25px] h-[25px] text-[#4291FD]' /></div>
                    <Link to=''><div className='cursor-pointer hover:text-[#4291FD] duration-[700ms] font-medium'>
                        Info@cleaning.com
                    </div></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner