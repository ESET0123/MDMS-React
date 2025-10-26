import { useSelector } from 'react-redux';
import Searchbar from '../../../Components/ui/SearchBar/Searchbar'
import Quickbutton from '../../../Components/ui/Button/QuickButton/Quickbutton'
import Table from '../../../Components/ui/Table/Table';

import { MdOutlineFileUpload } from "react-icons/md";
import Pagination from '../../../Components/ui/Pagination/Pagination';
import { usePagination } from '../../../hooks/usePagination';
import { useFilter } from '../../../hooks/useFilter';

import MoreActionsButton from '../../../Components/ui/Button/MoreActionButton/moreactionbutton';

export default function Auditlogs() {
  const meterData = useSelector(state => state.data?.meterData || []);
  const { searchTerm, setSearchTerm, selectedColumn, setSelectedColumn, filteredData, searchableColumns } = useFilter(meterData);
  const { currentItems, totalPages, currentPage, setCurrentPage } = usePagination('meterData', meterData, 10);

  
    const viewPayActions = {
      title: 'More Actions',
      render: () => <MoreActionsButton />,
    };
  return (
    <div>
        <p className='font-bold text-xl'>Audit Logs</p>
        <div className='flex my-2 items-center justify-between flex-wrap'>
              <Searchbar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                selectedColumn={selectedColumn}
                onColumnChange={setSelectedColumn}
                columns={searchableColumns}
                placeholder="Search meters..." />
            <div className='flex flex-wrap'>
                <Quickbutton iconname={<MdOutlineFileUpload />} tag="Export as CSV"/>
                <Quickbutton iconname={<MdOutlineFileUpload />} tag="Export as PDF"/>
            </div>
        </div>
        <div>
            <Table data={currentItems} actionsColumn={viewPayActions} />
            <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
         
        </div>
         
    </div>
  )
}
