import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { IoCloseSharp, IoCheckmarkSharp  } from "react-icons/io5";

const CleanersData = () => {

    const [data, setData] = useState()

    const getUser = async () => {
    
    await axios.get('https://cleaning-service-0mh2.onrender.com/api/users').then((res) => {
      console.log(res)
      setData(res.data.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(()=>{
    getUser()
    console.log('hello');
  },[])

  console.log(data)
  const newData = data?.slice(0,8)
  
  const filteredData = data?.filter((el)=> el.isVerified === !true)

  const verifyUser = async (id) => {
    
    await axios.patch(`https://cleaning-service-0mh2.onrender.com/api/users/update/${id}/`, {isVerified: true}).then((res) => {
        console.log(res)
        // setData(res.data.data)
    }).catch((error) => {
        console.log(error)
    })
    }

  console.log(data)

  return (
    <div className="bg-white rounded-sm border-none border-gray-200 flex-1 mobile:overflow-scroll tablet:overflow-scroll">
			<div class="flex flex-col text-center">
                <div >
                    <div>
                    <div>
                        <table class="min-w-full border-none">
                        <thead class="bg-white border-b ">
                            <tr>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 ">
                                Company Name
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 ">
                                Email Address
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 ">
                                Phone No
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 ">
                                Status
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 ">
                                Verify
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                        {newData?.map((props) => (
                                <tr className="border-b" key={props.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        <Link>{props.companyName}</Link>
                                    </td>
                                    <td>
                                        <Link>{props.email}</Link>
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {props.phoneNo}
                                    </td>
                                    <td className={`${props.isVerified? 'text-green-700' : 'text-red-700'}`}>
                                        {props.isVerified? 'Verified' : 'Not Verified'}
                                    </td>
                                    <td className='flex items-center justify-center gap-4 py-4 text-xl'>
                                        {!props.isVerified? <IoCloseSharp onClick={()=>!verifyUser(props._id)} className='cursor-pointer hover:text-red-600 text-red-900' />: null }
                                        {!props.isVerified?<IoCheckmarkSharp onClick={()=>verifyUser(props._id)} className='cursor-pointer hover:text-green-600 text-green-800' />: null }
								    </td>
                                </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
		</div>
  )
}

export default CleanersData