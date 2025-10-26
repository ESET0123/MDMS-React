import React from 'react';
import { useSelector } from 'react-redux';
import GraphHeader from '../../../components/graphHeader/GraphHeader';
import LineGraph from '../../../components/graph/lineGraph/LineGraph';
import Table from '../../../components/ui/table/Table';
import useDateFilter from '../../../hooks/useDateFilter';

export default function MeterData() {

  const billData = useSelector((state) => state.data.datedbillData) || [];

  
  // const billData = [
  //   { id: 1, date: '2025-10-26', usage: 150, cost: 45 },
  //   { id: 2, date: '2025-10-25', usage: 120, cost: 36 },
  //   { id: 3, date: '2025-10-24', usage: 180, cost: 54 },
  //   { id: 4, date: '2025-10-20', usage: 140, cost: 42 },
  //   { id: 5, date: '2025-10-15', usage: 160, cost: 48 },
  //   { id: 6, date: '2025-10-01', usage: 170, cost: 51 },
  //   { id: 7, date: '2025-09-25', usage: 130, cost: 39 },
  // ];

  const { filteredData, selectedRange, setSelectedRange } = useDateFilter(
    billData,
    'date',
    'day'
  );

  return (
    <div className='w-5/6'>
      <div>
          
          <div>
            <GraphHeader title="Select date range"
              buttons={['Day', 'Week', 'Month']}
              selected={selectedRange}
              onSelect={setSelectedRange}
            />
          </div>
        <div className=''>
          <LineGraph data={filteredData} />
          <Table data={filteredData} />
        </div>
      </div>
    </div>
  );
}
