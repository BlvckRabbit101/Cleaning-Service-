import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const OrderData = () => {
	const [data, setData] = useState()

    const getUser = async () => {
    
    await axios.get('https://cleaning-service-0mh2.onrender.com/api/job').then((res) => {
      console.log(res)
      setData(res.data.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  const filteredData = data?.filter((el)=> el.status !== "complete")

  console.log(filteredData)
  useEffect(()=>{
    getUser()
    console.log('hello');
  },[])

  console.log(data)

  const completeJob = async (id) => {
    
    await axios.patch(`https://cleaning-service-0mh2.onrender.com/api/job/update/${id}/`, {status: 'complete'}).then((res) => {
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
                                Job 
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 ">
                                Order Date
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 ">
                                Order Total
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 ">
                                Order Status
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 ">
                                Complete
                            </th>
                            </tr>
                        </thead>
                        <tbody>
						{filteredData?.map((props) => (
                            <tr className="border-b" key={props.id}>
								<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
									<Link>{props.jobTitle}</Link>
								</td>
								<td>
									<Link>{props.jobDate}</Link>
								</td>
								<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
									₦{props.price}
								</td>
								<td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
									{props.status}
								</td>
								<td>
									<input onClick={()=>completeJob(props._id)} type="checkbox" />
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

export default OrderData