import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminHeader from './AdminHeader'

const AdminMessages = () => {
  return (
    <div className='flex bg-neutral-100'>
        <div className="w-full text-gray-700 rounded">
          <div className="head flex border-none pb-3 rounded-t">
            <div className="title px-2 font-semibold text-lg">Inbox</div>
            <div className="count border p-1 px-2 font-semibold bg-blue-500 text-white rounded-full text-xs cursor-pointer font-mono">2</div>
            <div className="buttons ml-auto flex text-xs">
              <div className="btn p-1 px-2 border-2 cursor-pointer rounded-full font-bold hover:bg-gray-100">...</div>
            </div>
          </div>
        <div className="body border overflow-y-auto h-[calc(90vh-100px)]">
          <div className="messages">
            <div className="msg px-4 py-4 border-l-2 border-blue-500 flex text-sm shadow-sm text-gray-600 cursor-pointer hover:bg-gray-100">
              <div className="name font-medium mr-2 text-blue-500 flex-none">Tony's Laundary</div>
              <div className="text my-auto mr-2">Good afternoon, can you please show me how to book two appointments with thesame business? is that possible?</div>
              <div className="time text-xs mt-1 text-gray-500 font-thin flex-none ml-auto">23 mins ago</div>
            </div>
          
            <div className="msg px-4 py-4 border-l-2 border-blue-500 flex text-sm shadow-sm text-gray-600 cursor-pointer hover:bg-gray-100">
              <div className="name font-medium mr-2 text-blue-500 flex-none">Kode10x</div>
              <div className="text my-auto mr-2">I need a supervisor to check my job! Client's pleased, come check it out!</div>
              <div className="time text-xs mt-1 text-gray-500 font-thin flex-none ml-auto">45 mins ago</div>
            </div>
          
            <div className="msg px-4 py-4 border-blue-500 flex text-sm shadow-sm text-gray-600 cursor-pointer hover:bg-gray-100">
              <div className="name font-medium mr-2 text-blue-500 flex-none">Freddy Cleans ltd </div>
              <div className="text my-auto mr-2">I just finished my job, please confirm ASAP!</div>
              <div className="time text-xs mt-1 text-gray-500 font-thin flex-none ml-auto">1 hour ago</div>
            </div>
          
            <div className="msg px-4 py-4 border-blue-500 flex text-sm shadow-sm text-gray-600 cursor-pointer hover:bg-gray-100">
              <div className="name font-medium mr-2 text-blue-500 flex-none">Professor Cleaning and Laundary </div>
              <div className="text my-auto mr-2">Can you please send a supervisor to verify my work? The Job is done...</div>
              <div className="time text-xs mt-1 text-gray-500 font-thin flex-none ml-auto">1 hour ago</div>
            </div>
          
            <div className="msg px-4 py-4 border-blue-500 flex text-sm shadow-sm text-gray-600 cursor-pointer hover:bg-gray-100">
              <div className="name font-medium mr-2 text-blue-500 flex-none">Godwins Plaza</div>
              <div className="text my-auto mr-2">Hi, Freddy Cleans, did a good job! i havent been able to reach the guy who cleaned my apartment, help!</div>
              <div className="time text-xs mt-1 text-gray-500 font-thin flex-none ml-auto">1 hour ago</div>
            </div>
            <div className="msg px-4 py-4 border-blue-500 flex text-sm shadow-sm text-gray-600 cursor-pointer hover:bg-gray-100">
              <div className="name font-medium mr-2 text-blue-500 flex-none">Toyeeb Cleaning & Co</div>
              <div className="text my-auto mr-2">This project must be ready this month</div>
              <div className="time text-xs mt-1 text-gray-500 font-thin flex-none ml-auto">3 hours ago</div>
            </div>
            
            <div className="msg px-4 py-4 border-blue-500 flex text-sm shadow-sm text-gray-600 cursor-pointer hover:bg-gray-100">
              <div className="name font-medium mr-2 text-blue-500 flex-none">Lucky Cleans ltd</div>
              <div className="text my-auto mr-2">My pitch deck! prepare your fine.</div>
              <div className="time text-xs mt-1 text-gray-500 font-thin flex-none ml-auto">4 hours ago</div>
            </div>
            <div className="msg px-4 py-4 border-blue-500 flex text-sm shadow-sm text-gray-600 cursor-pointer hover:bg-gray-100">
              <div className="name font-medium mr-2 text-blue-500 flex-none">Tosin cleaning </div>
              <div className="text my-auto mr-2">Thank you...</div>
              <div className="time text-xs mt-1 text-gray-500 font-thin flex-none ml-auto">4 hours ago</div>
            </div>
          
            <div className="msg px-4 py-4 border-blue-500 flex text-sm shadow-sm text-gray-600 cursor-pointer hover:bg-gray-100">
              <div className="name font-medium mr-2 text-blue-500 flex-none">Ikate Cleaning and Laundary</div>
              <div className="text my-auto mr-2">hello there</div>
              <div className="time text-xs mt-1 text-gray-500 font-thin flex-none ml-auto">4 hours ago</div>
            </div>
          
            <div className="msg px-4 py-4 border-blue-500 flex text-sm shadow-sm text-gray-600 cursor-pointer hover:bg-gray-100">
              <div className="name font-medium mr-2 text-blue-500 flex-none">Okija Cleaning Servive</div>
              <div className="text my-auto mr-2">hello there</div>
              <div className="time text-xs mt-1 text-gray-500 font-thin flex-none ml-auto">4 hours ago</div>
            </div>
          
            <div className="msg px-4 py-4 border-blue-500 flex text-sm shadow-sm text-gray-600 cursor-pointer hover:bg-gray-100">
              <div className="name font-medium mr-2 text-blue-500 flex-none">Abuja Cleaning </div>
              <div className="text my-auto mr-2">hello there</div>
              <div className="time text-xs mt-1 text-gray-500 font-thin flex-none ml-auto">5 hours ago</div>
            </div>
          
            <div className="msg px-4 py-4 border-blue-500 flex text-sm shadow-sm text-gray-600 cursor-pointer hover:bg-gray-100">
              <div className="name font-medium mr-2 text-blue-500 flex-none">Festac Cleaning</div>
              <div className="text my-auto mr-2">Good work out there....</div>
              <div className="time text-xs mt-1 text-gray-500 font-thin flex-none ml-auto">5 hours ago</div>
            </div>
          
            <div className="msg px-4 py-4 border-blue-500 flex text-sm shadow-sm text-gray-600 cursor-pointer hover:bg-gray-100">
              <div className="name font-medium mr-2 text-blue-500 flex-none">Blessed Cleaning & Laundary</div>
              <div className="text my-auto mr-2">hello there</div>
              <div className="time text-xs mt-1 text-gray-500 font-thin flex-none ml-auto">6 hours ago</div>
            </div>
            
            <div className="msg px-4 py-4 border-blue-500 flex text-sm shadow-sm text-gray-600 cursor-pointer hover:bg-gray-100">
              <div className="name font-medium mr-2 text-blue-500 flex-none">Tosin</div>
              <div className="text my-auto mr-2">hello there</div>
              <div className="time text-xs mt-1 text-gray-500 font-thin flex-none ml-auto">8 hours ago</div>
            </div>
          </div>
          
          <div className="py-2 flex text-sm border text-gray-400 cursor-pointer bg-gray-100 hovay-200">
            <div className="name font-m5dium text-blue-500 mx-auto flex-none">Show More</div>
          </div>
        </div>
        


      </div>
    </div>
  )
}

export default AdminMessages