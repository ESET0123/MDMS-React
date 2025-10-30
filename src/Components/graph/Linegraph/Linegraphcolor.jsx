import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

export default function Linegraphcolor({ data = [], xAxisKey, yAxisKey }) {

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white px-3 py-2 rounded shadow-lg border border-gray-200">
          <p className="text-sm font-semibold text-gray-800">{payload[0].payload[xAxisKey]}</p>
          <p className="text-sm text-indigo-600">{payload[0].value}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className='bg-white dark:bg-zinc-900 flex w-full justify-center p-8'>
      <div className='w-full max-w-4xl'>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            data={data}
            margin={{ top: 0, right: 40, left: 0, bottom: 40 }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b9ff5" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#8b9ff5" stopOpacity={0.1} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={true}
              stroke="#e5e7eb"
              verticalCoordinatesGenerator={(props) => {
                const { width, offset } = props;
                const { left, right } = offset;
                const availableWidth = width - left - right;
                const count = data.length;
                const gap = availableWidth / count;

                const coordinates = [];
                for (let i = 1; i < count; i++) {
                  coordinates.push(left + gap * i);
                }
                return coordinates;
              }}
            />

            <XAxis
              dataKey={xAxisKey}
              axisLine={false}
              tickLine={false}
              padding={{ left: 40, right: 40 }}
              tick={{ fill: '#6b7280', fontSize: 12 }}
              dy={10}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6b7280', fontSize: 12 }}
              domain={[0, 'auto']}
              // ticks={[0, 20, 40, 60, 80, 100]}
            />

            <Tooltip content={<CustomTooltip />} />

            <Area
              type="monotone"
              dataKey={yAxisKey}
              stroke="#8b9ff5"
              strokeWidth={2}
              fill="url(#colorValue)"
              dot={{ fill: '#8b9ff5', strokeWidth: 2, r: 4, stroke: '#fff' }}
              activeDot={{ r: 6, fill: '#8b9ff5', stroke: '#fff', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>

        <div className='flex justify-center items-center mt-4 gap-2'>
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 rounded-full' style={{ backgroundColor: '#8b9ff5' }}></div>
            <span className='text-sm text-gray-600'>2025</span>
          </div>
        </div>
      </div>
    </div>
  );
}