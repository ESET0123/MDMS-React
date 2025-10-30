import React, { useState } from 'react';

export default function YearNavigatebutton() {
  const [year, setYear] = useState(2025);

  const handlePreviousYear = () => {
    setYear(prevYear => prevYear - 1);
  };

  const handleNextYear = () => {
    setYear(prevYear => prevYear + 1);
  };

  return (
    <div className=" flex items-center justify-center gap-4 p-8">
      <button
        onClick={handlePreviousYear}
        className="p-2  flex items-center justify-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 rounded-lg transition-colors duration-200"
        aria-label="Previous year"
      >
        <svg
          className="w-5 h-5 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <div className="px-4 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg min-w-[100px] text-center">
        <span className="text-lg font-medium text-gray-900">{year}</span>
      </div>

      <button
        onClick={handleNextYear}
        className=" p-2 flex items-center justify-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 rounded-lg transition-colors duration-200"
        aria-label="Next year"
      >
        <svg
          className="w-5 h-5 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}