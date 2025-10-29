import React from "react";
import { IoMdSearch } from "react-icons/io";

export default function SearchBar({
  searchTerm,
  onSearchChange,
  selectedColumn,
  onColumnChange,
  columns = [],
  placeholder = "Search...",
  showAllOption = true,
  className = ''
}) {
  return (
    <div className={`my-4 flex w-2/4 max-w-2xl items-center bg-zinc-100 dark:bg-zinc-800 rounded-lg shadow-sm divide-x divide-gray-300 dark:divide-zinc-700 transition-colors ${className}`}>
      <div className="flex items-center relative">
        <select
          id="search-filter"
          name="search-filter"
          aria-label="Filter search results by"
          value={selectedColumn}
          onChange={(e) => onColumnChange(e.target.value)}
          className="col-start-1 row-start-1 w-full appearance-none py-2 pr-7 pl-3 text-base text-zinc-900 dark:text-zinc-100 bg-transparent focus:outline-none sm:text-sm/6 cursor-pointer"
        >
          {columns.map(column => (
            <option key={column.key} value={column.key}>
              {column.label}
            </option>
          ))}
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

      {/* Search input */}
      <div className='px-2 flex-grow flex items-center'>
        <IoMdSearch size='1.5rem' className="text-zinc-500 dark:text-zinc-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={placeholder}
          className="w-full h-full p-2 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-400 bg-transparent border-none focus:outline-none focus:ring-0"
        />
        {searchTerm && (
          <button
            onClick={() => onSearchChange('')}
            className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
            aria-label="Clear search"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}