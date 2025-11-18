import React, { useEffect, useState } from 'react'
import Graphheader from '../../../Components/GraphHeader/Graphheader';
import Linegraph from '../../../Components/graph/Linegraph/Linegraph';
import Table from '../../../Components/ui/Table/Table';
import useDateFilter from '../../../hooks/useDateFilter';
import { API_ENDPOINTS, fetchAPI } from '../../../config/api';

export default function MeterData() {
  const [graphData, setGraphData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeterData = async () => {
      try {
        setLoading(true);
        
        // Fetch both graph and table data concurrently
        const [graphResponse, tableResponse] = await Promise.all([
          fetchAPI(API_ENDPOINTS.lineGraphData),
          fetchAPI(API_ENDPOINTS.datedBillData)
        ]);
        
        setGraphData(graphResponse);
        setTableData(tableResponse);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch meter data:', err);
        setError('Failed to load meter data');
      } finally {
        setLoading(false);
      }
    };

    fetchMeterData();
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

  if (loading) {
    return (
      <div className='w-5/6 flex items-center justify-center h-64'>
        <p className='text-xl'>Loading meter data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className='w-5/6 flex items-center justify-center h-64'>
        <p className='text-xl text-red-600'>{error}</p>
      </div>
    );
  }

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