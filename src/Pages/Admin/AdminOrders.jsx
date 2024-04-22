import React from 'react'
import OrderData from '../../Components/Admin/OrderData'
import OurOrder from '../../Components/Admin/OurOrder'

const AdminOrders = () => {
  return (
    <div className='flex bg-neutral-100 overflow-hidden '>
       <div className=' w-full top-16'>
                <div className='flex justify-between items-center'>
                  <div className='font-bold text-[24px]'>Orders</div>
                </div>
                <hr className='my-4 ' />
                <div className='flex w-full gap-4 mobile:flex-col tablet:flex-col'>
                  <div className='flex-1 w-full  bg-white p-4 rounded-md'>
                    <div className='font-medium text-[18px]'>Your Orders</div>
                    <div className='font-normal text-[16px] text-gray-500'>All Orders are displayed here</div>
                    <hr className='mt-4' />
                    <OrderData />
                  </div>
                  <div className='rounded-md w-[20rem] bg-white p-4'>
                    <div className='font-medium text-[18px]'>Pending Orders</div>
                      <OurOrder />
                  </div>
                </div>
            </div>
    </div>
  )
}

export default AdminOrders