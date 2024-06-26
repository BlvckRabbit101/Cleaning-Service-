import React from 'react'
import FooterTitle from '../../Components/Footer/FooterTitle'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMailOpenOutline, IoLocationOutline } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaInstagram, FaGoogle  } from "react-icons/fa";
import Logo from '../../assets/images/FootLogo.png'

const Footer = () => {
  return (
    <div className='flex justify-center items-center w-full bg-[#032B56] py-[15px]' id='Footer'>
        <div className='flex justify-center items-center w-[80%] mobile:flex-col tablet:flex-col '>
            <div className='flex flex-col justify-center items-center w-full text-[white]'>
                <div className='flex justify-between items-start text-[16px] pt-[50px] w-full font-medium  mobile:flex-col mobile:justify-start mobile:text-left mobile:gap-[40px]  tablet:flex-col tablet:justify-start tablet:text-center tablet:gap-[50px]'>
                    <div className='w-[200px] h-[330px] flex flex-col justify-start items-start mobile:w-full mobile:items-start tablet:w-full tablet:items-start mobile:h-auto tablet:h-auto'>
                        <div className='mb-[20px] mobile:mb-[5px]  tablet:mb-[5px]'>
                            {/* <Link to='/'><img className='cursor-pointer w-[200px] h-[100px] object-contain' src={Logo} alt="" /></Link> */}
                            <div className='text-[32px]'>CLEANX</div>
                        </div>
                        <div className='flex flex-col justify-start items-start gap-[10px] '>
                            <div className='text-[22px] '>07037102658</div>
                            <div className='flex justify-start items-start text-[16px]  font-medium gap-[10px]'>
                                <IoMailOpenOutline className='text-[20px]' />
                                <div className='cursor-pointer duration-700'>Info@demotheme.com</div>
                            </div>
                            <div className='flex justify-start items-start text-[16px] font-medium gap-[10px] mb-[10px]'>
                                <IoLocationOutline className='text-[35px]' />
                                <div>236 Old Ojo Road, Agboju, Oluti, Lagos</div>
                            </div>
                            <div className='flex justify-center items-center mobile:items-start tablet:items-start gap-[15px]'>
                            <div className='border-[1px] border-solid border-white p-2 rounded-full hover:bg-[#4291FD] hover:border-[#4291FD] hover:text-[#032B56] cursor-pointer hover:translate-y-[-10px] duration-[700ms]'><FaFacebookF  /></div>
                            <div className='border-[1px] border-solid border-white p-2 rounded-full hover:bg-[#4291FD] hover:border-[#4291FD] hover:text-[#032B56] cursor-pointer hover:translate-y-[-10px] duration-[700ms]'><FaTwitter /></div>
                            <div className='border-[1px] border-solid border-white p-2 rounded-full hover:bg-[#4291FD] hover:border-[#4291FD] hover:text-[#032B56] cursor-pointer hover:translate-y-[-10px] duration-[700ms]'><FaInstagram /></div>
                            <div className='border-[1px] border-solid border-white p-2 rounded-full hover:bg-[#4291FD] hover:border-[#4291FD] hover:text-[#032B56] cursor-pointer hover:translate-y-[-10px] duration-[700ms]'><FaGoogle /></div>
                        </div>
                        </div>
                    </div>
                    <div className='w-[200px] h-[330px] flex flex-col justify-start items-start mobile:w-full tablet:w-full mobile:h-auto tablet:h-auto'>
                        <FooterTitle title='Quick Links' />
                        <div className='flex flex-col justify-start items-start gap-[10px]'>
                            <div className='flex justify-center items-center text-[16px] hover:text-[#4291FD] hover:translate-x-[10px] cursor-pointer duration-700'>
                                <MdKeyboardArrowRight className='text-[30px]' />
                                <Link to='/ComingSoon'><div>About Us</div></Link>
                            </div>
                            <div className='flex justify-center items-center text-[16px] hover:text-[#4291FD] hover:translate-x-[10px] cursor-pointer duration-700'>
                                <MdKeyboardArrowRight className='text-[30px]' />
                                <Link to='/ComingSoon'><div>Our Team</div></Link>
                            </div>
                            <div className='flex justify-center items-center text-[16px] hover:text-[#4291FD] hover:translate-x-[10px] cursor-pointer duration-700'>
                                <MdKeyboardArrowRight className='text-[30px]' />
                                <Link to='/ComingSoon'><div>How it Works</div></Link>
                            </div>
                            <div className='flex justify-center items-center text-[16px] hover:text-[#4291FD] hover:translate-x-[10px] cursor-pointer duration-700'>
                                <MdKeyboardArrowRight className='text-[30px]' />
                                <Link to='/ComingSoon'><div>Newsletter</div></Link>
                            </div>
                            <div className='flex justify-center items-center text-[16px] hover:text-[#4291FD] hover:translate-x-[10px] cursor-pointer duration-700'>
                                <MdKeyboardArrowRight className='text-[30px]' />
                                <Link to='/ComingSoon'><div>Contact Us</div></Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className='w-[200px] h-[330px] flex flex-col justify-start items-start mobile:w-full  tablet:w-full mobile:h-auto tablet:h-auto'>
                        <FooterTitle title='Our Services' />
                        <div className='flex flex-col justify-start items-start gap-[10px]'>
                            <div className='flex justify-center items-center text-[16px] hover:text-[#4291FD] hover:translate-x-[10px] cursor-pointer duration-700'>
                                <MdKeyboardArrowRight className='text-[30px]' />
                                <Link to='/ComingSoon'><div>Carpet Cleaning</div></Link>
                            </div>
                            <div className='flex justify-center items-center text-[16px] hover:text-[#4291FD] hover:translate-x-[10px] cursor-pointer duration-700'>
                                <MdKeyboardArrowRight className='text-[30px]' />
                                 <Link to='/ComingSoon'><div>Plumbing Services</div></Link>
                            </div>
                            <div className='flex justify-center items-center text-[16px] hover:text-[#4291FD] hover:translate-x-[10px] cursor-pointer duration-700'>
                                <MdKeyboardArrowRight className='text-[30px]' />
                                 <Link to='/ComingSoon'><div>Park Cleaning</div></Link>
                            </div>
                            <div className='flex justify-center items-center text-[16px] hover:text-[#4291FD] hover:translate-x-[10px] cursor-pointer duration-700'>
                                <MdKeyboardArrowRight className='text-[30px]' />
                                 <Link to='/ComingSoon'><div>Residential Services</div></Link>
                            </div>
                            <div className='flex justify-center items-center text-[16px] hover:text-[#4291FD] hover:translate-x-[10px] cursor-pointer duration-700'>
                                <MdKeyboardArrowRight className='text-[30px]' />
                                 <Link to='/ComingSoon'><div>Toilet Cleaning</div></Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-[250px] h-[330px] flex flex-col justify-start items-start mobile:w-full  tablet:w-full mobile:h-auto tablet:h-auto'>
                        <FooterTitle title='Newsletter' />
                        <div className='mb-[15px] text-[16px] text-white'>
                            <div>Subscribe our newsletter to get our latest update & news</div>
                        </div>
                        <div className='mb-[15px] text-[16px] text-white'>
                            <input className='py-[8px] px-[20px] rounded bg-transparent border-white text-[16px] w-full  border-[1px] border-solid font-normal mb-[20px] placeholder-white' type="text" placeholder='Your Email Address...' />
                            <button className='py-[8px] px-[20px] bg-[#4291FD] rounded-[25px] text-white font-medium text-[16px] border-[2px] border-solid border-[#4291FD] hover:bg-transparent hover:text-[#4291FD] duration-700'>SUBSCRIBE</button>
                        </div>
                    </div>
                    
                </div>

                
                <div className='text-[14px] flex justify-center items-center text-center text-white font-normal pb-[10px] mobile:text-[12px] tablet:text-[12px] mobile:pt-[20px] tablet:pt-[20px]'>
                    <div>Copyright ©2024 Kode10X. All Rights Reserved Copyright</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer