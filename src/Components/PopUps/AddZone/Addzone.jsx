import React from 'react'
import Inputtext from '../../ui/Input/Inputtext/Inputtext'
import Labelinputtext from '../../ui/input/Labelinputtext/Labelinputtext'
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
        <div>
          <Labelinputtext
            label="Zone Name"
            type="text"
            name="zone"
            placeholder="Mangalore"
          />
        </div>
        <div>
          <Labelinputtext
            label="Admin"
            type="text"
            name="admin"
            placeholder="axys"
          />
        </div>
        <div>
          <Labelinputtext
            label="Location"
            type="text"
            name="location"
            placeholder="Address or Pincode"
          />
        </div>
        <div>
          <Labelinputtext
            label="Description"
            type="text"
            name="description"
            placeholder="Description here"
          />
        </div>
        <Submitbutton title="Add Zone"/>
      </div>
    </div>
  )
}
