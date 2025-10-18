import React from 'react'
import Quickbutton from '../../../Components/ui/Button/QuickButton/Quickbutton'

export default function Usermanagement() {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <p className='font-bold'>User Management</p>
        <div>
          <Quickbutton  tag="Invite user"/>
        </div>
      </div>
    </div>
  )
}
