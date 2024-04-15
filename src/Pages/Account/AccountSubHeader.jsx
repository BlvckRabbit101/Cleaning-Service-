import React from 'react'
import { RiFilter2Fill } from "react-icons/ri";
import Accountbtn from '../../Components/Account/Accountbtn';

const AccountSubHeader = () => {
  return (
    <div className='flex justify-center items-center w-full bg-white py-[0px]' >
        <div className='flex justify-start items-center w-[80%]  font-normal text-[16px] '>
           <div className='flex w-full justify-between items-start gap-[30px]'>
                <div className='flex justify-start items-center gap-[15px] font-medium'>
                    <div>Sort by: </div>
                    <Accountbtn title='Availability' />
                    <Accountbtn title='Price' />
                    <Accountbtn title='Ratings' />
                    <Accountbtn title='Location' />
                </div>
                <div>
                <button className='flex justify-center items-center text-sm font-medium text-center text-gray-900 bg-gray-100 border py-[5px] px-[10px] border-gray-300 rounded-2xl hover:bg-gray-200 duration-700'><RiFilter2Fill className='text-[24px]' /> Filter</button>
                </div>
           </div>
        </div>
    </div>
  )
}

export default AccountSubHeader