import React from 'react'
import ToggleButton from '../../ui/Button/ToggleButton/Togglebutton'
import Submitbutton from '../../ui/Button/SubmitButton/Submitbutton'

export default function Notificationtab() {
  return (
    <div className='m-5 w-2/3 p-4 justify-self-center'>
      <div className='justify-self-center '>
        <p>You can get notifications from</p>
      </div>
      <div className='w-2/3 justify-self-center'>
        <div className='flex my-4 justify-between'>
          <p>Email</p>
          <ToggleButton/>
        </div>
        <div className='flex  my-4 justify-between'>
          <p>SMS</p>
          <ToggleButton/>
        </div>
        <div className='flex  my-4 justify-between'>
          <p>Push</p>
          <ToggleButton/>
        </div>
      </div>
      <div>
        <Submitbutton title="Save & continue"/>
      </div>
    </div>
  )
}
