import React from 'react';

export default function Inputcheck(props) {
  return (
    <div className='justify-self-start items-center flex'>
      <input
        // Pass the name, value, checked state, and onChange handler as props
        className='m-2'
        type="checkbox"
        name={props.name}
        checked={props.checked} // The checkbox's current state
        onChange={props.onChange} // The function to handle state changes
      />
      {props.title && <p className='text-xl'>{props.title}</p>}
    </div>
  );
}
