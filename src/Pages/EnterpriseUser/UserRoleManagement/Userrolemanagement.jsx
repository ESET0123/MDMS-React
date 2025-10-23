import Linegraph from '../../../Components/graph/Linegraph/Linegraph'
import Quickbutton from '../../../Components/ui/Button/QuickButton/Quickbutton'
import Table from '../../../Components/ui/Table/Table';
import { MdOutlineFileUpload } from "react-icons/md";
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import MoreActionsButton from '../../../Components/ui/Button/MoreActionButton/moreactionbutton';
import Pagination from '../../../Components/ui/Pagination/Pagination';
import { usePagination } from '../../../hooks/usePagination';

import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { IoMdMore } from 'react-icons/io';

export default function Userrolemanagement() {

    const userroleData = useSelector(state => state.data?.metermanagementENT || []);
    const { currentItems, totalPages, currentPage, setCurrentPage } = usePagination('userroleData', userroleData, 10);
    
    const viewPayActions = {
      title: 'More Actions',
      render: () => <MoreActionsButton />,
    };
  
  return (
    <div>
      <div className='flex items-center justify-between'>
        <p className='font-bold text-xl'>User and Role Management</p>
        <div className='flex'>
              <Quickbutton iconname={<MdOutlineFileUpload />} tag="Export as CSV"/>
              <Quickbutton iconname={<MdOutlineFileUpload />} tag="Invite User"/>
        </div>
      </div>
        <Table data={currentItems} actionsColumn={viewPayActions} />
        <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
        
        <div className='my-4'>
          <p>Comparison between Active and De-Active users on each year</p>
          {/* year slider */}
        </div>
        <Linegraph />
    </div>
  )
}
