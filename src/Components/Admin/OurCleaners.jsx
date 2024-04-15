import React from 'react'

const OurCleanersData = [
	{
		id: '1',
		customer_name: 'Shirley A. Lape',
		join_date: '2022-05-17',
		Location: 'Ikeja, Lagos'
	},
	{
		id: '2',
		customer_name: 'Josephine Cleaners',
		join_date: '2022-05-17',
		Location: 'Anambra'
	},
	{
		id: '3',
		customer_name: 'Ikate Laundromat',
		join_date: '2022-05-17',
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
		join_date: '2022-05-17',
		Location: 'Warri, Delta'
	},
	{
		id: '6',
		customer_name: 'Amebo Cleaning ltd',
		join_date: '2024-03-22',
		Location: 'Festac, Lagos'
	}
]


function OurCleaners() {
  return (
    <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 w-[15rem]'>
        <div>New Cleaners</div>
    </div>
  )
}

export default OurCleaners