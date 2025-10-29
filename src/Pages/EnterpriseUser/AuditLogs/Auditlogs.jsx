import { useSelector } from 'react-redux';
import Searchbar from '../../../components/ui/SearchBar/Searchbar'
import Quickbutton from '../../../components/ui/Button/QuickButton/Quickbutton'
import Table from '../../../components/ui/table/Table';

import { MdOutlineFileUpload } from "react-icons/md";
import Pagination from '../../../components/ui/Pagination/Pagination';
import { usePagination } from '../../../hooks/usePagination';
import { useFilter } from '../../../hooks/useFilter';
import MoreActionButton from '../../../Components/ui/Button/MoreActionButton/moreactionbutton';

// import MoreActionButton from '../../../Components/ui/Button/MoreActionButton/Moreactionbutton';

export default function Auditlogs() {
  const meterData = useSelector(state => state.data?.meterData || []);
  const { searchTerm, setSearchTerm, selectedColumn, setSelectedColumn, filteredData, searchableColumns } = useFilter(meterData);
  const { currentItems, totalPages, currentPage, setCurrentPage } = usePagination('meterData', meterData, 10);

  
    const viewPayActions = {
      title: 'More Actions',
      render: () => <MoreActionButton />,
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
