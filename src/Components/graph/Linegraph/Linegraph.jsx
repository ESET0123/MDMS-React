import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';

export default function Linegraph({ 
  graphdata = [
    {month: "January", sales: 4000, expenses: 2400},
    {month: "February", sales: 3000, expenses: 2600},
    {month: "March", sales: 2000, expenses: 2700},
    {month: "April", sales: 2500, expenses: 2100},
    {month: "May", sales: 3000, expenses: 2900},
    {month: "June", sales: 3500, expenses: 2800},
    {month: "July", sales: 4500, expenses: 3100},
    {month: "August", sales: 4200, expenses: 3000},
    {month: "September", sales: 3800, expenses: 2500},
    {month: "October", sales: 5000, expenses: 3200},
    {month: "November", sales: 5500, expenses: 3500},
    {month: "December", sales: 6000, expenses: 4000}
  ], 
  xaxisdatakey = 'month', 
  lineConfig = [
    { dataKey: 'sales', color: '#a855f7', fillcolor: '#a855f7' }
  ]
}) {
    const isDarkMode = document.documentElement.classList.contains('dark');

    const CustomTooltip = ({ active, payload }) => {
      if (active && payload && payload.length) {
        return (
          <div className="bg-white px-3 py-2 rounded shadow-lg border border-gray-200">
            <p className="text-sm font-semibold text-gray-800">{payload[0].payload[xaxisdatakey]}</p>
            <p className="text-sm" style={{ color: payload[0].color }}>{payload[0].value}</p>
          </div>
        );
      }
      return null;
    };

    return (
        <div className='bg-zinc-50 dark:bg-zinc-900 flex w-full justify-center p-8'>
            <div className='w-full max-w-4xl'>
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart 
                        data={graphdata}
                        margin={{ top: 20, right: 40, left: 0, bottom: 20 }}
                    >
                        <CartesianGrid 
                          vertical={false}
                          stroke="#e5e7eb"
                          strokeDasharray="0"
                          verticalCoordinatesGenerator={(props) => {
                            const { width, offset } = props;
                            const { left, right } = offset;
                            const availableWidth = width - left - right;
                            const count = graphdata.length;
                            const gap = availableWidth / count;
                            
                            const coordinates = [];
                            for (let i = 1; i < count; i++) {
                              coordinates.push(left + gap * i);
                            }
                            return coordinates;
                          }}
                        />
                        <XAxis 
                            dataKey={xaxisdatakey} 
                            axisLine={false}
                            tickLine={false}
                            tick={false}
                            padding={{ left: 30, right: 30 }}
                        />
                        <YAxis 
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9ca3af', fontSize: 12 }}
                            domain={[0, 'auto']}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        {lineConfig.map((line, index) => (
                            <Line
                                key={index}
                                type="linear"
                                dataKey={line.dataKey}
                                stroke={line.color}
                                strokeWidth={2}
                                fill={line.fillcolor}
                                dot={{ fill: line.color, strokeWidth: 2, r: 4, stroke: '#fff' }}
                                activeDot={{ r: 6, fill: line.color, stroke: '#fff', strokeWidth: 2 }}
                            />
                        ))}
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}