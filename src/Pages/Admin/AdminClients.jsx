import React from 'react'
import ClientsData from '../../Components/Admin/ClientsData'
import OurClients from '../../Components/Admin/OurClients'


const AdminClients = () => {
  return (
    <div className='flex bg-neutral-100 overflow-hidden'>
       <div className=' w-full top-16'>
                <div className='flex justify-between items-center'>
                  <div className='font-bold text-[24px]'>Clients</div>
                </div>
                <hr className='my-4 ' />
                <div className='flex w-full gap-4'>
                  <div className='flex-1 w-full  bg-white p-4 rounded-md'>
                    <div className='font-medium text-[18px]'>Your Clients</div>
                    <div className='font-normal text-[16px] text-gray-500'>All your current Clients are displayed here</div>
                    <hr className='mt-4' />
                    <ClientsData />
                  </div>
                  <div className='rounded-md w-[20rem] bg-white p-4'>
                    <div className='font-medium text-[18px]'>Potential Clients</div>
                      <OurClients />
                  </div>
                </div>
            </div>
    </div>
  )
}

export default AdminClients