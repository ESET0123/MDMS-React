import React from 'react'
import Datetypebutton from '../ui/Button/DateTypeButton/Datetypebutton'

export default function Graphheader(props) {
  return (
    <div className='flex justify-between items-center w-full'>
        <div>
            <p className='font-bold text-xl'>{props.title}</p>
        </div>
        <div>
            <Datetypebutton />
        </div>
      
    </div>
  )
}
