import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';

export default function Linegraph({graphdata , xaxisdatakey,lineConfig}) {

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white px-3 py-2 rounded shadow-lg border border-gray-200 dark:border-gray-800 dark:bg-gray-500 ">
                    <p className="text-sm font-semibold text-gray-800">{payload[0].payload[xaxisdatakey]}</p>
                    <p className="text-sm" style={{ color: payload[0].color }}>{payload[0].value}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className='bg-zinc-50 dark:bg-gray-700 flex w-full justify-center p-8'>
            <div className='w-full max-w-4xl'>
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart
                        data={graphdata}
                        margin={{ top: 20, right: 40, left: 0, bottom: 20 }}
                    >
                        <CartesianGrid
                            vertical={false}
                            stroke="#79716B"
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
                                dot={{ fill: line.color, strokeWidth: 2, r: 4 }}
                                activeDot={{ r: 6, fill: line.color, stroke: '#fff', strokeWidth: 2 }}
                            />
                        ))}
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}