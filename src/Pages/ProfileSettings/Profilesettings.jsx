import React from 'react'
import { NavLink } from 'react-router-dom'
import Profiletab from '../../Components/tab/ProfileTab/Profiletab'
import Securitytab from '../../Components/tab/SecurityTab/Securitytab'
import Notificationtab from '../../Components/tab/NotificationTab/Notificationtab'

export default function Profilesettings() {
  return (
    <div>
      <div>
        <p className='font-bold'>Profile & Settings</p>
      </div>
      <div className=' '>
        <div className='flex p-12 text-xl font-bold text-gray-500 justify-around border-b border-gray-400 pb-2'>
            <NavLink to="" >Profile</NavLink>
            <NavLink to="" >Security</NavLink>
            <NavLink to="" >Notification</NavLink>
        </div>
        <div>
            {/* <Securitytab/> */}
            {/* <Profiletab/> */}
            <Notificationtab/>
        </div>
      </div>
    </div>
  )
}
