import React, { useState } from 'react';
import Table from '../../../Components/ui/Table/Table';
import Pagination from '../../../Components/ui/Pagination/Pagination'; // Import the new Pagination component

export default function Billpayment() {
  const allBills = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
    { id: 4, name: 'Diana', email: 'diana@example.com' },
    { id: 5, name: 'Edward', email: 'edward@example.com' },
    { id: 6, name: 'Fiona', email: 'fiona@example.com' },
    { id: 7, name: 'George', email: 'george@example.com' },
    { id: 8, name: 'Hannah', email: 'hannah@example.com' },
    { id: 9, name: 'Isaac', email: 'isaac@example.com' },
    { id: 10, name: 'Jane', email: 'jane@example.com' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(allBills.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBills = allBills.slice(indexOfFirstItem, indexOfLastItem);

  const viewPayActions = {
    title: "Actions",
    render: (item) => (
      <div className="space-x-2">
        <button
          onClick={() => alert(`Viewing bill for: ${item.name}`)}
          className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white rounded-full p-1 transition-colors duration-200">
          View
        </button>
        <span> / </span>
        <button
          onClick={() => alert(`Paying bill for: ${item.name}`)}
          className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white rounded-full p-1 transition-colors duration-200">
          Pay
        </button>
      </div>
    )
  };

  return (
    <div>
      <p className='font-bold my-3'>My Bills</p>
      <Table data={currentBills} actionsColumn={viewPayActions} />
      
      {/* Call the Pagination component with props */}
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        setCurrentPage={setCurrentPage} 
      />

      <p className='my-3'><span className='font-bold'>Note: </span>All bills are generated on the 1st of each month.</p>
    </div>
  );
}
