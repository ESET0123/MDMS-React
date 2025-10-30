import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';

export default function Bargraph({ data, xdatakey, bardatakey }) {
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
		<div className='bg-white dark:bg-gray-700 flex w-full justify-center p-8'>
			<div className='w-full max-w-4xl'>
				<ResponsiveContainer width="100%" height={400}>
					<BarChart
						data={data}
						margin={{ top: 20, right: 40, left: 0, bottom: 20 }}
					>
						<CartesianGrid
							vertical={true}
							horizontal={true}
							stroke="#e5e7eb"
							strokeDasharray="3 3"
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
							axisLine={false}
							tickLine={false}
							tick={{ fill: '#6b7280', fontSize: 13 }}
							dy={10}
						/>
						<YAxis
							axisLine={false}
							tickLine={false}
							tick={{ fill: '#9ca3af', fontSize: 12 }}
							domain={[0, 'auto']}
						/>
						<Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }} />
						<Bar
							dataKey={bardatakey}
							fill="#8b9ff5"
							background={{ fill: "rgba(139, 159, 245, 0.1)" }}
							radius={[100, 100, 100, 100]}
							maxBarSize={80}
						>
							{data.map((entry, index) => (
								<Cell key={`cell-${index}`} fill="#8b9ff5" />
							))}
						</Bar>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}