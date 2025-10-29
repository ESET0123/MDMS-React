import React from 'react'
import Inputtext from '../../ui/Input/Inputtext/Inputtext'
import Submitbutton from '../../ui/Button/SubmitButton/Submitbutton'

export default function Addzone() {
  return (
    <div className='p-4 w-full'>
      <div>
        <p className='font-bold text-xl'>Add Zone</p>
      </div>
      <div>
        <p className='mt-4'>This is a dialogue to add zone </p>
      </div>
      <div>
        <Inputtext placeholder="Zone Name" />
        <Inputtext placeholder="Admin" />
        <Inputtext placeholder="Address or Pincode" />
        <Inputtext placeholder="Description" />
        <Submitbutton title="Add Zone" />
      </div>
    </div>
  )
}
