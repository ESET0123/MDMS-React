import React, { useState } from 'react';
import Table from '../../../Components/ui/Table/Table';
import Quickbutton from '../../../Components/ui/Button/QuickButton/Quickbutton'
import Moreaction from '../../../Components/PopUps/MoreAction/Moreaction';

import { TbActivityHeartbeat } from "react-icons/tb";
import { PiWarningOctagon } from "react-icons/pi";
import { IoIosTrendingUp } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { IoMdMore } from 'react-icons/io';

export default function Metermanagement() {
  const [showMoreAction, setShowMoreAction] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

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

  const handleMoreActionClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({ top: rect.top + rect.height, left: rect.left });
    setShowMoreAction((prev) => !prev);
  };

  const closeMoreAction = () => {
    setShowMoreAction(false);
  };

  const viewPayActions = {
    title: 'More Actions',
    render: (item) => (
      <div className="space-x-2 flex justify-center relative">
        <button
          onClick={handleMoreActionClick}
          className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white rounded-full p-1 transition-colors duration-200"
        >
          <IoMdMore />
        </button>
      </div>
    ),
  };

  return (
    <div>
      <div>
        <div className="w-5/6">
        <div>
          <p className="font-bold">Meter Management</p>
        </div>
        <div className="mt-7">
          <Table data={meterData} actionsColumn={viewPayActions} />
        </div>
      </div>
      {showMoreAction && (
        <div style={{ top: position.top, left: position.left }} className="fixed z-10" >
          <Moreaction onClose={closeMoreAction} />
        </div>
      )}

      </div>
      <div className='mt-5'>
        <div>
          <p className='font-bold'>Bulk operations</p>
        </div>
        <div>
            <div className='flex'>
                <Quickbutton msg="clicked" iconname={<IoIosAddCircleOutline />} tag="Add meter"/>
                <Quickbutton msg="clicked" iconname={<IoIosSettings />} tag="Generate Report"/>
            </div>
        </div>
      </div>
    </div>
  );
}
