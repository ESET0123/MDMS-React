import React, { useEffect, useState } from 'react'
import Searchbar from '../../../Components/ui/SearchBar/Searchbar';
import Table from '../../../Components/ui/Table/Table';
import MoreActionButton from '../../../Components/ui/Button/MoreActionButton/MoreActionButton.jsx';
import Pagination from '../../../Components/ui/Pagination/Pagination';
import { usePagination } from '../../../hooks/usePagination';
import { useFilter } from '../../../hooks/useFilter';
import Linegraphcolor from '../../../Components/graph/Linegraph/Linegraphcolor';
import YearNavigatebutton from '../../../Components/ui/Button/YearNavigateButton/Yearnavigatebutton';
import { API_ENDPOINTS, fetchAPI } from '../../../config/api';

export default function Metermanagement() {
    const [meterData, setMeterData] = useState([]);
    const [colorgraphdata, setColorgraphdata] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMeterManagementData = async () => {
            try {
                setLoading(true);
                
                // Fetch both meter data and graph data concurrently
                const [meterResponse, graphResponse] = await Promise.all([
                    fetchAPI(API_ENDPOINTS.meterManagementENT),
                    fetchAPI(API_ENDPOINTS.colorGraphData)
                ]);
                
                setMeterData(meterResponse);
                setColorgraphdata(graphResponse);
                setError(null);
            } catch (err) {
                console.error('Failed to fetch meter management data:', err);
                setError('Failed to load meter management data');
            } finally {
                setLoading(false);
            }
        };

        fetchMeterManagementData();
    }, []);

    const { searchTerm, setSearchTerm, selectedColumn, setSelectedColumn, filteredData, searchableColumns } = useFilter(meterData);
    const { currentItems, totalPages, currentPage, setCurrentPage } = usePagination('filteredData', filteredData, 10);

    const viewPayActions = {
        title: 'More Actions',
        render: () => <MoreActionButton />,
    };

    if (loading) {
        return (
            <div className='flex items-center justify-center h-64'>
                <p className='text-xl'>Loading meter management data...</p>
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
                    <YearNavigatebutton />
                </div>
                <Linegraphcolor data={colorgraphdata} xAxisKey='location' yAxisKey='value' />
            </div>
        </div>
    )
}