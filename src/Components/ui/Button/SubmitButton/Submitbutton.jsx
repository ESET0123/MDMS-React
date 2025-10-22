import React from 'react';

export default function Submitbutton({title}) {
  return (
    <div className='justify-self-center'>
      <button
        className='
          my-4 px-20 py-2 rounded-2xl focus:outline-none focus:ring-2
          
          // Light mode styles
          text-white bg-zinc-800 border border-zinc-800 focus:ring-zinc-600 
          // Dark mode styles
          dark:text-zinc-900 dark:bg-white dark:border-white dark:focus:ring-zinc-400 
          // Transition for a smooth effect
          transition-colors duration-300
        '
      >
        {title}
      </button>
    </div>
  );
}
