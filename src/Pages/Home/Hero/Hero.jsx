import React from 'react'
import imaged from '../../../assets/images/herobg.jpg'
import HeroMain from '../../../assets/images/Heromage1.png'
import HeroMain1 from '../../../assets/images/dashboard1.jpg'
import { NavLink } from 'react-router-dom'
import Button from '../../../Components/Button'
import { TfiHeadphoneAlt } from "react-icons/tfi";

const Hero = () => {
  return (
    <div className='flex justify-center items-center w-full bg-[url("C:\Users\USER\Desktop\ReactJs\Cleaning\client\src\assets\images\herobg4.jpg")] h-[80vh] bg-cover mobile:h-[80vh] tablet:h-[80vh]' id='Hero'>
        <div className='flex justify-center items-center w-full h-full bg-blue-500 bg-opacity-30 mobile:h-[80vh] tablet:h-[80vh]'>
        <div className='flex justify-center items-center w-[80%] gap-[100px] mobile:flex-col mobile:w-[90%] tablet:flex-col tablet:w-[90%]  '>
            <div className='w-full flex flex-col justify-center items-start mobile:w-[full] mobile:items-center mobile:text-center tablet:w-full tablet:items-center tablet:text-center '>
                <div className='text-[54px] leading-[74px] text-white font-medium w-[700px] font-sans mobile:text-[32px] mobile:w-full mobile:leading-[50px] tablet:text-[32px] tablet:w-full tablet:leading-[30px]'>Your Ultimate B2B Cleaning Service Solution. </div>
                <div className='w-[500px] text-[16px] mb-[36px] leading-[29px] text-[white] font-normal mobile:w-full mobile:leading-[30px]  tablet:w-full tablet:leading-[20px] mobile:mb-[10px] tablet:mb-[10px]'> Schedule a personalized demo today and discover how CleanX can transform your cleaning service operations, delivering efficiency, reliability, and peace of mind.</div>
                <NavLink to='/Signup'><Button title='GET STARTED' /></NavLink>

            </div>
            
        </div>
        </div>
    </div>
  )
}

export default Hero