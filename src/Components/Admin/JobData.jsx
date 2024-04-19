import React from 'react'
import { Link } from 'react-router-dom'

const OurJobData = [
	{
		id: '1',
		product_id: '4324',
		customer_id: '23143',
		customer_name: 'Shirley A. Lape',
		order_date: '2022-05-17',
		order_total: '$435.50',
		current_order_status: 'PLACED',
		shipment_address: 'Cottage Grove, OR 97424'
	},
	{
		id: '7',
		product_id: '7453',
		customer_id: '96453',
		customer_name: 'Ryan Carroll',
		order_date: '2022-05-14',
		order_total: '$96.35',
		current_order_status: 'CONFIRMED',
		shipment_address: 'Los Angeles, CA 90017'
	},
	{
		id: '2',
		product_id: '5434',
		customer_id: '65345',
		customer_name: 'Mason Nash',
		order_date: '2022-05-17',
		order_total: '$836.44',
		current_order_status: 'SHIPPED',
		shipment_address: 'Westminster, CA 92683'
	},
	{
		id: '3',
		product_id: '9854',
		customer_id: '87832',
		customer_name: 'Luke Parkin',
		order_date: '2022-05-16',
		order_total: '$334.50',
		current_order_status: 'SHIPPED',
		shipment_address: 'San Mateo, CA 94403'
	},
	{
		id: '4',
		product_id: '8763',
		customer_id: '09832',
		customer_name: 'Anthony Fry',
		order_date: '2022-05-14',
		order_total: '$876.00',
		current_order_status: 'OUT_FOR_DELIVERY',
		shipment_address: 'San Mateo, CA 94403'
	},
	{
		id: '5',
		product_id: '5627',
		customer_id: '97632',
		customer_name: 'Ryan Carroll',
		order_date: '2022-05-14',
		order_total: '$96.35',
		current_order_status: 'DELIVERED',
		shipment_address: 'Los Angeles, CA 90017'
	}
]


function JobData () {
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
                                Product ID
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 ">
                                Customer Name
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
                            </tr>
                        </thead>
                        <tbody>
                            {OurJobData.map((order) => (
                                <tr className="border-b" key={order.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        <Link to={`/AdminOrders/${order.product_id}`}>#{order.product_id}</Link>
                                    </td>
                                    <td>
                                        <Link to={`/AdminCleaner/${order.customer_name}`}>{order.customer_name}</Link>
                                    </td>
                                    <td>
                                        <Link to={`/AdminCustomer/${order.order_date}`}>{order.order_date}</Link>
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {order.order_total}
                                    </td>
                                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                        Pending
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

export default JobData