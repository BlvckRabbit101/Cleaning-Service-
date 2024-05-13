import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { loginUser } from '../../ReactRedux/Global';

const AccountHero = () => { 

  const [data, setData] = useState()

  const userToken = JSON.parse(localStorage.getItem('usertoken'))
  const getUser = async () => {
    const config = {
      authorization: `Bearer ${userToken.logInUserToken}`
    }
    await axios.get('https://cleaning-service-0mh2.onrender.com/api/users/profile',{headers: config}).then((res) => {
      console.log(res)
      setData(res.data.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(()=>{
    getUser()
  },[])

  console.log(data)

  


  return (
    <div className='flex justify-center items-center w-full bg-white py-[50px] mobile:py-[25px]' >
        <div className='flex justify-center items-center w-[90%] text-white font-normal text-[16px] '>
           <div className='bg-[url("C:\Users\USER\Desktop\ReactJs\Cleaning\client\src\assets\images\bluebg.jpg")] bg-cover w-[100%] h-[150px] rounded-lg p-[30px] flex justify-start items-start gap-[30px]'>
                <div className='text-[32px] font-medium font-sans'>Welcome {data?.companyName} 🎉</div>
                
           </div>
        </div>
    </div>
  )
}

export default AccountHero