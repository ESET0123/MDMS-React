import React from 'react';
import { useSelector } from 'react-redux';
import Searchbar from '../../../components/ui/SearchBar/Searchbar';
import Table from '../../../components/ui/table/Table';
import MoreActionButton from '../../../Components/ui/Button/MoreActionButton/moreactionbutton';
import Pagination from '../../../components/ui/Pagination/Pagination';
import { usePagination } from '../../../hooks/usePagination';
import { useFilter } from '../../../hooks/useFilter';
import Linegraphcolor from '../../../components/graph/Linegraph/Linegraphcolor';
import YearNavigatebutton from '../../../components/ui/Button/YearNavigateButton/Yearnavigatebutton';

export default function Metermanagement() {
    const meterData = useSelector(state => state.data?.metermanagementENT || []);
    
    const { searchTerm, setSearchTerm, selectedColumn, setSelectedColumn, filteredData, searchableColumns } = useFilter(meterData);

    const { currentItems, totalPages, currentPage, setCurrentPage } = usePagination('filteredData', filteredData, 10);
    
    const viewPayActions = {
        title: 'More Actions',
        render: () => <MoreActionButton />,
    };
      
  return (
    <div>
        <p className='font-bold text-xl'>Global Meter Management</p>
        <div className='my-4'>
             <Searchbar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                selectedColumn={selectedColumn}
                onColumnChange={setSelectedColumn}
                columns={searchableColumns}
                placeholder="Search meters..."
            />
        </div>
        <div>
            <Table data={currentItems} actionsColumn={viewPayActions} />
            <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
         
        </div>

        <div className='w-3/4'>
            <div className='flex items-center justify-between'>
                <p className='my-2'>Each zones Trend of energy usage over time.</p>
                < YearNavigatebutton />
            </div>
            <Linegraphcolor />
        </div>
    </div>
  )
}
