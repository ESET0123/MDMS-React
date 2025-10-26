import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

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


// Enterprise user
export default function Dashboard() {
    
    const billData = useSelector((state) => state.data.datedbillData) || [] ;
    console.log(billData,21555);

//     const billData = [
//     { id: 1, date: '2025-10-26', usage: 150, cost: 45 },
//     { id: 2, date: '2025-10-25', usage: 120, cost: 36 },
//     { id: 3, date: '2025-10-24', usage: 180, cost: 54 },
//     { id: 4, date: '2025-10-20', usage: 140, cost: 42 },
//     { id: 5, date: '2025-10-15', usage: 160, cost: 48 },
//     { id: 6, date: '2025-10-01', usage: 170, cost: 51 },
//     { id: 7, date: '2025-09-25', usage: 130, cost: 39 },
//   ];
useEffect(() => {

console.log("billData updated:", billData);
}, [billData]); 
    const { filteredData, selectedRange, setSelectedRange } = useDateFilter(
        billData,
        'date',
        'day'
        );

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
              onSelect={setSelectedRange}/>
            </div>
            <div>
                <Linegraph/>
            </div>
        </div>
        <div>
            <div className='flex'>
                <Quickbutton iconname={<IoIosAddCircleOutline />} tag="Add meter"/>
                <Quickbutton iconname={<IoIosSettings />} tag="Generate Report"/>
            </div>
        </div>
    </div>
  )
}
