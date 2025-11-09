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

export default function Reportanalytics() {
  const [graphData, setGraphData] = useState([]);
  const [reportAnalyticsData, setReportAnalyticsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/linegraphdata')
      .then(res => res.json())
      .then(data => setGraphData(data))
      .catch(err => console.log(err));

    fetch('http://localhost:8000/reportAnalyticsData')
      .then(res => res.json())
      .then(data => setReportAnalyticsData(data))
      .catch(err => console.log(err));
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