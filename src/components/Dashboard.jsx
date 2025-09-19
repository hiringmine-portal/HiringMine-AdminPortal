import React from "react";
import DashboardCharts from "./DashboardCharts";

const Dashboard = ({ mode }) => {
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

  const tabs = [
    { name: "Today" },
    { name: "This Week" },
    { name: "This Month" },
    { name: "This Year" },
  ];

  const widgets = [
    { name: "Total Jobs Posted", numbers: 23, icon: "💼" },
    { name: "Employers Registered", numbers: 203, icon: "🏢" },
    { name: "Users Registered", numbers: 5003, icon: "👤" },
    { name: "Applications Submitted", numbers: 323, icon: "📄" },
  ];

  return (
    <div className="w-full">
      {/* Dashboard Topbar */}
      <div
        className={`flex flex-wrap lg:flex-nowrap gap-4 items-center justify-between p-4 rounded-lg
        ${
          mode === "light"
            ? "bg-white shadow-md text-black"
            : "bg-[#292930] text-white"
        }`}
      >
        {/* Title */}
        <h1 className="text-2xl font-bold">Dashboard</h1>

        {/* Tabs */}
        <div className="flex gap-2 flex-wrap">
          {tabs.map((tab, i) => (
            <button
              key={i}
              className={`cursor-pointer px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
              ${
                mode === "light"
                  ? "bg-gray-100 hover:bg-gray-200"
                  : "bg-[#6800ff] hover:bg-gray-700"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Date */}
        <div className="text-sm font-medium whitespace-nowrap">
          {day}, {todayDate} {month} {year}
        </div>

        {/* Report Button */}
        <button className="bg-[#6851ff] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#7a65ff] transition-colors">
          Latest Report
        </button>
      </div>

      {/* Widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {widgets.map((item, i) => (
          <div
            key={i}
            className={`
        relative rounded-2xl p-6 flex flex-col items-center justify-center text-center 
        transition-all duration-300 transform hover:scale-105 cursor-pointer
        ${
          mode === "light"
            ? "bg-white/80 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-xl"
            : "bg-[#292930] backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-white/20"
        }
      `}
          >
            {/* Icon Circle */}
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 text-white text-2xl shadow-lg mb-4">
              {item.icon}
            </div>

            {/* Number */}
            <p className="text-3xl font-extrabold tracking-wide">
              {item.numbers.toLocaleString()}
            </p>

            {/* Title */}
            <p
              className={`mt-2 text-sm font-medium ${
                mode === "light" ? "text-black" : "text-white"
              }`}
            >
              {item.name}
            </p>

            {/* Glow Effect on Hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-20 transition duration-300 bg-gradient-to-r from-purple-500 to-indigo-500 blur-2xl"></div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <DashboardCharts mode={mode} />
    </div>
  );
};

export default Dashboard;
