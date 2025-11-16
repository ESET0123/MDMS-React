import React, { useEffect, useState } from 'react'
import Searchbar from '../../../Components/ui/SearchBar/Searchbar';
import Table from '../../../Components/ui/Table/Table';
import MoreActionButton from '../../../Components/ui/Button/MoreActionButton/MoreActionButton.jsx';
import Pagination from '../../../Components/ui/Pagination/Pagination';
import { usePagination } from '../../../hooks/usePagination';
import { useFilter } from '../../../hooks/useFilter';
import Linegraphcolor from '../../../Components/graph/Linegraph/Linegraphcolor';
import YearNavigatebutton from '../../../Components/ui/Button/YearNavigateButton/Yearnavigatebutton';

export default function Metermanagement() {
    const [meterData, setMeterData] = useState([]);
    const [colorgraphdata, setColorgraphdata] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/metermanagementENT')
            .then(res => res.json())
            .then(data => setMeterData(data))
            .catch(err => console.log(err));

        fetch('http://localhost:8000/colorgraphdata')
            .then(res => res.json())
            .then(data => setColorgraphdata(data))
            .catch(err => console.log(err));
    }, []);

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
                <Linegraphcolor data={colorgraphdata} xAxisKey='location' yAxisKey='value' />
            </div>
        </div>
    )
}
