import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Quickbutton from '../../../Components/ui/Button/QuickButton/Quickbutton'
import MoreActionsButton from '../../../Components/ui/Button/MoreActionButton/moreactionbutton';
import { MdOutlineAddCircleOutline } from "react-icons/md";
import Table from '../../../Components/ui/Table/Table';
import Pagination from '../../../Components/ui/Pagination/Pagination';
import { usePagination } from '../../../hooks/usePagination';

export default function Zonemanagement() {

  const zonemanagementData = useSelector(state => state.data?.zonemanagementData || []);
  const { currentItems, totalPages, currentPage, setCurrentPage } = usePagination('zonemanagementData', zonemanagementData, 10);
  
  const viewPayActions = {
    title: 'More Actions',
    render: () => <MoreActionsButton />,
  };

  return (
    <div>
      <div className='flex items-center justify-between'>
        <p className='font-bold text-xl'>Zone Management</p>
        <Quickbutton iconname={<MdOutlineAddCircleOutline />} tag="Add Zone" />
      </div>
      <Table data={zonemanagementData} actionsColumn={viewPayActions}/>
      <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
      
    </div>
  )
}
