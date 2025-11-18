import React, { useEffect, useState } from 'react'
import Quickbutton from '../../../Components/ui/Button/QuickButton/Quickbutton'
import Table from '../../../Components/ui/Table/Table';
import { MdOutlineFileUpload } from "react-icons/md";
import MoreActionButton from '../../../Components/ui/Button/MoreActionButton/MoreActionButton.jsx';
import Pagination from '../../../Components/ui/Pagination/Pagination';
import { usePagination } from '../../../hooks/usePagination';
import YearNavigatebutton from '../../../Components/ui/Button/YearNavigateButton/Yearnavigatebutton';
import Bargraph2 from '../../../Components/graph/BarGraph/Bargraph2';
import ExportCsvButton from '../../../Components/ui/Button/QuickButton/CustomQB/ExportCsvButton';
import Inviteuser from '../../../Components/PopUps/InviteUser/Inviteuser';
import usePopup from '../../../hooks/usePopup'
import Popup from '../../../Components/PopUps/Popup';
import { API_ENDPOINTS, fetchAPI } from '../../../config/api';

export default function Userrolemanagement() {
  const invitePopup = usePopup();
  const [userroleData, setUserroleData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserRoleData = async () => {
      try {
        setLoading(true);
        const data = await fetchAPI(API_ENDPOINTS.meterManagementENT);
        setUserroleData(data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch user role data:', err);
        setError('Failed to load user role data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserRoleData();
  }, []);

  const { currentItems, totalPages, currentPage, setCurrentPage } = usePagination('userroleData', userroleData, 10);

  const viewPayActions = {
    title: 'More Actions',
    render: () => <MoreActionButton />,
  };

  if (loading) {
    return (
      <div className='flex items-center justify-center h-64'>
        <p className='text-xl'>Loading user role data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex items-center justify-center h-64'>
        <p className='text-xl text-red-600'>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <div className='flex items-center justify-between'>
        <p className='font-bold text-xl'>User and Role Management</p>
        <div className='flex'>
          <ExportCsvButton data={currentItems} filename="userrole_data.csv" />
          <Quickbutton iconname={<MdOutlineFileUpload />} tag="Invite User" onClickFunc={invitePopup.openPopup} />
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