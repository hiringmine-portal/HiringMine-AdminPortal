import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  BarChart,
  Bar,
} from "recharts";
import React from "react";

const lineData = [
  { month: "Jan", jobs: 20 },
  { month: "Feb", jobs: 35 },
  { month: "Mar", jobs: 50 },
  { month: "Apr", jobs: 30 },
  { month: "May", jobs: 60 },
  { month: "Jun", jobs: 45 },
];

const barData = [
  { dept: "IT", candidates: 120 },
  { dept: "HR", candidates: 90 },
  { dept: "Sales", candidates: 150 },
  { dept: "Finance", candidates: 80 },
];

const pieData = [
  { name: "Employers", value: 200 },
  { name: "Candidates", value: 5000 },
];

const COLORS = ["#6851ff", "#ff7f50", "#00c49f", "#ffbb28"];

export default function DashboardCharts({mode}) {
    console.log(mode)
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
      {/* Line Chart */}
      <div className={`rounded-2xl p-6 shadow-lg ${mode === "light"? "text-black bg-white/80 " : "text-white bg-[#292930]"}`}>
        <h3 className="text-lg font-semibold mb-4">Jobs Posted Trend</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="jobs" stroke="#6851ff" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className={`rounded-2xl p-6 shadow-lg ${mode === "light"? "text-black bg-white/80 " : "text-white bg-[#292930]"}`}>
        <h3 className="text-lg font-semibold mb-4">Candidates by Department</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="dept" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="candidates" fill="#ff7f50" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Donut Chart */}
      <div className={`rounded-2xl p-6 shadow-lg ${mode === "light"? "text-black bg-white/80 " : "text-white bg-[#292930]"}`}>
        <h3 className="text-lg font-semibold mb-4">Users Overview</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
