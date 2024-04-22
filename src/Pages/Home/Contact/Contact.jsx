import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt  } from "react-icons/fa";
import support from '../../../assets/images/support.jpg'

const Contact = () => {
  return (
    <div className='flex justify-center items-center w-full bg-white py-[50px] mobile:pb-[50px] tablet:pb-[50px]' id='Contact'>
        <div className='flex justify-center items-center w-[80%] text-white font-normal text-[16px] '>
           <div className='bg-[#032B56] w-[100%] rounded-lg p-[50px] flex justify-center items-start gap-[30px] mobile:px-[20px] mobile:py-[40px] mobile:flex-col mobile:items-center mobile:justify-start mobile:text-center tablet:px-[40px] tablet:py-[50px] tablet:flex-col tablet:items-center tablet:justify-start tablet:text-center'>
                <div className='w-[30%] flex flex-col justify-start items-center gap-[40px] mobile:w-full mobile:gap-[30px] tablet:w-full tablet:gap-[30px]'>
                  <img className='w-[200px] h-[200px] rounded-full ring-4' src={support} alt="" />
                  <div className='flex flex-col justify-center items-center w-[200px] text-center text-[#FEE023] gap-[10px]'>
                    <div className='flex justify-center items-center rounded-full bg-[#4291FD] border-1 border-solid w-[50px] h-[50px]'><IoLocationOutline className='text-[32px]' /></div>
                    <div className='text-[14px] text-white'>22 Baker Street,
                      London, United Kingdom,
                      W1U 3BW
                    </div>
                  </div>
                  <div className='flex flex-col justify-center items-center w-[200px] text-center text-[#FEE023] gap-[10px]'>
                    <div className='flex justify-center items-center rounded-full bg-[#4291FD] border-1 border-solid w-[50px] h-[50px]'><FaPhoneAlt className='text-[24px]  ' /></div>
                      <div className='text-[14px] text-white'>22 Baker Street,
                        London, United Kingdom,
                        W1U 3BW
                      </div>
                    </div>
                </div>
                <div className='w-[70%] flex flex-col justify-start items-start mobile:w-full mobile:items-center tablet:w-full tablet:items-start tablet:text-left'>
                  <div className='text-[32px] font-medium mb-[5px] text-[white]'>Lets Talk?</div>
                  <div className='text-[16px] mb-[30px] text-[white]'>It's all about the humans behind a brand and those experiencing it, we're right there. In the middle performance quick.</div>
                  <input className='py-[10px] px-[20px] bg-transparent rounded border-[1px] border-solid border-[white] w-full mb-[15px] ' type="text" placeholder='Name'/>
                  <div className='flex justify-start items-center gap-[15px] w-full'>
                      <input className='py-[10px] px-[20px] bg-transparent rounded border-[1px] border-solid border-[white] w-[50%] mb-[15px] ' type="text" placeholder='Email...' />
                      <input className='py-[10px] px-[20px] bg-transparent rounded border-[1px] border-solid border-[white] w-[50%] mb-[15px] ' type="text" placeholder='Phone' />
                  </div>
                  <input className='pt-[10px] pb-[100px] px-[20px] bg-transparent rounded border-[1px] border-solid border-[white] w-full mb-[30px] mobile:mb-[15px] ' type="text" placeholder='Tell us about your Project...'/>
                  <button className='py-[8px] px-[20px] bg-[#4291FD] rounded-[25px] text-[white] font-medium text-[16px] border-[2px] border-solid border-[#4291FD] hover:bg-transparent hover:text-[#4291FD] duration-700'>SEND MESSAGE</button>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Contact