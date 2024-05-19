import React, { useEffect, useState } from 'react'
import { HiOutlineSearch, HiOutlineChatAlt, HiOutlineBell, HiOutlineLogout } from 'react-icons/hi'
import profileimg from '../../assets/images/Professor.jpeg'
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, Navigate, useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';
import AdminNotification from '../../Components/Admin/AdminNotification';
import { FaTimes } from "react-icons/fa";
import { ADMIN_SIDEBAR_LINKS } from '../../libs/consts/AdminNavigation'
import { ADMIN_SIDEBAR_BOTTOM_LINKS } from '../../libs/consts/AdminNavigation'

export default function AdminHeader () {

  const [change, setChange] = useState(false)
  const [data,setData] = useState()
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const navigate = useNavigate()

  const getMessage = async () => {
    
    await axios.get('https://cleaning-service-0mh2.onrender.com/api/message').then((res) => {
      console.log(res)
      setData(res.data.data)
      // setShowMore(newData.slice(0,20))
    }).catch((error) => {
      console.log(error)
    })
  }

  const filterMessage = data?.filter((el)=> el.notifyAdmin)
  const messageLength = filterMessage?.length

  useEffect(()=>{
    getMessage()
    console.log('hello');
  },[])

  
  const updateMessage = async (id) => {
    
    await axios.patch(`https://cleaning-service-0mh2.onrender.com/api/message/update/${id}/`, {notifyAdmin: false}).then((res) => {
        console.log(res)
        setData(res.data.data)
        navigate('/Admin/AdminMessages')
    }).catch((error) => {
        console.log(error)
    })
    }

  console.log(data)

  const content = <>
      <div className='laptop:hidden desktop:hidden absolute top-16 w-[50%] h-full left-0 bg-[#032B56] text-white flex-col justify-between'>
      <div className='flex-1 py-4 flex flex-col gap-0.5 '>
            {ADMIN_SIDEBAR_LINKS.map((item) => (
                <AdminSidebarLink key={item.key} item={item} />
            ))}
        </div>
        <div className='flex flex-col gap-0.5 pt-2 border-t border-[#4291FD]'>
        {ADMIN_SIDEBAR_BOTTOM_LINKS.map((item) => (
                <AdminSidebarLink key={item.key} item={item} />
            ))}
            <Link to='/' className='flex items-center gap-2 font-light px-3 py-2 hover:bg-[#4291FD] hover:no-underline rounded-sm text-base text-[#FEE023]'>
            <div className='text-xl'><HiOutlineLogout /></div>
            Logout
        </Link>
        </div>
      </div>
    </>
    
 

  return (
    <div className='bg-white h-16  px-4 flex justify-between items-center border-b border-gray-200  mobile:w-full '>
        <div onClick={handleClick} className='text-[25px] text-[#032B56] hidden mobile:text-[25px] mobile:block tablet:text-[25px] tablet:block'>
            {click? <FaTimes  /> : <RxHamburgerMenu  />}
        </div>
        <div>
              { click && content}
        </div>
        <div className='flex items-center justify-start h-10 w-[24rem] border border-gray-300 rounded-sm px-2 mobile:hidden tablet:hidden'>
            <HiOutlineSearch className='text-gray-400 text-[20px] mr-2 ' />
            <input type="text" name="" id="" placeholder='Search...' className='text-sm outline-none w-full ' />
        </div>
        <div className='flex items-center gap-4 mr-2 text-[#032B56] '>
            <div onMouseOver={() => setChange(true)} 
              onMouseLeave={() => setChange(false)} className='relative'>
              <Link to='/Admin/AdminMessages'><HiOutlineChatAlt  className=' ' fontSize="30px" />
              {messageLength > 0 ?<div className='rounded-full bg-red-600 w-5 h-5 text-white flex items-center justify-center text-xs top-[-10px] right-[-10px] absolute'>{messageLength > 9? "9+" : messageLength}</div> : null}
              </Link> 
              <div className={`${change? 'visible' : 'invisible'} duration-150 `}
                onMouseOver={() => setChange('change')} 
                onMouseLeave={() => setChange('not-change')}>
                  
                  <div className='absolute h-[300px] w-[300px] top-10 right-1 border rounded-md py-4 px-2 flex-col justify-start items-start bg-white overflow-y-scroll font-medium text-red-400'>
                    New Messages
                  {filterMessage?.map((props) => (
                    <div onClick={()=>updateMessage(props._id)} className='cursor-pointer flex py-2 h-10 hover:bg-gray-100 hover:rounded-sm gap-2 justify-start items-center'>
                      <div className='text-md text-gray-700 font-bold rounded-full h-6 w-6 ring-2 flex items-center justify-center'>{props?.name.charAt(0)}</div>
                      <div className='font-normal text-[16px] text-gray-500'>{props.message.slice(0, 30)}...</div>
                    </div>
                  ))}
                  </div>
                   
              </div>
            </div>
            
            <div className='relative'>
              <AdminNotification />
              {/* <Link to='/Admin/AdminOrders'><HiOutlineBell className='cursor-pointer duration-300 ' fontSize="30px" />
                {ordersLength > 0 ?<div className='rounded-full bg-red-600 w-5 h-5 text-white flex items-center justify-center text-xs top-[-10px] right-[-7px] absolute'>{ordersLength > 9? "9+" : ordersLength}</div> : null}
              </Link> 
              <div className={`${toggle? 'visible' : 'invisible'} duration-150 `}
                onMouseOver={() => setToggle('toggle')} 
                onMouseLeave={() => setToggle('not-toggle')}>
                  
                  <div className='absolute h-[300px] w-[300px] top-10 right-1 border rounded-md py-4 px-2 flex-col justify-start items-start bg-white overflow-scroll font-medium text-red-400'>
                    New Messages
                  <div onClick={()=>updateMessage(props._id)} className='cursor-pointer flex py-2 h-10 hover:bg-gray-300 hover:rounded-sm gap-2 justify-start items-center'>
                      <div>You Have New Orders</div>
                    </div>
                  </div>
                   
              </div> */}
            </div>
            
            <div>
                <Link to='/Admin/AdminSettings'><img src={profileimg} alt="" className='rounded-full ring-2 h-10 w-10 cursor-pointer mobile:hidden tablet:hidden' /></Link>
            </div>
        </div>
    </div>
  )
} 


function AdminSidebarLink({item}) {
  return (
      <Link to={item.path} className='flex items-center gap-2 font-light px-3 py-2 hover:bg-[#4291FD] focus:bg-[#4291FD] hover:no-underline rounded-sm text-base'>
          <div className='text-xl'>{item.icon}</div>
          {item.label}
      </Link>
  )
}