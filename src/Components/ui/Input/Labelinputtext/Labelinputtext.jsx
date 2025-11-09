import React, { useId } from 'react';

export default function Labelinputtext({ placeholder, name, type, value, onChangeFunc, label }) {
  const uniqueId = useId();

  return (
    <div className=" justify-self-center flex flex-col my-2 w-full static">
      <label
        htmlFor={uniqueId}
        className="text-gray-500 dark:text-gray-400 text-xs font-semibold relative top-2 ml-3 px-1 bg-white dark:bg-transparent  w-fit"
      >
        {label ? label : placeholder}:
      </label>
      <input
        id={uniqueId}
        name={name}
        type={type}
        value={value}
        onChange={onChangeFunc}
        placeholder={placeholder}
        className="border-gray-400 rounded-md dark:border-gray-700 input p-4 text-xs bg-white dark:bg-gray-600 dark:text-white border-2 w-full focus:outline-none placeholder:text-black/25 dark:placeholder:text-gray-400"
      />
    </div>
  );
}
