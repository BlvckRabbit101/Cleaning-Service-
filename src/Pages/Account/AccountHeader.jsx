import { useEffect, useState } from 'react'
import axios from 'axios'
import Logo from '../../assets/images/Logo.png'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile  } from "react-icons/cg";
import AccountNotification from '../../Components/Account/AccountNotification';
import { FaTimes } from "react-icons/fa";

const AccountHeader = () => {

    const [data, setData] = useState()
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const userToken = JSON.parse(localStorage.getItem('usertoken'))
    const getUser = async () => {
      const config = {
        authorization: `Bearer ${userToken.logInUserToken}`
      }
      await axios.get('https://cleaning-service-0mh2.onrender.com/api/users/profile',{headers: config}).then((res) => {
        console.log(res)
        setData(res.data.data)
      }).catch((error) => {
        console.log(error)
      })
    }
  
    useEffect(()=>{
      getUser()
    },[])
  
    console.log(data)
    
    const content = <>
    <div className='laptop:hidden desktop:hidden block absolute top-[85px] tablet:top-[100px] w-auto right-0 bg-[#032B56] '>
      <ul className='text-left text xl p-4 pr-10 text-white'>
        <li className='py-2 font-medium'>Welcome, {data?.companyName} 🎉</li>
        <Link to='/Profile' spy={true} smooth={true} >
          <li className='py-2 font-medium'>Profile</li>
        </Link>
        <Link to='/Notification' spy={true} smooth={true} >
          <li className='py-2 font-medium'>Notifications</li>
        </Link>
        <Link to='/Wishlist' spy={true} smooth={true} >
          <li className='py-2 font-medium'>Wishlist</li>
        </Link>
        <Link to='/Jobs' spy={true} smooth={true} >
          <li className='py-2 font-medium'>Job History</li>
        </Link>
        <button className='py-2 font-medium text-yellow-500'>Log Out</button>
      </ul>
      
    </div>
  </>

  return (
    <div className='flex justify-center items-center w-full bg-white text-[#032B56] py-[15px] border-b-[1px] border-b-solid border-b-gray-80 mobile:py-2' >
        <div className='flex justify-between items-center w-[90%] font-[16px] '>
            <div className=' flex justify-start items-center w-[10%] mobile:w-auto  tablet:w-auto '>
            <Link to='/Account'><img className='cursor-pointer w-[100px] h-[50px] object-contain mobile:w-[100px] mobile:h-[70px] tablet:w-[100px] tablet:h-[70px]' src={Logo} alt="" /></Link>
            </div>
            {/* <div className=' flex flex-1 justify-center items-center font-[500] text-[16px] gap-[25px] min-[320px]:collapse  sm:collapse md:collapse lg:visible  w-[90%]'>
                <form className="w-[700px] mobile:hidden tablet:hidden">
                    <div className="flex" >
                        <label for="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                        <button className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 duration-700">All categories </button>
                        
                        <div className="relative w-full  ">
                            <input type="search" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 outline-none" placeholder="What job are you looking for?" />
                            <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-[#032B56] rounded-e-lg border border-[#032B56] hover:bg-[#4291FD] hover:border-[#4291FD] duration-700 ">
                                <CgSearch className='text-[20px]' />
                            </button>
                        </div>
                    </div>
                </form> 
            </div> */}
            <div className=' flex justify-end items-center gap-[10px] font-medium flex-1'>
                <div className='cursor-pointer hover:text-[#4291fd] mobile:hidden tablet:hidden'>Welcome, {data?.companyName} 🎉</div>
                {/* <div className='cursor-pointer hover:text-[#4291fd]'>Jobs</div> */}
                <div className='relative mobile:hidden tablet:hidden'>
                    <AccountNotification />
                </div>
                
                {/* <CgHeart className='text-[24px] cursor-pointer hover:text-[#4291fd]' /> */}
                <Link to='/Profile'><CgProfile className='text-[24px] cursor-pointer hover:text-[#4291fd] mobile:hidden tablet:hidden' /></Link>
            </div>
            <div onClick={handleClick} className='text-[25px] text-[#032B56] hidden mobile:text-[25px] mobile:block tablet:text-[25px] tablet:block'>
            {click? <FaTimes  /> : <RxHamburgerMenu  />}
        </div>
        <div>
              { click && content}
        </div>
           </div>
    </div>
  )
}

export default AccountHeader