import React, { useEffect, useState } from 'react'
import Quickbutton from '../../../Components/ui/Button/QuickButton/Quickbutton';
import Searchbar from '../../../Components/ui/SearchBar/Searchbar';
import { RiUserAddLine } from "react-icons/ri";
import Table from '../../../Components/ui/Table/Table';
import Pagination from '../../../Components/ui/Pagination/Pagination';
import { usePagination } from '../../../hooks/usePagination';
import { useFilter } from '../../../hooks/useFilter';
import MoreActionButton from '../../../Components/ui/Button/MoreActionButton/Moreactionbutton.jsx';
import Inviteuser from '../../../Components/PopUps/InviteUser/Inviteuser';
import usePopup from '../../../hooks/usePopup'
import Popup from '../../../Components/PopUps/Popup';

export default function Usermanagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.log(err));
  }, []);

  const invitePopup = usePopup();

  const { searchTerm, setSearchTerm, selectedColumn, setSelectedColumn, filteredData, searchableColumns } = useFilter(users);

  const { currentItems, totalPages, currentPage, setCurrentPage } = usePagination('filteredData', filteredData, 10);

  const userActions = {
    title: 'More Actions',
    render: () => <MoreActionButton />,
  };


  return (
    <div>
      <div className="p-4 min-h-screen transition-colors duration-300">
        <div className='flex items-center justify-between'>
          <p className='text-2xl font-bold dark:text-white'>User Management</p>
          <div>
            <Quickbutton
              iconname={<RiUserAddLine />}
              tag="Invite user"
              onClickFunc={invitePopup.openPopup}
            />
          </div>
        </div>

        <div className='mt-5'>
          <Searchbar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedColumn={selectedColumn}
            onColumnChange={setSelectedColumn}
            columns={searchableColumns}
            placeholder="Search users..."
          />
        </div>

        <div>
          <Table data={currentItems} actionsColumn={userActions} />
          <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
        </div>
        <Popup isOpen={invitePopup.isOpen} onClose={invitePopup.closePopup} >
          <Inviteuser />
        </Popup>
      </div>
    </div>
  );
}
