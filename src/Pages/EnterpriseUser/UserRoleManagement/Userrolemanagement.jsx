import React from 'react'
import Linegraph from '../../../Components/graph/Linegraph/Linegraph'
import Quickbutton from '../../../Components/ui/Button/QuickButton/Quickbutton'
import Table from '../../../Components/ui/Table/Table';
import { MdOutlineFileUpload } from "react-icons/md";

export default function Userrolemanagement() {
  const user = [
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
        <p className='font-bold text-xl'>User and Role Management</p>
        <div className='flex'>
              <Quickbutton iconname={<MdOutlineFileUpload />} tag="Export as CSV"/>
              <Quickbutton iconname={<MdOutlineFileUpload />} tag="Invite User"/>
        </div>
      </div>
        <Table data={user} />
        <div className='my-4'>
          <p>Comparison between Active and De-Active users on each year</p>
          {/* year slider */}
        </div>
        <Linegraph />
    </div>
  )
}
