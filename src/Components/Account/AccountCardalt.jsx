import React from 'react'
import { IoStarOutline , IoTime, IoLocationSharp} from "react-icons/io5";
import { Link } from 'react-router-dom';

const AccountCardalt = (props) => {
  
  return (
    <div className='flex flex-col justify-start items-start px-6 pt-6 pb-2 w-[32%] bg-white rounded-xl shadow-lg transform hover:scale-105 transition duration-500 hover:bg-gray-100 mobile:w-full tablet:w-full'>
        <h3 className="mb-3 text-xl font-bold text-[#4291FD]">{props.status}</h3>
        <div className="relative">
          <img className="w-full rounded-xl" src={props.img}/>
          <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">₦{props.price}</p>
        </div>
        <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">{props.title}</h1>
        <div className="my-4">
                <div className='flex gap-1'>
                    <IoTime className='h-6 w-6 text-[#4291FD] mb-1.5' />
                    <p>{props.date}</p>
                </div>
                <div className='flex gap-1'>
                    <IoLocationSharp className='h-6 w-6 text-[#4291FD] mb-1.5' />
                    <p>{props.local}</p>
                </div>
                <div className='flex-1 h-[80px]'>
                  <p>{props.descr}</p>
                </div>
                <Link to='/AccountDetail'><button className="mt-4 text-xl w-full text-white bg-[#4291FD] py-2 rounded-xl shadow-lg">Book Job</button></Link>
            </div>
    </div>
  )
}

export default AccountCardalt