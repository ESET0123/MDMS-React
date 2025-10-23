import React from 'react'
import { useSelector } from 'react-redux';
import Linegraph from '../../../Components/graph/Linegraph/Linegraph'
import Bargraph from '../../../Components/graph/Bargraph/Bargraph'
import Searchbar from '../../../Components/ui/SearchBar/Searchbar';
import Quickbutton from '../../../Components/ui/Button/QuickButton/Quickbutton'
import Table from '../../../Components/ui/Table/Table';
import Pagination from '../../../Components/ui/Pagination/Pagination';
import { usePagination } from '../../../hooks/usePagination';

import { MdOutlineFileUpload } from "react-icons/md";


export default function Reportanalytics() {

  const reportAnalyticsData = useSelector(state => state.data?.reportAnalyticsData || []);
  const { currentItems, totalPages, currentPage, setCurrentPage } = usePagination('reportAnalyticsData', reportAnalyticsData, 10);

  return (
    <div>
      <div>
        <p className='font-bold text-xl'> Reports and Analytics</p>
        <p className='text-xl'> Trends of energy usage over time.</p>
        <Linegraph/>
      </div>
      <div>
        <p>Compare Zone consumption</p>
        <div className='flex justify-between'>
          <Searchbar/>

        </div>
        <div className='my-4'>
          <Bargraph />
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
