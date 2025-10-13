import React from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";

export default function Notificationcard(props) {
  return (
    <div className='flex item-center justify-center flex-row item-center justify-center border border-gray-500 rounded-xl m-4'>
      <div className='flex items-center justify-center bg-white rounded-l-xl w-1/6'>
        <IoIosNotificationsOutline size="2rem"/>
      </div>
      <div className='bg-gray-100 rounded-r-xl w-5/6 p-3'>
            <p className='font-bold'>{props.title}</p>
            <p>{props.description}</p>
      </div>
    </div>
  )
}
