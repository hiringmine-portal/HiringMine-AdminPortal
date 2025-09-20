import React from "react";
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import UserTable from "./UserTable";

const UserDetail = ({ mode }) => {
  // dummy user
  const user = {
    name: "Muhammad Hasan",
    email: "hasan@example.com",
    role: "Job Seeker",
    joinDate: "12 Jan 2024",
    avatar: "https://i.pravatar.cc/150?img=32",
  };

  // widgets data
  const userStats = [
    { name: "Total Users", value: 5023, icon: "👤" },
    { name: "Last Year Users", value: 2000, icon: "👤" },
    { name: "Last Month Users", value: 786, icon: "👤" },
    { name: "This Week Users", value: 100, icon: "👤" },
  ];
//   📝 ⭐ ✅ 💌

  // line chart data
  const monthlyUsers = [
    { month: "Jan", applied: 20 },
    { month: "Feb", applied: 13 },
    { month: "Mar", applied: 15 },
    { month: "Apr", applied: 40 },
    { month: "May", applied: 20 },
    { month: "Jun", applied: 196 },
    { month: "Aug", applied: 16 },
    { month: "Sep", applied: 6 },
    { month: "Oct", applied: 26 },
    { month: "Nov", applied: 39 },
    { month: "Dec", applied: 96 },
  ];

  // pie chart data
  const statusData = [
    { name: "Candidates", value: 12, color: "#fbbf24" },
    { name: "Employers", value: 3, color: "#34d399" },
    // { name: "Rejected", value: 2, color: "#f87171" },
    // { name: "Hired", value: 1, color: "#fbbf24" },
  ];

  // timeline activities
  const activities = [
    "Applied for Frontend Developer at Techify (15 Sep)",
    "Interview Scheduled with DesignHub (20 Sep)",
    "Profile Updated (10 Sep)",
  ];

  // applications table
  const users = [
    { username: "Hasan", role: "Admin", date: "15 Sep 2025", status: "Under Review" },
    { username: "Ahsan", role: "Candidate", date: "15 Sep 2025", status: "Under Review" },
    { username: "Jaffar", role: "Admin", date: "15 Sep 2025", status: "Under Review" },

  ];

  return (
    <div className="w-full space-y-8">
      {/* User Info */}
      <div className={`flex flex-wrap lg:flex-nowrap gap-4 items-center justify-between p-4 rounded-lg
        ${
          mode === "light"
            ? "bg-white shadow-md text-black"
            : "bg-[#292930] text-white"
        }`}>
        <h2 className="text-2xl font-bold">User Details</h2>
        {/* <img src={user.avatar} alt="avatar" className="w-20 h-20 rounded-full object-cover" /> */}
        {/* <div>
          
        </div> */}
      </div>


{/* Stats Widgets */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {userStats.map((stat, i) => (
    <div
      key={i}
      className={`relative p-6 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-300 transform hover:scale-105 cursor-pointer
        ${
          mode === "light"
            ? "bg-white/80 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-xl"
            : "bg-[#292930] backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-white/20"
        }`}
    >
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 text-white text-2xl shadow-lg mb-4">
        {stat.icon}
      </div>
      <p className="text-3xl font-extrabold tracking-wide">
        {stat.value}
      </p>
      <p
        className={`mt-2 text-sm font-medium ${
          mode === "light" ? "text-black" : "text-white"
        }`}
      >
        {stat.name}
      </p>

      {/* Overlay hover gradient effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-20 transition duration-300 bg-gradient-to-r from-purple-500 to-indigo-500 blur-2xl"></div>
    </div>
  ))}
</div>

      {/* Charts */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"> */}
        {/* Line Chart */}
        {/* <div className={`p-6 rounded-xl ${mode === "light" ? "bg-white shadow-md" : "bg-[#292930] border border-white/10"}`}>
          <h3 className="font-bold mb-4">User Registration Over Time</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={monthlyUsers}>
              <XAxis dataKey="month" stroke={mode === "light" ? "#333" : "#ccc"} />
              <YAxis stroke={mode === "light" ? "#333" : "#ccc"} />
              <Tooltip />
              <Line type="monotone" dataKey="applied" stroke="#6851ff" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div> */}

        {/* Donut Chart */}
        {/* <div className={`p-6 rounded-xl ${mode === "light" ? "bg-white shadow-md" : "bg-[#292930] border border-white/10"}`}>
          <h3 className="font-bold mb-4">User Status</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={statusData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5}>
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div> */}
      {/* </div> */}

      
      {/* Applications Table */}
      {/* <div className={`p-6 rounded-xl overflow-x-auto ${mode === "light" ? "bg-white shadow-md" : "bg-[#292930] border border-white/10"}`}>
        <h3 className="font-bold mb-4">Recent Account Registrations</h3>
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className={`${mode === "light" ? "bg-gray-100" : "bg-[#2a2a32]"}`}>
              <th className="p-3">UserName</th>
              <th className="p-3">Role</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={i} className="border-t">
                <td className="p-3">{u.username}</td>
                <td className="p-3">{u.role}</td>
                <td className="p-3">{u.date}</td>
                <td className="p-3">{u.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}


      <UserTable mode={mode}/>
    </div>
  );
};

export default UserDetail;








