import React, { useEffect, useState } from 'react'
import Graphheader from '../../../Components/GraphHeader/Graphheader';
import Linegraph from '../../../Components/graph/Linegraph/Linegraph';
import Table from '../../../Components/ui/Table/Table';
import useDateFilter from '../../../hooks/useDateFilter';

export default function MeterData() {
  const [graphData, setGraphData] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/linegraphdata')
      .then(res => res.json())
      .then(data => setGraphData(data))
      .catch(err => console.log(err));

    fetch('http://localhost:8000/datedbillData')
      .then(res => res.json())
      .then(data => setTableData(data))
      .catch(err => console.log(err));
  }, []);

  const lineConfiguration = [
    { dataKey: 'sales', color: '#D28561', fillcolor: 'white' },
    { dataKey: 'expenses', color: '#D05ACF', fillcolor: 'white' },
  ];

  const { filteredData, selectedRange, setSelectedRange } = useDateFilter(
    graphData,
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
            graphdata={filteredData}
            xaxisdatakey="month"
            lineConfig={lineConfiguration}
          />
          </div>
          <div className='mt-4'>
          <Table data={tableData} />
        </div>
      </div>
    </div>
  );
}
