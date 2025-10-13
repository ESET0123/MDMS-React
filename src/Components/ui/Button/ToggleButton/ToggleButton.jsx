import React from 'react'
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";

export default function ToggleButton() {
  return (
    <div>
       {/* <div>
            <FaToggleOff color="gray" size='2rem'/>
        </div> */}
        {/* <div>
            <FaToggleOn size='2rem'/>
        </div> */}
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer"/>
          <div className="relative w-11 h-6 bg-gray-200 peer-checked:bg-blue-900 peer-focus:outline-none  rounded-full peer dark:bg-gray-100 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-gray-500 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></div>
          {/* <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span> */}
        </label>
    </div>
  )
}
