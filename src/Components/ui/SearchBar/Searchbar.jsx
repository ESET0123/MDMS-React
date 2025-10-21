import React from 'react';
import { IoMdSearch } from "react-icons/io";

export default function Searchbar({ filterValue, onFilterChange, searchTerm, onSearchChange, placeholder = "Search..." }) {
  return (
    <div className='flex  w-2/4 items-center bg-zinc-100 dark:bg-zinc-800 rounded-lg shadow-sm divide-x divide-gray-300 dark:divide-zinc-700 transition-colors'>
      
      <div className="flex items-center">
        <select
          id="search-filter"
          name="search-filter"
          aria-label="Filter search results by"
          value={filterValue}
          onChange={onFilterChange}
          className="col-start-1 row-start-1 w-full appearance-none py-2 pr-7 pl-3 text-base text-zinc-900 dark:text-zinc-100 bg-transparent focus:outline-none sm:text-sm/6"
        >
          <option value="Name">Name</option>
          <option value="ID">ID</option>
          <option value="zone">Zone</option>
          <option value="status">Status</option>
        </select>
        <svg
          viewBox="0 0 16 16"
          fill="currentColor"
          data-slot="icon"
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-zinc-500 dark:text-zinc-400 sm:size-4"
        >
          <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" fillRule="evenodd" />
        </svg>
      </div>

      <div className='px-2 border-b border-gray-700 flex-grow flex items-center'>
        <IoMdSearch size='1.5rem'/>
        <input type="text" value={searchTerm} onChange={onSearchChange} placeholder={placeholder} className="w-full h-full p-2 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-400 bg-transparent border-none focus:outline-none focus:ring-0" />
      </div>

    </div>
  );
}
