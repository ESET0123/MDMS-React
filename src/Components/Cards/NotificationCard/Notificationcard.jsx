import React from 'react';
import { IoIosNotificationsOutline } from "react-icons/io";

export default function NotificationCard({ title, description, onClick, isSelected }) {
  return (
    <div className='flex justify-self-center'>
      <button
        onClick={onClick}
        className={`w-full flex items-center flex-row border border-zinc-800 rounded-xl m-4 text-left cursor-pointer transition-colors
        ${isSelected 
          ? 'bg-zinc-300 dark:bg-zinc-600' 
          : 'hover:bg-zinc-200 dark:hover:bg-zinc-800'
        }`}
      >
        <div className='flex items-center justify-center bg-white dark:bg-gray-800 rounded-l-xl h-full w-3/10 p-2 transition-colors'>
          <IoIosNotificationsOutline size="2rem" />
        </div>

        <div className='bg-zinc-100 dark:bg-gray-700 rounded-r-xl w-7/10 p-3 transition-colors'>
          <p className='font-bold text-gray-800 dark:text-gray-100 transition-colors'>
            {title}
          </p>
          <p className='text-gray-600 dark:text-gray-200 transition-colors line-clamp-2'>
            {description}
          </p>
        </div>
      </button>
    </div>
  );
}