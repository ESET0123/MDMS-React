import React from 'react'
import Graphheader from '../../../Components/GraphHeader/Graphheader'
import Linegraph from '../../../Components/graph/Linegraph/Linegraph'
import Table from '../../../Components/ui/Table/Table'

export default function Meterdata() {

  const billDataWithDetails = [
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
];


  return (
    <div className='w-5/6'>
        <div>
            <div>
              <Graphheader title="Select Date Range"/>  
            </div>
            <div >
              <Linegraph />
            </div>
        </div>
        <div className='mt-7'>
          <Table data={billDataWithDetails}/>
        </div>
    </div>
  )
}
