import React from 'react';
import { useSelector } from 'react-redux';
import Table from '../../../components/ui/table/Table';
import Pagination from '../../../components/ui/Pagination/Pagination';
import { usePagination } from '../../../hooks/usePagination';

export default function Billpayment() {
  const bills = useSelector(state => state.data?.bills || []);
  const { currentItems, totalPages, currentPage, setCurrentPage } = usePagination('bills', bills, 4);

  const viewPayActions = {
    title: "Actions",
    render: (item) => (
      <div className="space-x-2">
        <button 
          onClick={() => alert(`Viewing bill for: ${item.name}`)}
          className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white rounded-full p-1 transition-colors duration-200"
        >
          View
        </button>
        <span> / </span>
        <button 
          onClick={() => alert(`Paying bill for: ${item.name}`)}
          className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white rounded-full p-1 transition-colors duration-200"
        >
          Pay
        </button>
      </div>
    )
  };

  return (
    <div>
      <p className='font-bold my-3'>My Bills</p>
      <Table data={currentItems} actionsColumn={viewPayActions} />
      
      <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />

      <p className='my-3'>
        <span className='font-bold'>Note: </span>
        All bills are generated on the 1st of each month.
      </p>
    </div>
  );
}