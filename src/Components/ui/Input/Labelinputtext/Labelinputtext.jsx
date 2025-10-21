import React, { useId } from 'react';

export default function Labelinputtext(props) {
  const uniqueId = useId(); // Generate a unique ID for accessibility

  return (
    <div className="relative mt-5 justify-self-center w-full">
      <input
        type={props.type || "text"} 
        id={uniqueId} 
        name={props.name} 
        value={props.value} 
        onChange={props.onChange}
        placeholder=" "
        className="peer w-full p-5 pt-6 border border-zinc-300 rounded-3xl bg-white text-zinc-900
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
      />
      <label
        htmlFor={uniqueId}
        className="absolute top-2 left-3 text-zinc-500 text-sm transition-all duration-200 ease-in-out
          peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base
          peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600
          dark:text-zinc-400 dark:peer-focus:text-blue-400"
      >
        {props.label}
      </label>
    </div>
  );
}
