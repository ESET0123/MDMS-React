import React from 'react'
import { FaRegClock } from "react-icons/fa6";

export default function Dashboardcard(props) {
  return (
    <div className='w-fit item-center justify-center border border-gray-300 p-8 px-14 m-4 rounded-xl'>
        <div className='justify-self-center py-4'>
            <FaRegClock size="2rem"/>
        </div>
        <div>
        <h1 className='justify-self-center size-lg font-bold'>{props.heading}</h1>
        </div>
        <div>
            <p className='justify-self-center text-gray-500'>{props.description}</p>
        </div>
            
      
    </div>
  )
}
