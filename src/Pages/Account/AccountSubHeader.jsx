import React from 'react'
import { RiFilter2Fill } from "react-icons/ri";
import Accountbtn from '../../Components/Account/Accountbtn';
import { CgSearch  } from "react-icons/cg";

const AccountSubHeader = () => {
  return (
    <div className='flex justify-center items-center w-full bg-white py-[0px] mobile:hidden tablet:hidden' >
        <div className='flex-col justify-center items-start w-[90%] pt-4 font-normal text-[16px] '>
            <div className=' flex flex-1 justify-start items-center font-[500] text-[16px] gap-[25px] min-[320px]:collapse  sm:collapse md:collapse lg:visible py-4 w-[90%]'>
                        <form className="w-[700px] mobile:hidden tablet:hidden">
                            <div className="flex" >
                                <label for="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                                <select className="flex-shrink-0 z-10 inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 duration-700 cursor-pointer">
                                    <option  value="selected">All categories</option>
                                    <option value="Residential">Residential</option>
                                    <option value="Commercial">Commercial</option>
                                    <option value="Industrial">Industrial</option>
                                 </select>
                                
                                <div className="relative w-full  ">
                                    <input type="search" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 outline-none" placeholder="What job are you looking for?" />
                                    <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-[#4291FD] rounded-e-lg border border-[#4291FD] hover:bg-[#032B56] hover:border-[#032B56] duration-700 ">
                                        <CgSearch className='text-[20px]' />
                                    </button>
                                </div>
                            </div>
                        </form> 
              </div>
           <div className='flex w-full justify-between items-start gap-[30px]'>
              
                <div className='flex justify-start items-center gap-[15px] font-medium'>
                    <div>Filter by: </div>
                    <select id="availability" className='w-[150px] flex-col justify-center items-center text-sm font-medium text-center text-gray-900 bg-gray-100 border py-[5px] px-[10px] border-gray-300 rounded-2xl hover:bg-gray-200 duration-700 '>
                      <option  value="selected"><Accountbtn title='Availability' /></option>
                      <option value="Open">Open</option>
                      <option value="Closed">Closed</option>
                    </select>
                    
                    {/* <Accountbtn title='Price' /> */}
                    <select name='Price' id="price" className='w-[150px] flex-col justify-center items-center text-sm font-medium text-center text-gray-900 bg-gray-100 border py-[5px] px-[10px] border-gray-300 rounded-2xl hover:bg-gray-200 duration-700 '>
                      <option value="selected"><Accountbtn title='Price' /></option>
                      <option >₦10,000 - ₦50,000</option>
                      <option >₦50,000 - ₦100,000</option>
                      <option >₦150,000 - ₦200,000</option>
                      <option >₦200,000 - ₦300,000</option>
                      <option >₦300,000 - ₦400,000</option>
                      <option >₦400,000 - ₦500,000</option>
                    </select>
                    <select id="category" className='w-[150px] flex-col justify-center items-center text-sm font-medium text-center text-gray-900 bg-gray-100 border py-[5px] px-[10px] border-gray-300 rounded-2xl hover:bg-gray-200 duration-700 '>
                      <option  value="selected"><Accountbtn title='Category' /></option>
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Industrial">Industrial</option>
                    </select>
                    {/* <Accountbtn title='Ratings' /> */}
                    {/* <Accountbtn title='Location' /> */}
                    <select name='location' id="location" className='w-[150px] flex-col justify-center items-center text-sm font-medium text-center text-gray-900 bg-gray-100 border py-[5px] px-[10px] border-gray-300 rounded-2xl hover:bg-gray-200 duration-700 '>
                      <option value="selected"><Accountbtn title='Location' /></option>
                      <option >Lagos</option>
                      <option >Abuja</option>
                      <option >Port Harcourt</option>
                      <option >Delta</option>
                      <option >Jos</option>
                      <option >Ondo</option>
                    </select>
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