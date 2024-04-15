import React from 'react'

const AccountCard = () => {
  return (
    <div className='flex flex-col justify-start items-start py-[20px] w-[350px] h-[250px] rounded-lg shadow-[box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;] bg-slate-400'>
        <div className='flex flex-col justify-start items-start w-full px-[20px]'>
            <div className='flex justify-between items-center w-full'>
                <div>
                    <img src="" alt="" />
                    <div>Ikate Cleaning & Laundary</div>
                </div>
                <div className='font-bold text-[24px]'>₦5000/hr</div>
            </div>
            <div></div>
            <div></div>
        </div>
        <div className='flex justify-start items-center'></div>
    </div>
  )
}

export default AccountCard