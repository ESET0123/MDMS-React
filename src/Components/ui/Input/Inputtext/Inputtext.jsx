import React from 'react';

export default function Inputtext({name, value, onChangeFunc, placeholder, type}) {
  return (
    <div className='flex-column place-items-center justify-center w-full'>
      <input name={name} value={value} onChange={onChangeFunc}
        className="flex my-4 w-full p-6 py-2 rounded-3xl bg-zinc-50 text-zinc-900 placeholder-zinc-500 border border-zinc-300
          dark:bg-zinc-700 dark:text-white dark:placeholder-zinc-400 dark:border-zinc-600
          focus:outline-none focus:ring-2 focus:ring-zinc-600 dark:focus:ring-zinc-400 transition-colors duration-300"
        placeholder={placeholder} type={type || "text"} />
    </div>
  );
}
