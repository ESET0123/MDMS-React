import React, { useEffect, useState } from 'react'
import Searchbar from '../../../Components/ui/SearchBar/Searchbar'
import Table from '../../../Components/ui/Table/Table';

import Pagination from '../../../Components/ui/Pagination/Pagination';
import { usePagination } from '../../../hooks/usePagination';
import { useFilter } from '../../../hooks/useFilter';
import MoreActionButton from '../../../Components/ui/Button/MoreActionButton/MoreActionButton.jsx';
import ExportCsvButton from '../../../Components/ui/Button/QuickButton/CustomQB/ExportCsvButton';
import ExportPdfButton from '../../../Components/ui/Button/QuickButton/CustomQB/ExportPdfButton';


export default function Auditlogs() {
  const [meterData, setMeterData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/meterData')
      .then(res => res.json())
      .then(data => setMeterData(data))
      .catch(err => console.log(err));
  }, []);
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
          <ExportPdfButton data={currentItems} filename="auditlog_data.pdf" title='Audit Log' />
        </div>
      </div>
      <div>
        <Table data={currentItems} actionsColumn={viewPayActions} />
        <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  )
}
