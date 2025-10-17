import React from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";

export default function Notificationcard(props) {
  const notificationViewHandler = () => {
    console.log();
  }
  return (
    <div className='w-full px-4'>

    <button 
      onClick={notificationViewHandler} 
      className='w-full  flex item-self-center justify-self-center flex-row border border-gray-500 rounded-xl m-4 text-left cursor-pointer hover:bg-gray-800 transition-colors'
    >
      <div className='flex items-center justify-center bg-white rounded-l-xl w-1/6 p-2'>
        <IoIosNotificationsOutline size="2rem"/>
      </div>
      <div className='bg-gray-100 rounded-r-xl w-5/6 p-3'>
            <p className='font-bold'>{props.title}</p>
            <p>{props.description}</p>
      </div>
    </button>
    </div>
  )
}
