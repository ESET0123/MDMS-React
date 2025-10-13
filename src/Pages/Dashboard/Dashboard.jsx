import React from 'react'
import Dashboardcard from '../../Components/Cards/DashboardCard/Dashboardcard'
import Quickbutton from '../../Components/ui/Button/QuickButton/Quickbutton'

import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";

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
        <div className='flex justify-self-center'>
            <div className=' pt-4 flex flex-wrap'>
            <Dashboardcard heading="256kWh" description="Current Consumption"/>
            <Dashboardcard heading="256kWh" description="Current Consumption"/>
            <Dashboardcard heading="256kWh" description="Current Consumption"/>
            <Dashboardcard heading="256kWh" description="Current Consumption"/>
            </div>
        </div>

        <div className='flex'>
            <Quickbutton iconname={<IoIosAddCircleOutline />} tag="Add meter"/>
            <Quickbutton iconname={<IoIosSettings />} tag="Generate Report"/>
        </div>
    </div>
  )
}
