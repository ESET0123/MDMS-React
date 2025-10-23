import React, { useState } from 'react';
import { useSelector } from 'react-redux';import Searchbar from '../../../Components/ui/SearchBar/Searchbar'
import Table from '../../../Components/ui/Table/Table'
import Linegraph from '../../../Components/graph/Linegraph/Linegraph';
import MoreActionsButton from '../../../Components/ui/Button/MoreActionButton/moreactionbutton';
import Pagination from '../../../Components/ui/Pagination/Pagination';
import { usePagination } from '../../../hooks/usePagination';

export default function Metermanagement() {
    const meterData = useSelector(state => state.data?.metermanagementENT || []);
    const { currentItems, totalPages, currentPage, setCurrentPage } = usePagination('meterData', meterData, 10);
    
    const viewPayActions = {
        title: 'More Actions',
        render: () => <MoreActionsButton />,
    };
      
  return (
    <div>
        <p className='font-bold text-xl'>Global Meter Management</p>
        <div className='my-4'>
            <Searchbar/>
        </div>
        <div>
            <Table data={currentItems} actionsColumn={viewPayActions} />
            <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
         
        </div>
       
        <div>
            <p className='my-2'>Each zones Trend of energy usage over time.</p>
            <Linegraph />
        </div>
    </div>
  )
}
