import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const RecentOrders = () => {
	const [data, setData] = useState()

    const getUser = async () => {
    
    await axios.get('https://cleaning-service-0mh2.onrender.com/api/job').then((res) => {
      console.log(res)
      setData(res.data.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  const filteredData = data?.filter((el)=> el.status !== "pending")

  console.log(filteredData)
  useEffect(()=>{
    getUser()
    console.log('hello');
  },[])

  const newData = filteredData?.slice(0,6)
  console.log(data)

  return (
    <div className="bg-white  pt-3 pb-4 rounded-sm border border-gray-200 flex-1 mobile:w-full mobile:overflow-scroll tablet:overflow-scroll">
			<div className="text-gray-700 font-medium px-4">Recent Orders</div>
			<div class="flex flex-col text-center">
                <div >
                    <div class="pt-2">
                    <div>
                        <table class="min-w-full overflow-x-auto">
                        <thead class="bg-white border-b">
						<tr>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 ">
                                Job ID 
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 ">
                                Job
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 ">
                                Job Date
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 ">
                                Job Total
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 ">
                                Job Status
                            </th>
                            </tr>
                        </thead>
                        <tbody>
						{newData?.map((props) => (
                            <tr className="border-b" key={props.id}>
								<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
									<Link>{props.jobID}</Link>
								</td>
								<td>
									<Link>{props.jobTitle}</Link>
								</td>
								<td>
									<Link>{props.jobDate}</Link>
								</td>
								<td className="text-sm text-red-700 font-medium px-6 py-4 whitespace-nowrap">
									₦{props.price}
								</td>
								<td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
									{props.status}
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

export default RecentOrders