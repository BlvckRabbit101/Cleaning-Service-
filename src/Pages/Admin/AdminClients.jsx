import React from 'react'
import {Link} from 'react-router-dom'
import ClientsData from '../../Components/Admin/ClientsData'


const AdminClients = () => {
  return (
    <div className='flex bg-neutral-100 overflow-hidden'>
       <div className=' w-full top-16'>
       <div className='flex justify-between items-center'>
                  <div className='font-bold text-[24px]'>Clients</div>
                  <Link to='/Admin/AddClients'><button className='py-2 px-4 bg-white border rounded-md font-medium hover:text-gray-500 hover:border uppercase'>Create Clients</button></Link>
                </div>
                <hr className='my-4 ' />
                <div className='flex w-full gap-4 mobile:flex-col tablet:flex-col'>
                  <div className='flex-1 w-full  bg-white p-4 rounded-md'>
                    <div className='font-medium text-[18px]'>Your Clients</div>
                    <div className='font-normal text-[16px] text-gray-500'>All your current Clients are displayed here</div>
                    <hr className='mt-4' />
                    <ClientsData />
                  </div>
                </div>
            </div>
    </div>
  )
}

export default AdminClients