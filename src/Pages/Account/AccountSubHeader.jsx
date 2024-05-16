import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { RiFilter2Fill } from "react-icons/ri";
import Accountbtn from '../../Components/Account/Accountbtn';
import { CgSearch  } from "react-icons/cg";

const AccountSubHeader = () => {


  const [input, setInput] = useState([])
  const [result, setResult] = useState([])

  const fetchData = async (value) => { 
    await axios.fetch('https://cleaning-service-0mh2.onrender.com/api/job').then((res) => {
      console.log(res)
      setInput(res.data.data)
      setResult(res.data.data)
      // value &&
      // jobTitle &&
      // jobLocation &&
      // category &&
    }).catch((error) => {
      console.log(error)
    })
  }

  const  Filter = (event) => {
    fetchData(value)
    setInput(value)
    // setResult(data.filter(() => ))
  }


  return (
    <div className='flex justify-center items-center w-full bg-white py-[0px] mobile:hidden tablet:hidden' >
        <div className='flex-col justify-center items-start w-[90%] pt-4 font-normal text-[16px] '>
            <div className=' flex flex-1 justify-start items-center font-[500] text-[16px] gap-[25px] min-[320px]:collapse  sm:collapse md:collapse lg:visible py-4 w-[90%]'>
                        <form className="w-[700px] mobile:hidden tablet:hidden">
                            <div className="flex" >
                                <label for="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                                <select onChange={Filter} className="flex-shrink-0 z-10 inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 duration-700 cursor-pointer">
                                    <option  value="selected">All categories</option>
                                    <option value="Residential">Residential</option>
                                    <option value="Commercial">Commercial</option>
                                    <option value="Industrial">Industrial</option>
                                 </select>
                                
                                <div className="relative w-full  ">
                                    <input type="search" onChange={(e) => Filter(e.target.value)} value={input} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 outline-none" placeholder="What job are you looking for?" />
                                    <button onClick={fetchData} type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-[#4291FD] rounded-e-lg border border-[#4291FD] hover:bg-[#032B56] hover:border-[#032B56] duration-700 ">
                                        <CgSearch className='text-[20px]' />
                                    </button>
                                </div>
                            </div>
                        </form> 
              </div>
           <div className='flex w-full justify-between items-start gap-[30px]'>
              
                <div className='flex justify-start items-center gap-[15px] font-medium'>
                    <div>Filter by: </div>
                    <select onChange={Filter} id="availability" className='w-[150px] flex-col justify-center items-center text-sm font-medium text-center text-gray-900 bg-gray-100 border py-[5px] px-[10px] border-gray-300 rounded-2xl hover:bg-gray-200 duration-700 '>
                      <option  value="selected"><Accountbtn title='Availability' /></option>
                      <option value="Open">Open</option>
                      <option value="Closed">Closed</option>
                    </select>
                    
                    {/* <Accountbtn title='Price' /> */}
                    <select onChange={Filter} name='Price' id="price" className='w-[150px] flex-col justify-center items-center text-sm font-medium text-center text-gray-900 bg-gray-100 border py-[5px] px-[10px] border-gray-300 rounded-2xl hover:bg-gray-200 duration-700 '>
                      <option value="selected"><Accountbtn title='Price' /></option>
                      <option >₦10,000 - ₦50,000</option>
                      <option >₦50,000 - ₦100,000</option>
                      <option >₦150,000 - ₦200,000</option>
                      <option >₦200,000 - ₦300,000</option>
                      <option >₦300,000 - ₦400,000</option>
                      <option >₦400,000 - ₦500,000</option>
                    </select>
                    <select onChange={Filter} id="category" className='w-[150px] flex-col justify-center items-center text-sm font-medium text-center text-gray-900 bg-gray-100 border py-[5px] px-[10px] border-gray-300 rounded-2xl hover:bg-gray-200 duration-700 '>
                      <option  value="selected"><Accountbtn title='Category' /></option>
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Industrial">Industrial</option>
                    </select>
                    {/* <Accountbtn title='Ratings' /> */}
                    {/* <Accountbtn title='Location' /> */}
                    <select onChange={Filter} name='location' id="location" className='w-[150px] flex-col justify-center items-center text-sm font-medium text-center text-gray-900 bg-gray-100 border py-[5px] px-[10px] border-gray-300 rounded-2xl hover:bg-gray-200 duration-700 '>
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
                <button onClick={fetchData} className='flex justify-center items-center text-sm font-medium text-center text-gray-900 bg-gray-100 border py-[5px] px-[10px] border-gray-300 rounded-2xl hover:bg-gray-200 duration-700'><RiFilter2Fill className='text-[24px]' /> Filter</button>
                </div>
           </div>
        </div>
    </div>
  )
}

export default AccountSubHeader