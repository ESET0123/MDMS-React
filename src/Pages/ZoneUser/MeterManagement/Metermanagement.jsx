import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { usePagination } from '../../../hooks/usePagination';
import Table from '../../../Components/ui/Table/Table';
import Quickbutton from '../../../Components/ui/Button/QuickButton/Quickbutton'
import MoreActionButton from '../../../Components/ui/Button/MoreActionButton/Moreactionbutton';
import Pagination from '../../../Components/ui/Pagination/Pagination';
import { MdOutlineFileUpload, MdOutlineFileDownload } from "react-icons/md";
import { MdBlockFlipped } from "react-icons/md";

export default function Metermanagement() {
  const meterData = useSelector(state => state.data?.meterData || []);
  const { currentItems, totalPages, currentPage, setCurrentPage } = usePagination('meterData', meterData, 10);

  const viewPayActions = {
    title: 'More Actions',
    render: () => <MoreActionButton />,
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
            <Quickbutton iconname={<MdOutlineFileDownload />} tag="Import CSV" />
            <Quickbutton iconname={<MdOutlineFileUpload />} tag="Export CSV" />
            <Quickbutton iconname={<MdBlockFlipped />} tag="De-Activate meters" />
          </div>
        </div>
      </div>
    </div>
  );
}
