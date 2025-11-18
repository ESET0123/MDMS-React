import React, { useEffect, useState } from 'react'
import Dashboardcard from '../../../Components/Cards/DashboardCard/Dashboardcard'
import Quickbutton from '../../../Components/ui/Button/QuickButton/Quickbutton'
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";
import Graphheader from '../../../Components/GraphHeader/Graphheader';
import Linegraph from '../../../Components/graph/Linegraph/Linegraph';
import useDateFilter from '../../../hooks/useDateFilter';
import { useAuth } from '../../../context/AuthContext';
import { API_ENDPOINTS, fetchAPI } from '../../../config/api';

export default function Dashboard() {
    const [graphData, setGraphData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useAuth();
    
    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                setLoading(true);
                const data = await fetchAPI(API_ENDPOINTS.dashboardGraphData);
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
        { dataKey: 'value', color: 'black', fillcolor: 'black' },
    ];

    const { filteredData, selectedRange, setSelectedRange } = useDateFilter(
        graphData,
        'date',
        'day'
    );

    const userName = user?.name || "Guest";

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
            <div >
                <p className='text-2xl font-bold my-4'>Welcome, {userName}</p>
            </div>
            <div className='flex justify-between'>
                <div>
                    <p>As of Oct 5, 2025</p>
                    <p>Zone: Bangalore North</p>
                </div>
                <div>
                    <p className='justify-self-center font-bold'>Last synced at 10:45 AM</p>
                    <p className='justify-self-center'>Data Source: Smart Meter #1023</p>
                </div>
            </div>
            <div className=' flex justify-self-center'>
                <div className='flex flex-wrap gap-4 justify-start'>
                    <Dashboardcard icon={<FaRegClock size="2rem" />} heading="256kWh" description="Current Consumption" />
                    <Dashboardcard icon={<FaRegClock size="2rem" />} heading="Rs. 1230 Due on 12 Oct" description="This Month's Bill" />
                    <Dashboardcard icon={<FaRegClock size="2rem" />} heading="Rs. 120 Pending" description="Outstanding Balance" />
                    <Dashboardcard icon={<FaRegClock size="2rem" />} heading="Paid Rs. 1200 on 10 Sep" description="Last Payment" />
                </div>
            </div>
            <div className='pr-12'>
                <div>
                    <Graphheader title="Electricity Consumption Overview"
                        buttons={['Day', 'Week', 'Month']}
                        selected={selectedRange}
                        onSelect={setSelectedRange} />
                </div>
                <div>
                    <Linegraph
                        graphdata={filteredData}
                        xaxisdatakey="value"
                        lineConfig={lineConfiguration}
                    />
                </div>
            </div>
            <div className='mt-6'>
                <div>
                    <p className='font-bold text-xl'>Quick Actions</p>
                </div>
                <div className='flex flex-wrap'>
                    <Quickbutton iconname={<IoIosAddCircleOutline />} tag="Pay Bill" />
                    <Quickbutton iconname={<IoIosSettings />} tag="View Bill History" />
                    <Quickbutton iconname={<IoIosSettings />} tag="View Detailed Usage" />
                    <Quickbutton iconname={<IoIosSettings />} tag="Manage Notification" />
                </div>
            </div>
        </div>
    )
}