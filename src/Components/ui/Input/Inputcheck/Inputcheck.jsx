import React from 'react'

export default function Inputcheck(props) {
  return (
    <div className='justify-self-start items-center flex'>
        <input className='m-2' type="checkbox" name="optionName" value="optionValue"/>
        <p className='text-xl'>{props.title}</p>
    </div>
  )
}
