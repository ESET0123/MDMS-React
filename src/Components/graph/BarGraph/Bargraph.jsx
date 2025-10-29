import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer  } from 'recharts';

export default function Bargraph({data, xdatakey, bardatakey}) {
	return (
		<div>
			<ResponsiveContainer width="100%" height={300}>

			<BarChart data={data}>
				<CartesianGrid vertical={false} strokeDasharray="3 3"  />
				<XAxis dataKey={xdatakey} strokeDasharray="3 3" />
				<YAxis strokeDasharray="3 3" />
				{/* <YAxis orientation="left" yAxisId="left" />
				<YAxis orientation="right" yAxisId="right" /> */}
				<Tooltip />
				<Legend />
				<Bar dataKey={bardatakey} fill="#8884d8" background={{ fill: "rgba(203, 220, 235, 0.5)" }}  radius={50} />
			</BarChart>
			</ResponsiveContainer>
		</div>
	)
}
