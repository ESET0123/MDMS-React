import React from 'react'
import Inputrange from '../../ui/Input/InputRange/Inputrange'
import Labelinputtext from '../../ui/Input/Labelinputtext/Labelinputtext'
import Submitbutton from '../../ui/Button/SubmitButton/Submitbutton'

export default function Settingtab() {
  return (
    <div>
      <div className='flex flex-wrap'>
        <Inputrange title="High Consumption Threshold (kWh)" minvalue={0} maxvalue={1000} />
        <Inputrange title="Low Consumption Threshold (kWh)" minvalue={0} maxvalue={1000} />
        <Inputrange title="Average Reading Frequency (hours)" minvalue={0} maxvalue={10} />

        <div className='pt-4 px-4 w-3/6 shadow-lg rounded-xl'>
          <p>Inactive Meter Duration (days)</p>
          <Labelinputtext label="day" placeholder="Sunday" />
        </div>
      </div>
      <div className='mt-2'>
        <Submitbutton title="submit and continue" />
      </div>
    </div>
  )
}
