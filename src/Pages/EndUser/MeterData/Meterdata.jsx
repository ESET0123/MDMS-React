import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Graphheader from '../../../Components/GraphHeader/Graphheader'
import Linegraph from '../../../Components/graph/Linegraph/Linegraph'
import Table from '../../../Components/ui/Table/Table'

export default function Meterdata() {

  const billData = useSelector((state) => state.data.billDataWithDetails);
  console.log(billData);
  
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
          <Table data={billData}/>
        </div>
    </div>
  )
}