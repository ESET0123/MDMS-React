import React, { useEffect, useState } from 'react'
import Dashboardcard from '../../../Components/Cards/DashboardCard/Dashboardcard';
import { TbActivityHeartbeat } from "react-icons/tb";
import { PiWarningOctagon } from "react-icons/pi";
import { IoIosTrendingUp } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import Quickbutton from '../../../Components/ui/Button/QuickButton/Quickbutton'
import Graphheader from '../../../Components/GraphHeader/Graphheader';
import Linegraph from '../../../Components/graph/Linegraph/Linegraph';
import useDateFilter from '../../../hooks/useDateFilter';
import { API_ENDPOINTS, fetchAPI } from '../../../config/api';

export default function Dashboard() {
    const [graphData, setGraphData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                setLoading(true);
                const data = await fetchAPI(API_ENDPOINTS.lineGraphData);
                setGraphData(data);
                setError(null);
            } catch (err) {
                console.error('Failed to fetch dashboard data:', err);
                setError('Failed to load dashboard data');
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    const lineConfiguration = [
        { dataKey: 'sales', color: '#D05ACF', fillcolor: 'white' },
    ];

    const { filteredData, selectedRange, setSelectedRange } = useDateFilter(
        graphData,
        'date',
        'week'
    );

    if (loading) {
        return (
            <div className='p-2 h-full flex items-center justify-center'>
                <p className='text-xl'>Loading dashboard...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className='p-2 h-full flex items-center justify-center'>
                <p className='text-xl text-red-600'>{error}</p>
            </div>
        );
    }

    return (
        <div className='p-2 h-full '>
            <div>
                <div >
                    <p className='text-2xl font-bold my-4'>Zone Dashboard</p>
                </div>

                <div className=' flex justify-self-center'>
                    <div className='flex flex-wrap gap-4 justify-start'>
                        <Dashboardcard heading="256" description="Active meters" icon={<TbActivityHeartbeat size="2rem" />} />
                        <Dashboardcard heading="55 %" description="Avg usage" icon={<IoIosTrendingUp size="2rem" />} />
                        <Dashboardcard heading="26" description="Pending Alerts" icon={<PiWarningOctagon size="2rem" />} />
                    </div>
                </div>
            </div>
            <div className='w-5/6'>
                <div>
                    <Graphheader title="Analytics Chart"
                        buttons={['Week', 'Month']}
                        selected={selectedRange}
                        onSelect={setSelectedRange} />
                </div>
                <div>
                    <Linegraph
                        graphdata={filteredData}
                        xaxisdatakey="month"
                        lineConfig={lineConfiguration}
                    />
                </div>
            </div>
            <div>
                <div className='flex'>
                    <Quickbutton iconname={<IoIosAddCircleOutline />} tag="Add meter" />
                    <Quickbutton iconname={<IoIosSettings />} tag="Generate Report" />
                </div>
            </div>
        </div>
    )
}