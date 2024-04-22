import React from 'react'
import DashboardStat from './DashboardStat'
import RecentOrders from './RecentOrders'
import OurCleaners from './OurCleaners'

const Overview = () => {
  return (
    <div className='flex flex-col gap-4'>
        <DashboardStat />
        <div className='flex flex-row gap-4 w-full mobile:flex-col tablet:flex-col'>
            <RecentOrders />
            <OurCleaners />
        </div>
    </div>
  )
}

export default Overview