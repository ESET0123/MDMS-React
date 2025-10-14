import React from 'react'
import Linechart from '../../Components/chart/LineChart/Linechart'
import Graphheader from '../../Components/GraphHeader/Graphheader'

export default function Meterdata() {
  return (
    <div className='w-5/6'>
        <div>
            <div>
              <Graphheader title="Select Date Range"/>  
            </div>
            <div >
              <Linechart/>

            </div>
        </div>
        <div>
        </div>
    </div>
  )
}
