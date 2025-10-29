import React from 'react';

export default function Dashboardcard(props) {
  return (
    <div className='w-80 h-500 item-center justify-center border border-zinc-300 py-8 px-14 m-4 rounded-xl'>
      <div className='justify-self-center py-4'>
        {props.icon}
      </div>
      <div>
        <h1 className='justify-self-center size-lg font-bold'>{props.heading}</h1>
      </div>
      <div>
        <p className='justify-self-center text-zinc-500'>{props.description}</p>
      </div>
    </div>
  );
}
