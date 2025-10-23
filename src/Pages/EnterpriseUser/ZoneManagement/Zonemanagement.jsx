import React from 'react'
import Quickbutton from '../../../Components/ui/Button/QuickButton/Quickbutton'
import { MdOutlineAddCircleOutline } from "react-icons/md";
import Table from '../../../Components/ui/Table/Table';

export default function Zonemanagement() {
  const zoneData = [
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
      <div className='flex items-center justify-between'>
        <p className='font-bold text-xl'>Zone Management</p>
        <Quickbutton iconname={<MdOutlineAddCircleOutline />} tag="Add Zone" />
      </div>
      <Table data={zoneData} />
      {/* Add Pagination and more action*/}
    </div>
  )
}
