import React from 'react'

export default function Labelinputtext(props) {
  return (
    <div className="relative mt-5 justify-self-center  w-full">
        <input
            type="text"
            id="my-input"
            placeholder=" "
            className="peer w-full p-3 pt-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <label
            htmlFor="my-input"
            className="absolute top-2 left-3 text-gray-500 text-sm transition-all duration-200 ease-in-out
                peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base
                peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
        >
           {props.label}
        </label>
    </div>
  )
}
