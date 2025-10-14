import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
//<MdOutlineFileDownload />
import { FiUpload } from "react-icons/fi";
{/* <FiUpload /> */}
import { GoCircleSlash } from "react-icons/go";
{/* <GoCircleSlash /> */}



export default function Quickbutton(props) {
  return (
    <div className='px-4 py-2 flex items-center border border-gray-300 rounded-full w-fit mr-4 my-4 '>
        <div className='items-center justify-center'> 
            {props.iconname}
        </div>
        <div className='items-center justify-center'>
            {props.tag}
        </div>
    </div>
  )
}
