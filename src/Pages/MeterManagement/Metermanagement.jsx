import React from 'react'
import Addzone from '../../Components/PopUps/AddZone/Addzone'
import Moreaction from '../../Components/PopUps/MoreAction/Moreaction'

export default function Metermanagement() {
  return (
    <div>
      Meter Management
    <div className='w-2/4 justify-center justify-self-center'>
      <Addzone />
      <Moreaction/>
    </div>
    </div>
  )
}
