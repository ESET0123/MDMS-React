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

export default function Zonemanagement() {
  const [zoneData, setZoneData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/zonemanagementData')
      .then(res => res.json())
      .then(data => setZoneData(data))
      .catch(err => console.log(err));
  }, []);
  const invitePopup = usePopup();
  // const zonemanagementData = useSelector(state => state.data?.zonemanagementData || []);
  const { currentItems, totalPages, currentPage, setCurrentPage } = usePagination('zonemanagementData', zoneData, 8);

  const viewPayActions = {
    title: 'More Actions',
    render: () => <MoreActionButton />,
  };

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
