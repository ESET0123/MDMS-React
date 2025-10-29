import React, { useState } from 'react';
import Quickbutton from '../../../components/ui/Button/QuickButton/Quickbutton'
import Table from '../../../components/ui/table/Table';
import { MdOutlineFileUpload } from "react-icons/md";
import { useSelector } from 'react-redux';

import MoreActionButton from '../../../Components/ui/Button/MoreActionButton/moreactionbutton';
import Pagination from '../../../components/ui/Pagination/Pagination';
import { usePagination } from '../../../hooks/usePagination';

import YearNavigatebutton from '../../../components/ui/Button/YearNavigateButton/Yearnavigatebutton';
import Bargraph2 from '../../../components/graph/BarGraph/Bargraph2';
import ExportCsvButton from '../../../Components/ui/Button/QuickButton/CustomQB/ExportCsvButton';
import Inviteuser from '../../../Components/PopUps/InviteUser/Inviteuser';
import  usePopup  from '../../../hooks/usePopup'
import Popup from '../../../Components/PopUps/Popup';

export default function Userrolemanagement() {
    const invitePopup = usePopup() ;
    const userroleData = useSelector(state => state.data?.metermanagementENT || []);
    const { currentItems, totalPages, currentPage, setCurrentPage } = usePagination('userroleData', userroleData, 10);
    
    const viewPayActions = {
      title: 'More Actions',
      render: () => <MoreActionButton />,
    };
  
  return (
    <div>
      <div className='flex items-center justify-between'>
        <p className='font-bold text-xl'>User and Role Management</p>
        <div className='flex'>
              <ExportCsvButton data={currentItems} filename="userrole_data.csv" />
              <Quickbutton iconname={<MdOutlineFileUpload />} tag="Invite User" onClickFunc={invitePopup.openPopup}/>
        </div>
      </div>
        <Table data={currentItems} actionsColumn={viewPayActions} />
        <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
        
        <div className='my-4 flex justify-between items-center'>
          <p>Comparison between Active and De-Active users on each year</p>
          <YearNavigatebutton />
        </div>
        <Bargraph2 />
        <Popup isOpen={invitePopup.isOpen} onClose={invitePopup.closePopup}>
          <Inviteuser />
        </Popup>
    </div>
  )
}
