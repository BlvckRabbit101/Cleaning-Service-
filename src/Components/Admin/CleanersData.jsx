import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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

  return (
    <div className="bg-white rounded-sm border-none border-gray-200 flex-1">
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
                                Customer Name
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 ">
                                Email Address
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 ">
                                Phone No
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 ">
                                Jobs Completed
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
                                        <Link>{props.userName}</Link>
                                    </td>
                                    <td>
                                        <Link>{props.email}</Link>
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {props.phoneNo}
                                    </td>
                                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                        0 Jobs
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