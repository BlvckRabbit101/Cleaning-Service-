import React from 'react'

const FooterTitle = (props) => {
  return (
    <div className='pb-[30px] mobile:pb-[10px] tablet:pb-[10px] mobile:text-center tablet:text-center'>
        <div  className='text-[24px] text-white mb-[5px]'>{props.title}</div>
        <hr className='w-[60px] border-2 border-[#4291FD] mobile:w-full tablet:w-full' />
    </div>
  )
}

export default FooterTitle