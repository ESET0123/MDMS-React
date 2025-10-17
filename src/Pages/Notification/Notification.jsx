import React from 'react'
import Notificationcard from '../../Components/Cards/NotificationCard/Notificationcard'
import Notificationdetailedcard from '../../Components/Cards/NotificationDetailedCard/Notificationdetailedcard'

export default function Notification() {
  return (
    <div className='flex pt-5'>
        <div className='w-2/6 bg-gray-100  rounded-xl'>
            <Notificationcard title="Title of the notification" description="Description of the notification"/>
            <Notificationcard title="Title of the notification" description="Description of the notification"/>
        </div>
         <div className='w-4/6 bg-gray-100 h-max ml-4 rounded-xl'>
            {/* <Notificationcard title="Title of the notification" description="Description of the notification"/> */}
            <Notificationdetailedcard/>
        </div>
    </div>
  )
}
