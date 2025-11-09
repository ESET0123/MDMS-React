import React from 'react'
import Inputrange from '../../ui/Input/InputRange/Inputrange'
import Labelinputtext from '../../ui/input/Labelinputtext/Labelinputtext'
import Submitbutton from '../../ui/Button/SubmitButton/Submitbutton'

export default function Settingtabzone() {
  return (
    <div>
      <div className='my-2 '>
        <p className='font-bold'>Alert Thresholds</p>
        <p>Set consumption limits that trigger automatic alerts for meters in your zone.</p>
      </div>
      
      <div className='flex flex-wrap'>
        <Inputrange title="High Consumption Threshold (kWh)" minvalue={0} maxvalue={1000} />
        <Inputrange title="Low Consumption Threshold (kWh)" minvalue={0} maxvalue={1000} />
        <Inputrange title="Average Reading Frequency (hours)" minvalue={0} maxvalue={10} />

        <div className='w-full m-4 max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg'>
          <h3 className="text-gray-800 text-sm font-normal mb-6">
            Inactive Meter Duration (days)
          </h3>
          <Labelinputtext label="Days" placeholder="e.g., 30" type="number" />
        </div>
      </div>
      
      <div className='mt-2'>
        <Submitbutton title="submit and continue" />
      </div>
    </div>
  )
}
