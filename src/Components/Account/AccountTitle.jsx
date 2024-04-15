import React from 'react'

const AccountTitle = (props) => {
  return (
    <div className='flex flex-col justify-start items-start  w-full'>
        <div className='font-bold text-[28px]'>{props.title}</div>
        <div className='text-[14px] font-medium text-[#5a5a5a]'>{props.text}</div>
    </div>
  )
}

export default AccountTitle