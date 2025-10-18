import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
export default function Linegraph() {
    const data = [
        {month: "January", sales: 4000, expenses: 2400},
        {month: "February", sales: 3000, expenses: 2600},
        {month: "March", sales: 2000, expenses: 2700},
        {month: "April", sales: 2500, expenses: 2100},
        {month: "May", sales: 3000, expenses: 2900}
    ];
  return (
    <div className='bg-zinc-50 flex w-full justify-center m-2 p-10 '>
      <LineChart width={500} height={300} data = {data}>
            <CartesianGrid strokeDasharrays = "3 3"/>
            <XAxis dataKey="month"/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            <Line type="monotone" dataKey="sales" fill="#f55814ff"/>
            <Line type="monotone" dataKey="expenses" fill="#52ccf0ff"/>
      </LineChart>
    </div>
  )
}