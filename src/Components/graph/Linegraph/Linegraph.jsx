import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

export default function Linegraph({ graphdata, xaxisdatakey, lineConfig }) {
    const isDarkMode = document.documentElement.classList.contains('dark');
    const chartStroke = isDarkMode ? 'white' : 'black';

    return (
        <div className='bg-zinc-50 dark:bg-zinc-900 flex w-full justify-center m-2 p-10'>
            <LineChart width={500} height={300} data={graphdata}>
                <CartesianGrid vertical={false} stroke={isDarkMode ? '#4a4a4a' : '#ccc'} />
                <XAxis dataKey={xaxisdatakey} stroke={chartStroke} />
                <YAxis axisLine={false} stroke={chartStroke} />
                <Tooltip
                    contentStyle={{
                        backgroundColor: isDarkMode ? '#333' : '#fff',
                        borderColor: isDarkMode ? '#555' : '#ccc'
                    }}
                    labelStyle={{ color: isDarkMode ? 'white' : 'black' }}
                />
                <Legend />
                {lineConfig.map((line, index) => (
                    <Line
                        key={index}
                        type="linear"
                        dataKey={line.dataKey}
                        stroke={line.color}
                        fill={line.fillcolor}
                        activeDot={{ r: 8 }}
                    />
                ))}
            </LineChart>
        </div>
    );
}



// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

// export default function Linegraph() {
//    const data = [
//     {month: "January", sales: 4000, expenses: 2400},
//     {month: "February", sales: 3000, expenses: 2600},
//     {month: "March", sales: 2000, expenses: 2700},
//     {month: "April", sales: 2500, expenses: 2100},
//     {month: "May", sales: 3000, expenses: 2900},
//     {month: "June", sales: 3500, expenses: 2800},
//     {month: "July", sales: 4500, expenses: 3100},
//     {month: "August", sales: 4200, expenses: 3000},
//     {month: "September", sales: 3800, expenses: 2500},
//     {month: "October", sales: 5000, expenses: 3200},
//     {month: "November", sales: 5500, expenses: 3500},
//     {month: "December", sales: 6000, expenses: 4000}
// ];


//     return (
//         <div className='bg-zinc-50 flex w-full justify-center m-2 p-10 '>
//             <LineChart width={500} height={300} data={data}>
//                 <CartesianGrid vertical={false} />
//                 {/* <XAxis  dataKey="month" /> */}
//                 <YAxis axisLine={false}/>
//                 {/* <Tooltip /> */}
//                 {/* <Legend /> */}
//                 <Line type="linear" stroke="black" dataKey="sales" fill="black" />
//                 {/* <Line type="linear" dataKey="expenses" fill="#52ccf0ff" /> */}
//             </LineChart>
//         </div>
//     );
// }
