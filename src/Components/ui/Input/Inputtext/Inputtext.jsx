import React from 'react';

export default function Inputtext(props) {
  return (
    <div className='flex-column place-items-center justify-center w-full'>
      <input
        className="flex my-4 w-full px-4 py-2 rounded-2xl bg-gray-200 text-gray-900 placeholder-gray-500 border border-gray-300
          dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:border-gray-600
          focus:outline-none focus:ring-2 focus:ring-gray-600 dark:focus:ring-gray-400 transition-colors duration-300"
        placeholder={props.placeholder}
      />
    </div>
  );
}
