import React from 'react'
import Logo from '../../assets/images/Logo.png'
import { GiVacuumCleaner } from "react-icons/gi";
import { ADMIN_SIDEBAR_LINKS } from '../../libs/consts/AdminNavigation'
import { ADMIN_SIDEBAR_BOTTOM_LINKS } from '../../libs/consts/AdminNavigation'
import { Link } from 'react-router-dom';
import { HiOutlineLogout } from 'react-icons/hi'


export default function AdminSidebar() {
  return (
    <div className='bg-[#032B56] w-60 p-3 flex flex-col text-white'>
        <div className='flex items-center text-[24px] font-bold px-1 py-3 gap-2'>
            <span className='text-neutral-100 text-2xl'>CleanX</span>
            <GiVacuumCleaner />
        </div>
        <div className='flex-1 py-4 flex flex-col gap-0.5'>
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