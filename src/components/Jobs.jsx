import React from "react";
import DashboardCharts from "./DashboardCharts";
import { Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import JobTable from "./JobTable";

const Jobs = ({ mode }) => {
  const monthsArr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const daysArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDate = new Date();

  const day = daysArr[currentDate.getDay()];
  const todayDate = currentDate.getDate();
  const month = monthsArr[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  const userWidgets = [
    { name: "Total Jobs", numbers: 12, icon: "💼" },
    { name: "This Year Jobs", numbers: 5, icon: "✅" },
    { name: "This Month Jobs", numbers: 2, icon: "💼" },
    { name: "This Week", numbers: 7, icon: "✅" },
  ];

  const notifications = [
    "Your application for Frontend Developer at Techify is under review.",
    "Interview scheduled with DesignHub on 20 Sep.",
    "3 new jobs match your saved preferences.",
  ];


  
const lineData = [
  { month: "Jan", jobs: 20 },
  { month: "Feb", jobs: 35 },
  { month: "Mar", jobs: 50 },
  { month: "Apr", jobs: 30 },
  { month: "May", jobs: 60 },
  { month: "Jun", jobs: 45 },
];

const barData = [
  { dept: "IT", jobs: 120 },
  { dept: "HR", jobs: 90 },
  { dept: "Technical", jobs: 150 },
  { dept: "Finance", jobs: 80 },
  { dept: "Marketing & Sales", jobs: 120 },
  { dept: "Software Development", jobs: 90 },
  { dept: "Riding", jobs: 150 },
  { dept: "Video Editing", jobs: 80 },
];

const pieData = [
  { name: "Admin", value: 200 },
  { name: "Employers", value: 5000 },
];

const COLORS = ["#6851ff", "#ff7f50", "#00c49f", "#ffbb28"];

  return (
    <div className="w-full">
      {/* Header */}
      <div
        className={`flex flex-wrap lg:flex-nowrap gap-4 items-center justify-between p-4 rounded-lg
        ${
          mode === "light"
            ? "bg-white shadow-md text-black"
            : "bg-[#292930] text-white"
        }`}
      >
        <div>
          <h1 className="text-2xl font-bold">Hi Admin 👋</h1>
          {/* <p className="text-sm opacity-80 mt-1">
            Welcome back! You have <span className="font-semibold">3 new job matches</span> today.
          </p> */}
        </div>

        <div className="text-sm font-medium whitespace-nowrap">
          {day}, {todayDate} {month} {year}
        </div>

        <button className="bg-[#6851ff] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#7a65ff] transition-colors">
          View Profile
        </button>
      </div>

      {/* Widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {userWidgets.map((item, i) => (
          <div
            key={i}
            className={`relative rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 transform hover:scale-105 cursor-pointer
              ${
                mode === "light"
                  ? "bg-white/80 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-xl"
                  : "bg-[#292930] backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-white/20"
              }`}
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 text-white text-2xl shadow-lg mb-4">
              {item.icon}
            </div>
            <p className="text-3xl font-extrabold tracking-wide">
              {item.numbers.toLocaleString()}
            </p>
            <p className={`mt-2 text-sm font-medium ${mode === "light" ? "text-black" : "text-white"}`}>
              {item.name}
            </p>
            <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-20 transition duration-300 bg-gradient-to-r from-purple-500 to-indigo-500 blur-2xl"></div>
          </div>
        ))}
      </div>

     

      {/* Activity Chart */}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">Your Activity</h2>
        {/* <DashboardCharts mode={mode} /> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
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
                <h3 className="text-lg font-semibold mb-4">Jobs by Department</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="dept" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="jobs" fill="#ff7f50" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
        
              {/* Donut Chart */}
              {/* <div className={`rounded-2xl p-6 shadow-lg ${mode === "light"? "text-black bg-white/80 " : "text-white bg-[#292930]"}`}>
                <h3 className="text-lg font-semibold mb-4">Jobs Overview</h3>
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
              </div> */}
            </div>
      </div>

      {/* Notifications */}
      {/* <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">Latest Updates</h2>
        <ul className={`space-y-3 ${mode === "light" ? "text-gray-700" : "text-gray-300"}`}>
          {notifications.map((note, i) => (
            <li
              key={i}
              className={`p-4 rounded-lg transition-all duration-200 hover:scale-[1.01] hover:shadow-md
                ${mode === "light" ? "bg-gray-100" : "bg-[#2a2a32] border border-white/10"}`}
            >
              {note}
            </li>
          ))}
        </ul>
      </div> */}

   <div className="mt-10">
       <JobTable mode={mode}/>
   </div>
    </div>
  );
};

export default Jobs;