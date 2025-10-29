import React from 'react';
import { ComposedChart, Bar, Line, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell, Tooltip } from 'recharts';

export default function BagGraph2({ 
  data = [
    { name: 'Active', value: 85, color: '#8979FF' },
    { name: 'De-Activated', value: 50, color: '#ef4444' }
  ],
  xdatakey = 'name',
  ydatakey = 'value',
  colorkey = 'color',
  legendLabel = '2025'
}) {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white px-3 py-2 rounded shadow-lg border border-gray-200">
          <p className="text-sm font-semibold text-gray-800">{payload[0].payload[xdatakey]}</p>
          <p className="text-sm text-indigo-600">{payload[0].value}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white dark:bg-zinc-900 gap-2 rounded-2xl shadow-xl p-8 h-fit">
      <ResponsiveContainer width="100%" height={450}>
        <ComposedChart
          data={data}
          barSize={150}
          margin={{ top: 20, right: 40, left: 0, bottom: 20 }}
        >
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b9ff5" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#8b9ff5" stopOpacity={0.1} />
              </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#e5e7eb"
            vertical={true}
            horizontal={true}
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
            dataKey={xdatakey}
            tick={{ fill: '#6b7280', fontSize: 14, fontWeight: 500 }}
            axisLine={{ stroke: '#d1d5db' }}
            tickLine={false}
            dy={10}
          />

          <YAxis
            tick={{ fill: '#6b7280', fontSize: 14 }}
            axisLine={{ stroke: '#d1d5db' }}
            tickLine={false}
            domain={[0, 100]}
            ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
          />

          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }} />

          {/* Shaded area under the curve */}
          <Area
            type="monotone"
            dataKey={ydatakey}
            fill="url(#lineGradient)"
            stroke="none"
          />

          {/* Curved Line connecting bar tops */}
          <Line
            type="monotone"
            dataKey={ydatakey}
            stroke="#c7d2fe"
            strokeWidth={3}
            dot={false}
            activeDot={false}
            strokeLinecap="round"
          />

          {/* Bars with rounded tops */}
          <Bar
            dataKey={ydatakey}
            radius={[100, 100, 100, 100]}
            maxBarSize={150}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry[colorkey]}
              />
            ))}
          </Bar>
        </ComposedChart>
      </ResponsiveContainer>

      <div className="mt-6 flex justify-center items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-purple-500"></div>
        <span className="text-sm text-gray-400">{legendLabel}</span>
      </div>
    </div>
  );
}