import React, { useState } from 'react'
import { useRef } from 'react'
import { animateScroll as Scroll, Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'
import Button from '../../Components/Button'
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from '../../assets/images/Logo.png'

const Header = () => {

    const [scroll, setScroll] = useState()
    const getScroll = ()=>{
      const check = window.scrollY
      if(check >= 50){
        setScroll(true)
      }else{
        setScroll(false)
      }
    }
  
    window.addEventListener('scroll', getScroll)
  return (
     <div className={`flex justify-center items-center w-full bg-white text-[#032B56] py-[15px] mobile:py-[5px] tablet:py-[5px] transition-all delay-200 ${scroll? 'fixed top-0': null} `} >
        <div className='flex justify-between items-center w-[80%] font-[16px] '>
            <div className=' flex justify-start items-center w-[20%] '>
            <Link to='/'><img className='cursor-pointer w-[100px] h-[50px] object-contain mobile:w-[70px] mobile:h-[30px] tablet:w-[70px] tablet:h-[30px]' src={Logo} alt="" /></Link>
            </div>
            <div className=' flex flex-1 justify-center items-center font-[500] text-[16px] gap-[25px] w-[50%]  mobile:collapse tablet:collapse  '>
                <Link to='Hero' duration={1000} smooth={true} offset={-120} className='cursor-pointer hover:text-[#4291FD] duration-500'>Home</Link>
                <Link to='Subhero'  duration={1000} smooth={true} offset={-110} className='cursor-pointer hover:text-[#4291FD] duration-500'>About</Link>
                <Link to='Services' duration={1000} smooth={true} offset={-100} className='cursor-pointer hover:text-[#4291FD] duration-500'>Services</Link>
                <Link to='Pricing' duration={1000} smooth={true} offset={-120} className='cursor-pointer hover:text-[#4291FD] duration-500'>Pricing</Link>
                <Link to='Reviews' duration={1000} smooth={true} offset={-120} className='cursor-pointer hover:text-[#4291FD] duration-500'>Testemonials</Link>
                <Link to='Contact' duration={1000} smooth={true} offset={-110} className='cursor-pointer hover:text-[#4291FD] duration-500'>Contact</Link >
            </div>
            <div className=' flex justify-end items-center gap-[10px] w-[20%] mobile:collapse tablet:collapse '>
                <NavLink to='/Login'><Button title='Log In' /></NavLink>
                {/* <NavLink to='/Signup'><Button title='Sign Up' /></NavLink> */}
                
            </div>
            <RxHamburgerMenu className='text-[25px] text-black desktop:collapse tv:collapse mobile:visible mobile:text-[15px] tablet:visible tablet:text-[15px] laptop:collapse laptop:text-[15px]' />
           
        </div>
    </div>
  )
}

export default Header