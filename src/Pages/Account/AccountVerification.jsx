import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdVerified } from "react-icons/md";
import axios from 'axios'


const AccountVerificatiion = () => {

  const [values, setValues]= useState({})
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const handleChange = (event)=>{
        const val = event.target.value
        const name = event.target.name

        setValues({...values,[name]: val,})
    }

    const userToken = JSON.parse(localStorage.getItem('usertoken'))
    const onSubmit = async(e)=>{

        e.preventDefault()
        setIsLoading(true)
        const config = {
          authorization: `Bearer ${userToken.logInUserToken}`
        }
        await axios.post('https://cleaning-service-0mh2.onrender.com/api/business/create ',values, {headers: config}).then((res)=>{
            setIsLoading(false)
            navigate('/AccountVerifying')
            console.log(res)
        }).catch((error)=>{
          setIsLoading(false)
            console.log(error)
        })
    }
    console.log(values)

  return (
    <div className="w-full pb-8 bg-gray-100 flex items-center justify-center">
        <div className="py-6 px-8 h-auto w-[500px] mt-20 bg-white rounded shadow-xl">
          <div className='text-center flex items-center justify-center font-bold text-2xl text-[#032B56] my-4'><MdVerified />Business Verification</div>
            <form action="" onSubmit={onSubmit}>
                {/* <div class="mb-6">
                <label for="name" class="block text-gray-800 font-bold">Full Name:</label>
                <input name="userName" onChange={handleChange}  type="text" name="name" id="name" placeholder="Full Name" class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
                </div> */}

                <div className="mb-6">
                <label className="block text-gray-800 font-bold">Legal Name of Business:</label>
                <input name="companyName" onChange={handleChange}  type="text" id="BusinessName" placeholder="" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
                </div>
                
                <div className="mb-6">
                <label className="block text-gray-800 font-bold">Business Registration No:</label>
                <input name="registrationNo" onChange={handleChange}  type="number" id="BusinessNo" placeholder="" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
                </div>

                <div className="mb-6">
                <label className="block text-gray-800 font-bold">Business Address:</label>
                <input onChange={handleChange}  type="text" name="address" id="address" placeholder="" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
                </div>
                
                <div className="mb-6">
                <label className="block text-gray-800 font-bold">Email Address:</label>
                <input onChange={handleChange}  type="text" name="email" id="email" placeholder="Email Address" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
                </div>
                
                <div className="mb-6">
                <label className="block text-gray-800 font-bold">Phone Number:</label>
                <input onChange={handleChange}  type="text" name="phone_No" id="phone_No" placeholder="### ### ###" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
                </div>

                
        
                <Link to='/AccountVerifying'><button disabled={isLoading}  className="cursor-pointer py-2 px-4 block mt-6 bg-[#4291fd] * hover:bg-[#032B56] text-white font-bold w-full text-center rounded-2xl duration-200">{isLoading? 'Submiting...': 'Submit'}</button></Link>
            </form>
        </div>
    </div>
  )
}

export default AccountVerificatiion