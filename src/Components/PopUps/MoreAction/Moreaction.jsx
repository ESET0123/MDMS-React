import React from 'react'
import { MdEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { VscEye } from "react-icons/vsc";

export default function Moreaction() {
  return (
    <div className='w-fit rounded-xl p-4 border  border-gray-200'>
        <div className='flex items-center justify-between'>
            <VscEye />
            <button>View</button>
        </div>
        <div className='flex items-center justify-between'>
            <MdEdit />
            <button>Edit</button>
        </div>
        <div className='flex items-center text-red-500 justify-between'>
            <RiDeleteBinLine color='red'/>
            <button>Delete</button>
        </div>
    </div>
  )
}
