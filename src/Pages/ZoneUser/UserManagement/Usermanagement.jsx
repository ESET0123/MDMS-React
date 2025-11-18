import React, { useEffect, useState } from 'react'
import Quickbutton from '../../../Components/ui/Button/QuickButton/Quickbutton';
import Searchbar from '../../../Components/ui/SearchBar/Searchbar';
import { RiUserAddLine } from "react-icons/ri";
import Table from '../../../Components/ui/Table/Table';
import Pagination from '../../../Components/ui/Pagination/Pagination';
import { usePagination } from '../../../hooks/usePagination';
import { useFilter } from '../../../hooks/useFilter';
import MoreActionButton from '../../../Components/ui/Button/MoreActionButton/MoreActionButton.jsx';
import Inviteuser from '../../../Components/PopUps/InviteUser/Inviteuser';
import usePopup from '../../../hooks/usePopup'
import Popup from '../../../Components/PopUps/Popup';
import { API_ENDPOINTS, fetchAPI } from '../../../config/api';

export default function Usermanagement() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const invitePopup = usePopup();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const data = await fetchAPI(API_ENDPOINTS.users);
        setUsers(data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch users:', err);
        setError('Failed to load users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const { searchTerm, setSearchTerm, selectedColumn, setSelectedColumn, filteredData, searchableColumns } = useFilter(users);
  const { currentItems, totalPages, currentPage, setCurrentPage } = usePagination('filteredData', filteredData, 10);

  const userActions = {
    title: 'More Actions',
    render: () => <MoreActionButton />,
  };

  if (loading) {
    return (
      <div className="p-4 min-h-screen flex items-center justify-center">
        <p className='text-xl'>Loading users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 min-h-screen flex items-center justify-center">
        <p className='text-xl text-red-600'>{error}</p>
      </div>
    );
  }

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