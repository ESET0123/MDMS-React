import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Dashboardcard from '../../../components/Cards/DashboardCard/Dashboardcard';

import { TbActivityHeartbeat } from "react-icons/tb";
import { PiWarningOctagon } from "react-icons/pi";
import { IoIosTrendingUp } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";

import Quickbutton from '../../../components/ui/Button/QuickButton/Quickbutton'
import Graphheader from '../../../components/GraphHeader/Graphheader';
import Linegraph from '../../../components/graph/Linegraph/Linegraph';
import useDateFilter from '../../../hooks/useDateFilter';


// Enterprise user
export default function Dashboard() {
    
    const billData = useSelector((state) => state.data.datedbillData) || [] ;
    // console.log(billData,21555);

    const data = useSelector((state) => state.data.linegraphdata) || [];
      
    const lineConfiguration = [
        { dataKey: 'sales', color: '#D05ACF' , fillcolor: 'white'},
    ];

        // useEffect(() => {

        // console.log("billData updated:", billData);
        // }, [billData]); 
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
                <Linegraph 
                    graphdata={data} 
                    xaxisdatakey="month" 
                    lineConfig={lineConfiguration} 
                />
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
