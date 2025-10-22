import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const data = [
	{ month: "January", sales: 20000 },
	{ month: "February", sales: 24000 },
	{ month: "March", sales: 23000 },
	{ month: "April", sales: 29000 }
]

export default function Bargraph() {
	return (
		<div>
			<BarChart width={500} height={300} data={data}>
				<CartesianGrid vertical={false} strokeDasharray="3 3"  />
				<XAxis dataKey="month" strokeDasharray="3 3" />
				<YAxis strokeDasharray="3 3" />
				{/* <YAxis orientation="left" yAxisId="left" />
				<YAxis orientation="right" yAxisId="right" /> */}
				<Tooltip />
				{/* <Legend /> */}
				<Bar dataKey="sales" fill="#8884d8" background={{ fill: "rgba(203, 220, 235, 0.5)" }}  radius={50} />
			</BarChart>
		</div>
	)
}
