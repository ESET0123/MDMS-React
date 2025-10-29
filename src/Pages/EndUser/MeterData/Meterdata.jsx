import React from 'react';
import { useSelector } from 'react-redux';

import Graphheader from '../../../Components/GraphHeader/Graphheader';
import Linegraph from '../../../Components/graph/Linegraph/Linegraph';
import Table from '../../../Components/ui/Table/Table';
import useDateFilter from '../../../hooks/useDateFilter';

export default function MeterData() {

  const billData = useSelector((state) => state.data.datedbillData) || [];

  const data = useSelector((state) => state.data.linegraphdata) || [];

  const lineConfiguration = [
    { dataKey: 'sales', color: '#D28561', fillcolor: 'white' },
    { dataKey: 'expenses', color: '#D05ACF', fillcolor: 'white' },
  ];

  const { filteredData, selectedRange, setSelectedRange } = useDateFilter(
    billData,
    'date',
    'day'
  );

  return (
    <div className='w-5/6'>
      <div>
        <div>
          <Graphheader title="Select date range"
            buttons={['Day', 'Week', 'Month']}
            selected={selectedRange}
            onSelect={setSelectedRange}
          />
        </div>
        <div className=''>
          {/* <Linegraph data={filteredData} /> */}
          <Linegraph
            graphdata={data}
            xaxisdatakey="month"
            lineConfig={lineConfiguration}
          />
          <Table data={filteredData} />
        </div>
      </div>
    </div>
  );
}
