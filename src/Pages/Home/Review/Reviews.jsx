import React, {useState} from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import {ReviewData} from './ReviewData';

const Reviews = () => {

    const [index, setIndex] = useState(0);
    const { image, name, role, text} = ReviewData[index];
  
    const checkNumber = (number) => {
      if(number > ReviewData.length - 1){
        return 0;
      }
      else if(number < 0){
        return ReviewData.length - 1;
      }
      return number;
    }
  
    const nextPerson = () => {
      setIndex((index) => {
        let newIndex = index + 1;
        return checkNumber(newIndex);
      }) 
    };
  
    const prevPerson = () => {
      setIndex((index) => {
        let newIndex = index - 1;
        return checkNumber(newIndex);
      }) 
    }

  return (
    <div className='flex justify-center items-center w-full bg-white py-[15px]' id='Reviews'>
        <div className='flex flex-col justify-start items-center w-[80%] font-[16px] py-[50px] mobile:py-[50px] tablet:py-[50px]'>
            <div className='flex flex-col text-[32px] justify-start items-center text-center mb-[50px] w-[600px] font-medium gap-[15px] mobile:text-[24px] mobile:w-full tablet:w-full'>
                <div className='text-[18px] font-bold text-center text-[#333]'>TESTEMONIALS</div>
                <div className='text-[#032B56] leading-none'>What Our Clients say about us</div>
            </div>
           <div className='flex justify-between items-center font-[16px] '>
            <div>
                <button className='rounded-full border-[1px] border-solid border-[#032B56] text-[30px] bg-[#032B56] p-[10px] text-white hover:bg-transparent hover:text-[#032B56] cursor-pointer hover:border-[1px] hover:border-solid hover:border-[#032B56] duration-300 mobile:collapse tablet:collapse' onClick={prevPerson}><MdOutlineKeyboardArrowLeft /></button>
                </div>
                <div className='flex flex-col text-center items-center justify-center w-[50%] mobile:w-full  tablet:w-full'>
                    <div className='flex justify-center items-center gap-[60px] mobile:flex-col mobile:gap-0'>
                        {/* <div className='mobile:invisible tablet:invisible mobile:gap-0'>
                            <img className='rounded-full ring-4 w-[100px] h-[100px] mobile:w-[0px] mobile:h-[0px] tablet:w-[0px] tablet:h-[0px] ' src={image} alt={name} />
                        </div> */}
                        <div>
                            <img className='rounded-full ring-4 w-[200px] h-[200px] mb-[40px] object-contain mobile:w-[200px] mobile:h-[200px] mobile:mb-[10px] tablet:w-full tablet:h-auto' src={image} alt={name} />
                        </div>
                        {/* <div className='mobile:invisible tablet:invisible'>
                            <img className='rounded-full ring-4 w-[100px] h-[100px] mobile:w-[0px] mobile:h-[0px] tablet:w-[0px] tablet:h-[0px' src={image} alt={name} />
                        </div> */}
                    </div>
                    <div className='text-[24px] text-[#032B56] font-medium mb-[5px]'>{name}</div>
                    <div className='text-[14px] font-normal mb-[15px] text-[#333]'>{role}</div>
                    <div className='text-center text-[15px] text-[#333] mobile:w-[250px]'>{text}</div>
                </div>
                <div>
                    <button className='rounded-full border-[1px] border-solid border-[#032B56] text-[30px] bg-[#032B56] p-[10px] text-white hover:bg-transparent hover:text-[#032B56] cursor-pointer hover:border-[1px] hover:border-solid hover:border-[#032B56] duration-300 mobile:collapse tablet:collapse' onClick={nextPerson}><MdOutlineKeyboardArrowRight /></button>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Reviews