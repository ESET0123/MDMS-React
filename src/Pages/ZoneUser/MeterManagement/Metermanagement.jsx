import React, { useEffect, useState } from 'react'
import { usePagination } from '../../../hooks/usePagination';
import Table from '../../../Components/ui/Table/Table';
import Quickbutton from '../../../Components/ui/Button/QuickButton/Quickbutton'
import MoreActionButton from '../../../Components/ui/Button/MoreActionButton/MoreActionButton.jsx';
import Pagination from '../../../Components/ui/Pagination/Pagination';
import { MdOutlineFileUpload, MdOutlineFileDownload } from "react-icons/md";
import { MdBlockFlipped } from "react-icons/md";
import { API_ENDPOINTS, fetchAPI } from '../../../config/api';

export default function Metermanagement() {
    const [tableData, setTableData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMeterData = async () => {
            try {
                setLoading(true);
                const data = await fetchAPI(API_ENDPOINTS.meterData);
                setTableData(data);
                setError(null);
            } catch (err) {
                console.error('Failed to fetch meter data:', err);
                setError('Failed to load meter data');
            } finally {
                setLoading(false);
            }
        };

        fetchMeterData();
    }, []);

    const { currentItems, totalPages, currentPage, setCurrentPage } = usePagination('meterData', tableData, 10);

    const viewPayActions = {
        title: 'More Actions',
        render: () => <MoreActionButton />,
    };

    if (loading) {
        return (
            <div className="w-5/6 flex items-center justify-center h-64">
                <p className='text-xl'>Loading meter data...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-5/6 flex items-center justify-center h-64">
                <p className='text-xl text-red-600'>{error}</p>
            </div>
        );
    }

    return (
        <div className="w-5/6">
            <div>
                <div >
                    <div>
                        <p className="font-bold">Meter Management</p>
                    </div>
                    <div className="mt-7">
                        <Table data={currentItems} actionsColumn={viewPayActions} />
                        <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <div>
                    <p className='font-bold'>Bulk operations</p>
                </div>
                <div>
                    <div className='flex gap-6'>
                        <Quickbutton iconname={<MdOutlineFileDownload />} tag="Import CSV" />
                        <Quickbutton iconname={<MdOutlineFileUpload />} tag="Export CSV" />
                        <Quickbutton iconname={<MdBlockFlipped />} tag="De-Activate meters" />
                    </div>
                </div>
            </div>
        </div>
    );
}