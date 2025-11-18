import React, { useEffect, useState } from 'react'
import Linegraph from '../../../Components/graph/Linegraph/Linegraph';
import Searchbar from '../../../Components/ui/SearchBar/Searchbar';
import Table from '../../../Components/ui/Table/Table';
import Pagination from '../../../Components/ui/Pagination/Pagination';
import YearNavigatebutton from '../../../Components/ui/Button/YearNavigateButton/Yearnavigatebutton';
import Bargraph from '../../../Components/graph/BarGraph/Bargraph';
import ExportCsvButton from '../../../Components/ui/Button/QuickButton/CustomQB/ExportCsvButton';
import ExportPdfButton from '../../../Components/ui/Button/QuickButton/CustomQB/ExportPdfButton';
import { usePagination } from '../../../hooks/usePagination';
import { useFilter } from '../../../hooks/useFilter';
import { API_ENDPOINTS, fetchAPI } from '../../../config/api';

export default function Reportanalytics() {
  const [graphData, setGraphData] = useState([]);
  const [reportAnalyticsData, setReportAnalyticsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReportData = async () => {
      try {
        setLoading(true);
        
        // Fetch both graph and analytics data concurrently
        const [graphResponse, analyticsResponse] = await Promise.all([
          fetchAPI(API_ENDPOINTS.lineGraphData),
          fetchAPI(API_ENDPOINTS.reportAnalyticsData)
        ]);
        
        setGraphData(graphResponse);
        setReportAnalyticsData(analyticsResponse);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch report analytics data:', err);
        setError('Failed to load report analytics data');
      } finally {
        setLoading(false);
      }
    };

    fetchReportData();
  }, []);

  const tableColumns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Zone', accessor: 'zone' },
    { header: 'Consumption', accessor: 'consumption' },
    { header: 'Date', accessor: 'date' },
  ];
  
  const lineConfiguration = [
    { dataKey: 'sales', color: '#D05ACF', fillcolor: 'white' },
  ];

  const { searchTerm, setSearchTerm, selectedColumn, setSelectedColumn, filteredData, searchableColumns } = useFilter(reportAnalyticsData);
  const { currentItems, totalPages, currentPage, setCurrentPage } = usePagination('filteredData', filteredData, 10);

  if (loading) {
    return (
      <div className='m-10 flex items-center justify-center h-64'>
        <p className='text-xl'>Loading report analytics...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className='m-10 flex items-center justify-center h-64'>
        <p className='text-xl text-red-600'>{error}</p>
      </div>
    );
  }

  return (
    <div className='m-10'>
      <div className='my-6'>
        <p className='font-bold text-xl'>Reports and Analytics</p>
        <p className='text-l my-4'>Trends of energy usage over time.</p>
        <Linegraph graphdata={graphData} xaxisdatakey="month" lineConfig={lineConfiguration} />
      </div>
      <div className='mr-10'>
        <p>Compare Zone consumption</p>
        <div className='flex justify-between items-center'>
          <Searchbar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedColumn={selectedColumn}
            onColumnChange={setSelectedColumn}
            columns={searchableColumns}
            placeholder="Search graph..."
          />
          <div className=''>
            <YearNavigatebutton />
          </div>
        </div>
        <div className='my-4 w-full'>
          <Bargraph data={graphData} xdatakey="month" bardatakey="sales" />
        </div>
        <div className='flex items-center justify-between'>
          <p className='font-bold text-xl'>Reports</p>
          <div className='flex'>
            <ExportCsvButton data={filteredData} filename="report_data.csv" />
            <ExportPdfButton data={filteredData} filename="report_data.pdf" title='Report & Analytics' />
          </div>
        </div>
        <div className='mt-7'>
          <Table data={currentItems} />
          <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
        </div>
      </div>
    </div>
  );
}