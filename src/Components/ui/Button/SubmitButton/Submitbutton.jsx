import React from 'react';

export default function Submitbutton({ title, iconname }) {
  return (
    <div className='justify-self-center'>
      <button
        className='my-4 flex items-center px-20 py-2 rounded-2xl focus:outline-none focus:ring-2 text-white bg-zinc-800 border border-zinc-800 focus:ring-zinc-600 
          dark:text-zinc-900 dark:bg-white dark:border-white dark:focus:ring-zinc-400 transition-colors duration-300'
      >
        <div className='items-center justify-center mr-2'>
          {iconname}
        </div>
        <div className='items-center justify-center'>
          {title}
        </div>
      </button>
    </div>
  );
}
