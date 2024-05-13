import React, { useEffect, useState } from 'react'
import AdminSidebar from './AdminSidebar'
import AdminHeader from './AdminHeader'
import axios from "axios";
import { useParams } from 'react-router-dom'; 

const AdminMessages = () => {

  const [data, setData] = useState()
  const [showMore, setShowMore] = useState(false);
  

  const getMessage = async () => {
    
    await axios.get('https://cleaning-service-0mh2.onrender.com/api/message').then((res) => {
      console.log(res)
      setData(res.data.data)
      // setShowMore(newData.slice(0,20))
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(()=>{
    getMessage()
    console.log('hello');
  },[])

  console.log(data)
  const newData = data?.slice(0,11)
  const myData = data?.length
  console.log(myData)

  
  return (
    <div className='flex bg-neutral-100'>
        <div className="w-full text-gray-700 rounded">
          <div className="head flex border-none pb-3 rounded-t">
            <div className="title px-2 font-semibold text-lg">Inbox</div>
            
            <div className="count border p-1 px-2 font-semibold bg-blue-500 text-white rounded-full text-xs cursor-pointer font-mono">{myData}</div>
            {/* <div className="buttons ml-auto flex text-xs">
              <div className="btn p-1 px-2 border-2 cursor-pointer rounded-full font-bold hover:bg-gray-100">...</div>
            </div> */}
          </div>
        <div className="body border overflow-y-auto h-[calc(90vh-100px)]">
          <div className="messages">
            {newData?.map((props) => (
            <div className="msg px-4 py-4 focus:border-l-2 focus:border-blue-500 flex text-sm shadow-sm text-gray-600 cursor-pointer hover:bg-gray-200">
                <div className="name font-medium mr-2 text-blue-500 flex-none">{props.name}</div>
                <div className="text my-auto mr-2">{props.message}</div>
                <div className="time text-xs mt-1 text-gray-500 font-thin flex-none ml-auto">{props.createdAt}</div>
              </div>
            ))}
            
          </div>
          
          <div className="py-2 flex text-sm border text-gray-400 cursor-pointer bg-gray-100 hover:bg-gray-200" onClick={() => setShowMore(!showMore)}>
            <button className="w-full font-medium text-blue-500 mx-auto flex-none"  >{showMore ? "Show less" : "Show more"}</button>
          </div>
        </div>
        


      </div>
    </div>
  )
}

export default AdminMessages