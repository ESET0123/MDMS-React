import React from 'react'
import { useSelector } from 'react-redux';
import Linegraph from '../../../components/graph/Linegraph/Linegraph'
import Searchbar from '../../../components/ui/SearchBar/Searchbar';
import Quickbutton from '../../../components/ui/Button/QuickButton/Quickbutton'
import Table from '../../../components/ui/table/Table';
import Pagination from '../../../components/ui/Pagination/Pagination';
import { usePagination } from '../../../hooks/usePagination';
import { useFilter } from '../../../hooks/useFilter';

import { MdOutlineFileUpload } from "react-icons/md";
import YearNavigatebutton from '../../../components/ui/Button/YearNavigateButton/Yearnavigatebutton';
import Bargraph from '../../../Components/graph/BarGraph/Bargraph';


export default function Reportanalytics() {

  // const data = [
  //   { month: "January", sales: 20000 },
  //   { month: "February", sales: 24000 },
  //   { month: "March", sales: 23000 },
  //   { month: "April", sales: 29000 }
  // ]
  const data = useSelector((state) => state.data.linegraphdata) || [];
        
      const lineConfiguration = [
          { dataKey: 'sales', color: '#D05ACF' , fillcolor: 'white'},
      ];

  const reportAnalyticsData = useSelector(state => state.data?.reportAnalyticsData || []);
  const { searchTerm, setSearchTerm, selectedColumn, setSelectedColumn, filteredData, searchableColumns } = useFilter(reportAnalyticsData);
  const { currentItems, totalPages, currentPage, setCurrentPage } = usePagination('filteredData', filteredData, 10);

  return (
    <div className='w-3/4'>
      <div>
        <p className='font-bold text-xl'> Reports and Analytics</p>
        <p className='text-l'> Trends of energy usage over time.</p>
        <Linegraph graphdata={data} xaxisdatakey="month" lineConfig={lineConfiguration} />
      </div>
      <div>
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
          <Bargraph data={data} xdatakey="month" bardatakey="sales" />
        </div>
        <div className='flex items-center justify-between'>
          <p className='font-bold text-xl'>Reports</p>
          <div className='flex'>
                <Quickbutton iconname={<MdOutlineFileUpload />} tag="Export as CSV"/>
                <Quickbutton iconname={<MdOutlineFileUpload />} tag="Export as PDF"/>
          </div>
        </div>
        <div className='mt-7'>
          <Table data={currentItems} />
          <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
          
        </div>
      </div>
    </div>
  )
}
