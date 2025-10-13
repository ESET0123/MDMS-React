import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const data = [
	{ month: "January", sales: 20000 },
	{ month: "February", sales: 24000 },
	{ month: "March", sales: 23000 },
	{ month: "April", sales: 29000 }
]

export default function BarCharts() {
	return (
		<div>
			<BarChart width={500} height={300} data={data}>
				<CartesianGrid strokeDashrray="3 3" />
				<XAxis dataKey="month" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey="sales" fill="#3b0fefff" />
			</BarChart>
		</div>
	)
}
