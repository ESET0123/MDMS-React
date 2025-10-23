import React from 'react'
import Searchbar from '../../../Components/ui/SearchBar/Searchbar'
import Quickbutton from '../../../Components/ui/Button/QuickButton/Quickbutton'
import { MdOutlineFileUpload } from "react-icons/md";

export default function Auditlogs() {
  return (
    <div>
        <p className='font-bold text-xl'>Audit Logs</p>
        <div className='flex my-2 items-center justify-between flex-wrap'>
            <Searchbar />
        <div className='flex flex-wrap'>
            <Quickbutton iconname={<MdOutlineFileUpload />} tag="Export as CSV"/>
            <Quickbutton iconname={<MdOutlineFileUpload />} tag="Export as PDF"/>
        </div>
    </div>
    </div>
  )
}
