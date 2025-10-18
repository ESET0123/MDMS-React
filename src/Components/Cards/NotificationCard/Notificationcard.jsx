import React from 'react';
import { IoIosNotificationsOutline } from "react-icons/io";

export default function NotificationCard(props) {
  const notificationViewHandler = () => {
    console.log('Notification card clicked!');
  };

  return (
    <div className='w-full flex justify-self-center px-4'>
      <button 
        onClick={notificationViewHandler} 
        className='w-full flex items-center flex-row border border-zinc-500 rounded-xl m-4 text-left cursor-pointer transition-colors
        hover:bg-zinc-200 dark:hover:bg-zinc-800'
      >
        {/* Icon section */}
        <div className='flex items-center justify-center bg-white dark:bg-zinc-950 rounded-l-xl h-full w-1/6 p-2 transition-colors'>
          <IoIosNotificationsOutline 
            size="2rem" 
            className="text-gray-800 dark:text-gray-200 transition-colors" 
          />
        </div>
        {/* Text content section */}
        <div className='bg-zinc-100 dark:bg-zinc-800 rounded-r-xl w-5/6 p-3 transition-colors'>
          <p className='font-bold text-gray-800 dark:text-gray-100 transition-colors'>{props.title}</p>
          <p className='text-gray-600 dark:text-gray-400 transition-colors'>{props.description}</p>
        </div>
      </button>
    </div>
  );
}
