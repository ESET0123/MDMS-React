import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";

export default function Quickbutton(props) {
  return (
    <div className='px-4 py-2 flex items-center border border-gray-300 rounded-full w-fit m-4 '>
        <div className='items-center justify-center'> 
            {props.iconname}
        </div>
        <div className='items-center justify-center'>
            {props.tag}
        </div>
    </div>
  )
}
