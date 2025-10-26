import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Quickbutton from '../../../Components/ui/Button/QuickButton/Quickbutton';
import Searchbar from '../../../Components/ui/SearchBar/Searchbar';
import { RiUserAddLine } from "react-icons/ri";
import Table from '../../../Components/ui/Table/Table';
import Pagination from '../../../Components/ui/Pagination/Pagination';
import { usePagination } from '../../../hooks/usePagination';
import { useFilter } from '../../../hooks/useFilter';
import MoreActionsButton from '../../../Components/ui/Button/MoreActionButton/moreactionbutton';
import Inviteuser from '../../../Components/PopUps/InviteUser/Inviteuser';

export default function Usermanagement() {
  const users = useSelector(state => state.data.users);

  const { searchTerm, setSearchTerm, selectedColumn, setSelectedColumn, filteredData, searchableColumns } = useFilter(users);

  const { currentItems, totalPages, currentPage, setCurrentPage } = usePagination('filteredData', filteredData, 10);

  const handleInviteUserClick = () => {
    alert('Invite User');
    
  };

  const userActions = {
    title: 'More Actions',
    render: () => <MoreActionsButton />,
  };


  return (
    <div>
      <div className="p-4 bg-white dark:bg-zinc-950 min-h-screen transition-colors duration-300">
        <div className='flex items-center justify-between'>
          <p className='text-2xl font-bold dark:text-white'>User Management</p>
          <div>
            <Quickbutton
              iconname={<RiUserAddLine />}
              tag="Invite user"
              onClickFunc={handleInviteUserClick}
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
          <Inviteuser />
        {/* {isInviteModalOpen && <InviteUserModal onClose={closeInviteModal} />} */}
      </div>
    </div>
  );
}