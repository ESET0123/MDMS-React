import React from 'react';
import Dashboardcard from '../../../Components/Cards/DashboardCard/Dashboardcard';
import { FaRegClock } from "react-icons/fa6";
import { TbActivityHeartbeat } from "react-icons/tb";
import { PiWarningOctagon } from "react-icons/pi";
import { IoIosTrendingUp } from "react-icons/io";

// Enterprise user
export default function Dashboard() {
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
    </div>
  )
}
