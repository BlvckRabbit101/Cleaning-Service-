import { IoBagHandle } from 'react-icons/io5'
import { HiOutlineUserAdd, HiOutlineUsers, HiOutlineDocumentText } from "react-icons/hi";
import { GrUserWorker } from "react-icons/gr";
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom'; 
import DashboardOrders from './DashboardOrders';
import DashboardUsers from './DashboardUsers';
import DashboardJobs from './DashboardJobs';
import DashboardCleaners from './DashboardCleaners';

function DashboardStat () {
   

  return (
    <div className='flex gap-4 w-full mobile:flex-col tablet:flex-col'>
        <BoxWrapper>
            <DashboardOrders />
        </BoxWrapper>
        <BoxWrapper>
            <DashboardUsers />
        </BoxWrapper>
        <BoxWrapper>
            <DashboardJobs />
        </BoxWrapper>
        <BoxWrapper>
            <DashboardCleaners />
        </BoxWrapper>
    </div>
  )
}

export default DashboardStat

function BoxWrapper({children}){
    return (
        <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center'>{children}</div>
    )
}