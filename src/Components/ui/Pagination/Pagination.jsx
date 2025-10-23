import React from 'react';
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";


export default function Pagination({ currentPage, totalPages, setCurrentPage }) {
  return (
    <div className="flex justify-center mt-4 space-x-2">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-md disabled:opacity-50 "
      >
        <div className='flex items-center'>
              <GrFormPreviousLink />  Previous 
          </div> 
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => setCurrentPage(index + 1)}
          className={`px-4 py-2 rounded-md ${
            currentPage === index + 1
              ? 'bg-gray-600 text-white dark:bg-gray-400'
              : ''
          }`}
        >
          {index + 1}
        </button>
      ))}
      <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} 
      className="px-4 py-2 rounded-md disabled:opacity-50">
          <div className='flex items-center'>
              Next <GrFormNextLink />
          </div> 
      </button>
    </div>
  );
}
