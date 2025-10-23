import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Table from '../../../Components/ui/Table/Table';
import Quickbutton from '../../../Components/ui/Button/QuickButton/Quickbutton'
import Pagination from '../../../Components/ui/Pagination/Pagination';
import { usePagination } from '../../../hooks/usePagination';

import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";

import MoreActionsButton from '../../../Components/ui/Button/MoreActionButton/moreactionbutton';


export default function Metermanagement() {
  const meterData = useSelector(state => state.data?.meterData || []);
  const { currentItems, totalPages, currentPage, setCurrentPage } = usePagination('meterData', meterData, 10);
  
  const viewPayActions = {
    title: 'More Actions',
    render: () => <MoreActionsButton />,
  };

  return (
    <div>
      <div>
        <div className="w-5/6">
        <div>
          <p className="font-bold">Meter Management</p>
        </div>
        <div className="mt-7">
          <Table data={currentItems} actionsColumn={viewPayActions} />
          <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
          
        </div>
      </div>

      </div>
      <div className='mt-5'>
        <div>
          <p className='font-bold'>Bulk operations</p>
        </div>
        <div>
            <div className='flex'>
                <Quickbutton msg="clicked" iconname={<IoIosAddCircleOutline />} tag="Add meter"/>
                <Quickbutton msg="clicked" iconname={<IoIosSettings />} tag="Generate Report"/>
            </div>
        </div>
      </div>
    </div>
  );
}
