import React from 'react';
import Dashboardcard from '../../../Components/Cards/DashboardCard/Dashboardcard';

import { TbActivityHeartbeat } from "react-icons/tb";
import { PiWarningOctagon } from "react-icons/pi";
import { IoIosTrendingUp } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";

import Quickbutton from '../../../Components/ui/Button/QuickButton/Quickbutton'
import Graphheader from '../../../Components/GraphHeader/Graphheader';
import Linegraph from '../../../Components/graph/Linegraph/Linegraph';

// Enterprise user
export default function Dashboard() {
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
                <Graphheader title="Analytics Chart"/>
            </div>
            <div>
                <Linegraph/>
            </div>
        </div>
        <div>
            <div className='flex'>
                <Quickbutton msg="clicked" iconname={<IoIosAddCircleOutline />} tag="Add meter"/>
                <Quickbutton msg="clicked" iconname={<IoIosSettings />} tag="Generate Report"/>
            </div>
        </div>
    </div>
  )
}
