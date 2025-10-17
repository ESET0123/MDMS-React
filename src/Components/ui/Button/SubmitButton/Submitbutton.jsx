import React from 'react';

export default function Submitbutton(props) {
  return (
    <div className='justify-self-center'>
      <button
        className='
          my-4 px-20 py-2 rounded-2xl focus:outline-none focus:ring-2
          
          // Light mode styles
          text-white bg-gray-800 border border-gray-800 focus:ring-gray-600 
          // Dark mode styles
          dark:text-gray-900 dark:bg-white dark:border-white dark:focus:ring-gray-400 
          // Transition for a smooth effect
          transition-colors duration-300
        '
      >
        {props.title}
      </button>
    </div>
  );
}
