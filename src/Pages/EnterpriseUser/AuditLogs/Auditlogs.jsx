import React, { useEffect, useState } from 'react'
import Searchbar from '../../../Components/ui/SearchBar/Searchbar'
import Table from '../../../Components/ui/Table/Table';
import Pagination from '../../../Components/ui/Pagination/Pagination';
import { usePagination } from '../../../hooks/usePagination';
import { useFilter } from '../../../hooks/useFilter';
import MoreActionButton from '../../../Components/ui/Button/MoreActionButton/MoreActionButton.jsx';
import ExportCsvButton from '../../../Components/ui/Button/QuickButton/CustomQB/ExportCsvButton';
import ExportPdfButton from '../../../Components/ui/Button/QuickButton/CustomQB/ExportPdfButton';
import { API_ENDPOINTS, fetchAPI } from '../../../config/api';

export default function Auditlogs() {
  const [meterData, setMeterData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAuditData = async () => {
      try {
        setLoading(true);
        const data = await fetchAPI(API_ENDPOINTS.meterData);
        setMeterData(data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch audit logs:', err);
        setError('Failed to load audit logs');
      } finally {
        setLoading(false);
      }
    };

    fetchAuditData();
  }, []);

  const { searchTerm, setSearchTerm, selectedColumn, setSelectedColumn, filteredData, searchableColumns } = useFilter(meterData);
  const { currentItems, totalPages, currentPage, setCurrentPage } = usePagination('meterData', filteredData, 10);

  const viewPayActions = {
    title: 'More Actions',
    render: () => <MoreActionButton />,
  };

  if (loading) {
    return (
      <div className='flex items-center justify-center h-64'>
        <p className='text-xl'>Loading audit logs...</p>
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