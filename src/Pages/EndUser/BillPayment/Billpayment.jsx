import React, { useEffect, useState } from 'react'
import { usePagination } from '../../../hooks/usePagination';
import Table from '../../../Components/ui/Table/Table';
import Pagination from '../../../Components/ui/Pagination/Pagination';

export default function Billpayment() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/bill_payments')
      .then(res => res.json())
      .then(data => setTableData(data))
      .catch(err => console.log(err));
  }, []);
  const { currentItems, totalPages, currentPage, setCurrentPage } = usePagination('tableData', tableData, 4);

  const viewPayActions = {
    title: "Actions",
    render: (item) => (
      <div className="space-x-2">
        <button
          onClick={() => alert(`Viewing bill for: ${item.id}`)}
          className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white rounded-full p-1 transition-colors duration-200"
        >
          View
        </button>
        <span> / </span>
        <button
          onClick={() => alert(`Paying bill for: ${item.id}`)}
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
