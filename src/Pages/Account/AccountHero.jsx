import React from 'react'

const AccountHero = () => {
  return (
    <div className='flex justify-center items-center w-full bg-white py-[50px]' >
        <div className='flex justify-center items-center w-[80%] text-white font-normal text-[16px] '>
           <div className='bg-[url("C:\Users\USER\Desktop\ReactJs\Cleaning\client\src\assets\images\bluebg.jpg")] bg-cover w-[100%] h-[150px] rounded-lg p-[30px] flex justify-start items-start gap-[30px]'>
                <div className='text-[32px] font-medium font-sans'>Welcome back 🎉</div>
           </div>
        </div>
    </div>
  )
}

export default AccountHero