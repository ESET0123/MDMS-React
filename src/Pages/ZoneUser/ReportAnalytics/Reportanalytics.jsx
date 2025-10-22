import React from 'react'
import Linegraph from '../../../Components/graph/Linegraph/Linegraph'
import Bargraph from '../../../Components/graph/Bargraph/Bargraph'
import Searchbar from '../../../Components/ui/SearchBar/Searchbar';
import Quickbutton from '../../../Components/ui/Button/QuickButton/Quickbutton'
import Table from '../../../Components/ui/Table/Table';

import { MdOutlineFileUpload } from "react-icons/md";


export default function Reportanalytics() {

  const paginatedData = [
    {
      date: '2025-09-01',
      reading: 1540,
      difference: 40,
      notes: 'Standard usage this month.',
    },
    {
      date: '2025-08-01',
      reading: 1500,
      difference: 55,
      notes: 'Higher usage due to summer.',
    },
    {
      date: '2025-07-01',
      reading: 1445,
      difference: 45,
      notes: 'Average consumption.',
    },
    {
      date: '2025-06-01',
      reading: 1400,
      difference: 50,
      notes: 'Increased AC usage.',
    },
    {
      date: '2025-05-01',
      reading: 1350,
      difference: 40,
      notes: 'Normal usage.',
    },
    {
      date: '2025-04-01',
      reading: 1310,
      difference: 35,
      notes: 'Lower usage in spring.',
    },
  ]
  return (
    <div>
      <div>
        <p className='font-bold text-xl'> Reports and Analytics</p>
        <p className='text-xl'> Trends of energy usage over time.</p>
        <Linegraph/>
      </div>
      <div>
        <p>Compare Zone consumption</p>
        <div className='flex justify-between'>
          <Searchbar/>

        </div>
        <div className='my-4'>
          <Bargraph />
        </div>
        <div className='flex items-center justify-between'>
          <p className='font-bold text-xl'>Reports</p>
          <div className='flex'>
                <Quickbutton iconname={<MdOutlineFileUpload />} tag="Export as CSV"/>
                <Quickbutton iconname={<MdOutlineFileUpload />} tag="Export as PDF"/>
          </div>
        </div>
        <div className='mt-7'>
        <Table data={paginatedData} />
        {/* add pagination */}
      </div>
      </div>
    </div>
  )
}
