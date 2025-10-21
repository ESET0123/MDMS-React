import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Quickbutton from '../../../Components/ui/Button/QuickButton/Quickbutton';
import Searchbar from '../../../Components/ui/SearchBar/Searchbar';
import { RiUserAddLine } from "react-icons/ri";
import Table from '../../../Components/ui/Table/Table';
import { IoMdMore } from 'react-icons/io';
import Moreaction from '../../../Components/PopUps/MoreAction/Moreaction';
// import InviteUserModal from '../../../Components/PopUps/InviteUserModal/InviteUserModal'; // Ensure this component exists
import { setSearchTerm, setFilterBy } from '../../../redux/slices/data/dataSlice';

export default function Usermanagement() {
  const dispatch = useDispatch();
  // FIX: Access the state correctly via `state.data`
  const { users, searchTerm, filterBy } = useSelector(state => state.data);

  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);

  const handleMoreActionClick = (e, userId) => {
    setSelectedUserId(selectedUserId === userId ? null : userId);
  };

  const handleInviteUserClick = () => {
    setIsInviteModalOpen(true);
  };

  const closeMoreAction = () => {
    setSelectedUserId(null);
  };

  const closeInviteModal = () => {
    setIsInviteModalOpen(false);
  };

  const userActions = {
    title: 'More Actions',
    render: (item) => (
      <div className="space-x-2 flex justify-center relative">
        <button
          onClick={(e) => handleMoreActionClick(e, item.id)}
          className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white rounded-full p-1 transition-colors duration-200"
        >
          <IoMdMore />
        </button>
        {selectedUserId === item.id && (
          <div className="absolute right-0 top-full mt-2 z-10">
            <Moreaction onClose={closeMoreAction} />
          </div>
        )}
      </div>
    ),
  };

  const filteredData = users.filter(item => {
    if (!searchTerm) return true;
    const propertyValue = item[filterBy];
    const value = propertyValue ? propertyValue.toString().toLowerCase() : '';
    return value.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="p-4 bg-white dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      <div className='flex items-center justify-between'>
        <p className='text-2xl font-bold dark:text-white'>User Management</p>
        <div>
          <Quickbutton
            iconname={<RiUserAddLine />}
            tag="Invite user"
            onClick={handleInviteUserClick}
          />
        </div>
      </div>
      
      <div className='mt-5'>
        <Searchbar
          filterValue={filterBy}
          onFilterChange={(e) => dispatch(setFilterBy(e.target.value))}
          searchTerm={searchTerm}
          onSearchChange={(e) => dispatch(setSearchTerm(e.target.value))}
          placeholder="Search users..."
        />
      </div>

      <div className='mt-7'>
        <Table data={filteredData} actionsColumn={userActions} />
      </div>

      {/* {isInviteModalOpen && <InviteUserModal onClose={closeInviteModal} />} */}
    </div>
  );
}
