import React, { useEffect, useState } from 'react'
import Quickbutton from '../../../Components/ui/Button/QuickButton/Quickbutton'
import MoreActionButton from '../../../Components/ui/Button/MoreActionButton/MoreActionButton.jsx';
import { MdOutlineAddCircleOutline } from "react-icons/md";
import Table from '../../../Components/ui/Table/Table';
import Pagination from '../../../Components/ui/Pagination/Pagination';
import { usePagination } from '../../../hooks/usePagination';
import usePopup from '../../../hooks/usePopup'
import Popup from '../../../Components/PopUps/Popup';
import Addzone from '../../../Components/PopUps/AddZone/Addzone';
import { API_ENDPOINTS, fetchAPI } from '../../../config/api';

export default function Zonemanagement() {
  const [zoneData, setZoneData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const invitePopup = usePopup();

  useEffect(() => {
    const fetchZoneData = async () => {
      try {
        setLoading(true);
        const data = await fetchAPI(API_ENDPOINTS.zoneManagementData);
        setZoneData(data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch zone data:', err);
        setError('Failed to load zone data');
      } finally {
        setLoading(false);
      }
    };

    fetchZoneData();
  }, []);

  const { currentItems, totalPages, currentPage, setCurrentPage } = usePagination('zonemanagementData', zoneData, 8);

  const viewPayActions = {
    title: 'More Actions',
    render: () => <MoreActionButton />,
  };

  if (loading) {
    return (
      <div className='flex items-center justify-center h-64'>
        <p className='text-xl'>Loading zone data...</p>
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
        <p className='font-bold text-xl'>Zone Management</p>
        <Quickbutton
          iconname={<MdOutlineAddCircleOutline />}
          tag={<p className=' p-0 text-sm font-bold'>Add Zone</p>}
          onClickFunc={invitePopup.openPopup} />
      </div>
      <Table data={currentItems} actionsColumn={viewPayActions} />
      <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
      <Popup
        isOpen={invitePopup.isOpen}
        onClose={invitePopup.closePopup}>
        <Addzone />
      </Popup>
    </div>
  )
}