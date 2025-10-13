import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import ToggleButton from '../../ui/Button/ToggleButton/ToggleButton';


export default function Header() {
  return (
    <div>
      <div className="flex p-4 justify-between items-center bg-gray-300">
        <div>
          <p className="font-bold text-2xl">MDMS</p>
        </div>
        <div className='flex items-center'>
          <div className='mx-2'>
            <IoMdNotificationsOutline size='2rem' />
          </div>
          <div className='mx-2'>
            <ToggleButton/>
          </div>
          <div className="mx-2 grid shrink-0 grid-cols-1 focus-within:relative">
            {/* <button className="border border-blue-500 text-2xl rounded">en</button> */}
            <select id="currency" name="currency" aria-label="Currency" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-300 py-1.5 pr-7 pl-3 text-base  placeholder:text-gray-500 focus:outline-none  sm:text-sm/6">
              <option>en</option>
              <option>hi</option>
              <option>fr</option>
            </select>
            <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end sm:size-4">
              <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" fillRule="evenodd" />
            </svg>
          </div>
          <div className='rounded-full p-2 mx-2 bg-white'>
            <CiUser size='2rem'/>
          </div>
        </div>
    </div>
  </div>
  )
}
