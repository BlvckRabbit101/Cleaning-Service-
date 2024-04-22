import React from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import MrL from '../../../assets/images/MrLucky.jpeg'
import MrT from '../../../assets/images/MrToyeeb.jpeg'
import Prof from '../../../assets/images/Professor.jpeg'

const Reviews = () => {
  return (
    <div className='flex justify-center items-center w-full bg-white py-[15px]' id='Reviews'>
        <div className='flex flex-col justify-start items-center w-[80%] font-[16px] py-[50px] mobile:py-[50px] tablet:py-[50px]'>
            <div className='flex flex-col text-[32px] justify-start items-center text-center mb-[50px] w-[600px] font-medium gap-[15px] mobile:text-[24px] mobile:w-full tablet:w-full'>
                <div className='text-[18px] font-bold text-center text-[#333]'>TESTEMONIALS</div>
                <div className='text-[#032B56] leading-none'>What Our Clients say about us</div>
            </div>
           <div className='flex justify-between items-center font-[16px] '>
            <div>
                <button className='rounded-full border-[1px] border-solid border-[#032B56] text-[30px] bg-[#032B56] p-[10px] text-white hover:bg-transparent hover:text-[#032B56] cursor-pointer hover:border-[1px] hover:border-solid hover:border-[#032B56] duration-300 mobile:collapse tablet:collapse'><MdOutlineKeyboardArrowLeft /></button>
                </div>
                <div className='flex flex-col text-center items-center justify-center w-[50%] mobile:w-full  tablet:w-full'>
                    <div className='flex justify-center items-center gap-[60px] mobile:flex-col mobile:gap-0'>
                        <div className='mobile:invisible tablet:invisible mobile:gap-0'>
                            <img className='rounded-full ring-4 w-[100px] h-[100px] mobile:w-[0px] mobile:h-[0px] tablet:w-[0px] tablet:h-[0px] ' src={MrL} alt="" />
                        </div>
                        <div>
                            <img className='rounded-full ring-4 w-[200px] h-[200px] mb-[40px] object-contain mobile:w-[200px] mobile:h-[200px] mobile:mb-[10px] tablet:w-full tablet:h-auto' src={Prof} alt="" />
                        </div>
                        <div className='mobile:invisible tablet:invisible'>
                            <img className='rounded-full ring-4 w-[100px] h-[100px] mobile:w-[0px] mobile:h-[0px] tablet:w-[0px] tablet:h-[0px' src={MrT} alt="" />
                        </div>
                    </div>
                    <div className='text-[24px] text-[#032B56] font-medium mb-[5px]'>John Doe</div>
                    <div className='text-[14px] font-normal mb-[15px] text-[#333]'>Co-worker at Kode10x</div>
                    <div className='text-center text-[15px] text-[#333] mobile:w-[250px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis modi repellendus eligendi velit officia! Enim architecto rerum minima vero, corporis quibusdam eos itaque quia placeat saepe dolorem est assumenda sequi!</div>
                </div>
                <div>
                    <button className='rounded-full border-[1px] border-solid border-[#032B56] text-[30px] bg-[#032B56] p-[10px] text-white hover:bg-transparent hover:text-[#032B56] cursor-pointer hover:border-[1px] hover:border-solid hover:border-[#032B56] duration-300 mobile:collapse tablet:collapse'><MdOutlineKeyboardArrowRight /></button>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Reviews