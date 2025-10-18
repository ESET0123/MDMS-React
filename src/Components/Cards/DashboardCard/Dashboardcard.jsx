import React from 'react';
// Remove the specific icon import from here
// import { FaRegClock } from "react-icons/fa6"; 

export default function Dashboardcard(props) {
  return (
    <div className='w-80 h-500 item-center justify-center border border-zinc-300 py-8 px-14 m-4 rounded-xl'>
        <div className='justify-self-center py-4'>
            {props.icon} {/* Use the icon prop here */}
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
