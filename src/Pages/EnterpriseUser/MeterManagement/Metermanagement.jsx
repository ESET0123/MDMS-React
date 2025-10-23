import React from 'react'
import Searchbar from '../../../Components/ui/SearchBar/Searchbar'
import Table from '../../../Components/ui/Table/Table'
import Linegraph from '../../../Components/graph/Linegraph/Linegraph';

export default function Metermanagement() {
    const meterData = [
        {
        meterId: 'M-001',
        zone: 'Zone A',
        owner: 'John Doe',
        status: 'Active',
        lastReading: '256.4 kWh',
        },
        {
        meterId: 'M-002',
        zone: 'Zone B',
        owner: 'Jane Smith',
        status: 'Inactive',
        lastReading: '12.0 kWh',
        },
        {
        meterId: 'M-003',
        zone: 'Zone C',
        owner: 'Alex Johnson',
        status: 'Active',
        lastReading: '501.9 kWh',
        },
        {
        meterId: 'M-004',
        zone: 'Zone A',
        owner: 'Emily Davis',
        status: 'Active',
        lastReading: '345.1 kWh',
        },
        {
        meterId: 'M-005',
        zone: 'Zone B',
        owner: 'Michael Brown',
        status: 'Maintenance',
        lastReading: '189.7 kWh',
        },
    ];
  return (
    <div>
        <p className='font-bold text-xl'>Global Meter Management</p>
        <div className='my-4'>
            <Searchbar/>
        </div>
        <div>
            <Table data={meterData} />
            {/* Add pagination */}
        </div>
        <div>
            <p className='my-2'>Each zones Trend of energy usage over time.</p>
            <Linegraph />
        </div>
    </div>
  )
}
