// src/Notification.jsx
import React from 'react';
import Notificationcard from '../../../components/Cards/NotificationCard/Notificationcard';
import Notificationdetailedcard from '../../../components/Cards/NotificationDetailedCard/Notificationdetailedcard';

export default function Notification() {

  return (
    <div className='flex bg-white dark:bg-zinc-600 text-black dark:text-white min-h-screen transition-colors duration-300'>
        <div className='w-2/6 justify-center bg-zinc-100 dark:bg-zinc-900 rounded-xl'>
            <Notificationcard title="Title of the notification" description="Description of the notification"/>
            <Notificationcard title="Title of the notification" description="Description of the notification"/>
        </div>
         <div className='w-4/6 flex justify-center bg-zinc-100 dark:bg-zinc-900 ml-4 rounded-xl'>
            <Notificationdetailedcard/>
        </div>
    </div>
  )
}
