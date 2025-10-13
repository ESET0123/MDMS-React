import React from 'react'

export default function Submitbutton(props) {
  return (
    <div className='justify-self-center'>
      <button className=' my-4 px-20 py-2 border border-gray-800 rounded-2xl focus:outline-none focus:ring-2 '>{props.title }</button>
    </div>
  )
}
