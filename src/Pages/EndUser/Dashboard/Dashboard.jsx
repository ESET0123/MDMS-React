import React from 'react'
import Dashboardcard from '../../../Components/Cards/DashboardCard/Dashboardcard'
import Quickbutton from '../../../Components/ui/Button/QuickButton/Quickbutton'

import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";

import Graphheader from '../../../Components/GraphHeader/Graphheader';
import Linegraph from '../../../Components/graph/Linegraph/Linegraph';

export default function Dashboard() {
  return (
    <div className='p-2 h-full '>
        <div >
            <p className='text-2xl font-bold my-4'>Welcome, xyz</p>
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
            <Dashboardcard icon={<FaRegClock size="2rem" />}  heading="256kWh" description="Current Consumption"/>
            <Dashboardcard icon={<FaRegClock size="2rem" />}  heading="Rs. 1230 Due on 12 Oct" description="This Month's Bill"/>
            <Dashboardcard icon={<FaRegClock size="2rem" />}  heading="Rs. 120 Pending" description="Outstanding Balance"/>
            <Dashboardcard icon={<FaRegClock size="2rem" />}  heading="Paid Rs. 1200 on 10 Sep" description="Last Payment"/>
            </div>
        </div>
        <div>
            <div>
                <Graphheader title="Electricity Consumption Overview"/>
            </div>
            <div>
                <Linegraph/>
            </div>
        </div>
        <div>
            <div>
                <p className='font-bold text-xl'>Quick Actions</p>
            </div>
            <div className='flex'>
                <Quickbutton iconname={<IoIosAddCircleOutline />} tag="Pay Bill"/>
                <Quickbutton iconname={<IoIosSettings />} tag="View Bill History"/>
                <Quickbutton iconname={<IoIosSettings />} tag="View Detailed Usage"/>
                <Quickbutton iconname={<IoIosSettings />} tag="Manage Notification" />
            </div>
        </div>
    </div>
  )
}
