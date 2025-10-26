import React from 'react'
import Datetypebutton from '../ui/Button/DateTypeButton/Datetypebutton'

export default function Graphheader(props) {
  return (
    <div className='flex justify-between my-4 items-center w-full'> 
        <div>
            <p className='font-bold text-xl'> {props.title} </p>
        </div>
        <div>
            <Datetypebutton title={props.title} buttons={props.buttons} selected={props.selected} onSelect={props.onSelect} />
        </div>
    </div>
  )
}
