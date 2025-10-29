import { useSelector } from 'react-redux';
import Searchbar from '../../../components/ui/SearchBar/Searchbar'
import Table from '../../../components/ui/table/Table';

import Pagination from '../../../components/ui/Pagination/Pagination';
import { usePagination } from '../../../hooks/usePagination';
import { useFilter } from '../../../hooks/useFilter';
import MoreActionButton from '../../../Components/ui/Button/MoreActionButton/moreactionbutton';
import ExportCsvButton from '../../../Components/ui/Button/QuickButton/CustomQB/ExportCsvButton';
import ExportPdfButton from '../../../Components/ui/Button/QuickButton/CustomQB/ExportPdfButton';

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
                <ExportCsvButton data={currentItems} filename="audit_data.csv" />
                <ExportPdfButton data={currentItems} filename="auditlog_data.pdf" title = 'Audit Log' />

                {/* <Quickbutton iconname={<MdOutlineFileUpload />} tag="Export as PDF"/> */}
            </div>
        </div>
        <div>
            <Table data={currentItems} actionsColumn={viewPayActions} />
            <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
         
        </div>
         
    </div>
  )
}
