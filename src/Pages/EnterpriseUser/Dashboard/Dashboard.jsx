import React, { useState, useEffect } from 'react';
import Dashboardcard from '../../../Components/Cards/DashboardCard/Dashboardcard';
import { FaRegClock } from "react-icons/fa6";
import { TbActivityHeartbeat } from "react-icons/tb";
import { PiWarningOctagon } from "react-icons/pi";
import { IoIosTrendingUp } from "react-icons/io";
import LeafletMap from '../../../Components/Map/LeafletMap';
import AlertCard from '../../../Components/Cards/AlertCard/AlertCard';
import { API_ENDPOINTS, fetchAPI } from '../../../config/api';

export default function Dashboard() {
  const [alertData, setAlertData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlertData = async () => {
      try {
        setLoading(true);
        const data = await fetchAPI(API_ENDPOINTS.alerts);
        setAlertData(data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch alerts:', err);
        setError('Failed to load alerts');
      } finally {
        setLoading(false);
      }
    };

    fetchAlertData();
  }, []);

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
        <p className='text-2xl font-bold my-4'>Enterprise Dashboard</p>
      </div>

      <div className=' flex justify-self-center'>
        <div className='flex flex-wrap gap-4 justify-start'>
          <Dashboardcard heading="256kWh" description="Total zones" icon={<FaRegClock size="2rem" />} />
          <Dashboardcard heading="55" description="Total meters" icon={<IoIosTrendingUp size="2rem" />} />
          <Dashboardcard heading="26" description="Critical Alerts" icon={<PiWarningOctagon color='red' size="2rem" />} />
          <Dashboardcard heading="26 %" description="Average Consumption per Zone" icon={<TbActivityHeartbeat size="2rem" />} />
        </div>
      </div>
      <div className='flex flex-row gap-4 m h-[500px]'>
        <div className='w-1/2 h-full'>
          <LeafletMap />
        </div>
        <div className='w-1/2 h-full'>
          <AlertCard alerts={alertData} />
        </div>
      </div>
    </div>
  )
}