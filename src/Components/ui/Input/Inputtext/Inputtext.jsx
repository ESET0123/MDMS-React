import React from 'react'

export default function Inputtext(props) {
  return (
    <div className='flex-column place-items-center justify-center w-full'>
        <input className='flex bg-gray-200 text-gray-400 my-4 w-full px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-600' placeholder={props.placeholder}/>
    </div>
  )
}
