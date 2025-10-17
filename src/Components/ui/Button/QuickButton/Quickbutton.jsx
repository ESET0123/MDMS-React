import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { FiUpload } from "react-icons/fi";
import { GoCircleSlash } from "react-icons/go";

const clickHandler = (tag, msg) => {
  console.log(tag+" "+msg);
}
export default function Quickbutton(props) {
  return (
    <button onClick={()=>clickHandler(props.tag, props.msg)} className='px-4 py-2 flex items-center border border-gray-300 rounded-full w-fit mr-4 my-4 hover:bg-gray-100 transition-colors'>
        <div className='items-center justify-center mr-2'> 
            {props.iconname}
        </div>
        <div className='items-center justify-center'>
            {props.tag}
        </div>
    </button>
  )
}
