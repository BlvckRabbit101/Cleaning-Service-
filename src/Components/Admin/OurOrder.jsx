import React from 'react'

const OrderData = [
	{
		id: '1',
		customer_name: 'Esther Cleaning & Laundary',
		join_date: '2024-02-23',
		Location: 'Ikeja, Lagos'
	},
	{
		id: '2',
		customer_name: 'Josephine Cleaners',
		join_date: '2023-02-13',
		Location: 'Anambra'
	},
	{
		id: '3',
		customer_name: 'Ikate Laundromat',
		join_date: '2023-05-17',
		Location: 'Lekki, Lagos'
	},
	{
		id: '4',
		customer_name: 'PH Cleaners',
		join_date: '2024-06-07',
		Location: 'Port Harcourt'
	},
	{
		id: '5',
		customer_name: 'Warri Revamp',
		join_date: '2024-04-02',
		Location: 'Warri, Delta'
	},
	{
		id: '6',
		customer_name: 'Amebo Cleaning ltd',
		join_date: '2024-03-22',
		Location: 'Festac, Lagos'
	}
]


function OurOrder() {
  return (
    <div className='bg-white pb-4 rounded-sm border-none  w-[16.1rem]'>
        {OrderData.map((cleaner) => (
        <div key={cleaner.id} className='mb-[10px] mt-[10px]'>
            <div className='text-md text-gray-700 font-bold'>{cleaner.customer_name}</div>
            <div className='flex items-center'>
                <div className='text-sm text-gray-500 font-semibold'>{cleaner.Location}</div>
                <div className='text-sm text-green-500 pl-2'>Joined: {cleaner.join_date}</div>
            </div>
        </div>
        ))}
    </div>
  )
}

export default OurOrder