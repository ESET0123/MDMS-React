import React from 'react';
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';

const BagGraph2 = () => {
  const data = [
    { name: 'Active', value: 85, color: '#8979FF' },
    { name: 'De-Activated', value: 50, color: '#ef4444' }
  ];

  return (
    <div className="bg-white gap-2 rounded-2xl shadow-xl p-8 h-fit">
      <ResponsiveContainer width="60%" height={550}>
        <ComposedChart
          data={data}
          barSize={150}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#e5e7eb"
            vertical={true}  // Enable vertical grid lines
            horizontal={true} // Keep horizontal lines
          />

          <XAxis
            dataKey="name"
            tick={{ fill: '#6b7280', fontSize: 14, fontWeight: 500 }}
            axisLine={{ stroke: '#d1d5db' }}
            tickLine={false}
          />

          <YAxis
            tick={{ fill: '#6b7280', fontSize: 14 }}
            axisLine={{ stroke: '#d1d5db' }}
            tickLine={false}
            domain={[0, 100]}
            ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
          />

          {/* Curved Line connecting bar tops */}
          <Line
            type="natural"
            dataKey="value"
            stroke="#c7d2fe"
            strokeWidth={3}
            dot={false}
            activeDot={false}
            strokeLinecap="round"
          />

          {/* Bars with rounded tops */}
          <Bar
            dataKey="value"
            radius={[100, 100, 100, 100]}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
              />
            ))}
          </Bar>
        </ComposedChart>
      </ResponsiveContainer>

      <div className="mt-6 flex justify-center items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-purple-500"></div>
        <span className="text-sm text-gray-400">2025</span>
      </div>
    </div>
  );
};

export default BagGraph2;