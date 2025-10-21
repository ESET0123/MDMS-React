import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from '../../../Components/ui/Table/Table';
import Pagination from '../../../Components/ui/Pagination/Pagination';
import { setPaginationState, setCurrentPage } from '../../../redux/slices/pagination/paginationSlice';

export default function Billpayment() {
  const dispatch = useDispatch();
  
  const bills = useSelector(state => state.data?.bills || []);
  const paginationState = useSelector(state => state.pagination?.paginationState?.bills);
  const { currentPage = 1, itemsPerPage = 4 } = paginationState || {};

  useEffect(() => {
    if (!paginationState) {
      dispatch(setPaginationState({ name: 'bills', currentPage: 1, itemsPerPage: 4 }));
    }
  }, [dispatch, paginationState]);

  const totalPages = Math.ceil(bills.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBills = bills.slice(indexOfFirstItem, indexOfLastItem);

  const viewPayActions = {
    title: "Actions",
    render: (item) => (
      <div className="space-x-2">
        <button onClick={() => alert(`Viewing bill for: ${item.name}`)}
          className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white rounded-full p-1 transition-colors duration-200">
          View
        </button>
        <span> / </span>
        <button onClick={() => alert(`Paying bill for: ${item.name}`)}
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
      
      <Pagination currentPage={currentPage} totalPages={totalPages} 
      setCurrentPage={(page) => dispatch(setCurrentPage({ name: 'bills', page }))} />

      <p className='my-3'><span className='font-bold'>Note: </span>All bills are generated on the 1st of each month.</p>
    </div>
  );
}
