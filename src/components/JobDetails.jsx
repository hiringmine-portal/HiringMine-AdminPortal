import React, { useState } from "react";
import WorkIcon from "@mui/icons-material/Work";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import { useParams } from "react-router-dom";

const JobDetails = ({ mode = "light" }) => {
  const [activeTab, setActiveTab] = useState("general");

   const { id } = useParams();
   console.log(id)
   
  const containerStyle =
    mode === "light"
      ? "bg-white shadow-md"
      : "bg-[#292930] border border-white/10";

  const textStyle = mode === "light" ? "text-gray-900" : "text-gray-100";
  const subTextStyle = mode === "light" ? "text-gray-600" : "text-gray-400";

  return (
    <div
      className={`p-6 min-h-screen ${
        mode === "light" ? "bg-gray-100" : "bg-[#1c1c24]"
      }`}
    >
      {/* Header Tabs */}
      <div
        className={`${containerStyle} rounded-xl p-2 mb-6 flex items-center justify-between`}
      >
        <div className="flex gap-2">
          {[
            { key: "general", label: "General Information", icon: WorkIcon },
            { key: "applyUsers", label: "Apply Users", icon: GroupIcon },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === tab.key
                  ? "bg-indigo-600 text-white shadow"
                  : `${textStyle} hover:bg-indigo-50 dark:hover:bg-indigo-900`
              }`}
            >
              <tab.icon fontSize="small" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tabs Content */}
      {activeTab === "general" ? (
        <div className="grid grid-cols-12 gap-6">
          {/* Left Section */}
          <div
            className={`col-span-12 lg:col-span-8 ${containerStyle} rounded-xl p-6`}
          >
            <h3 className={`text-xl font-semibold mb-6 ${textStyle}`}>
              Job Overview
            </h3>

            {/* Job Info */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="flex items-center gap-3">
                <WorkIcon className="text-indigo-500" />
                <div>
                  <p className={`text-sm ${subTextStyle}`}>Job Name</p>
                  <p className={`font-medium ${textStyle}`}>
                    React JS Developer
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <AttachMoneyIcon className="text-green-500" />
                <div>
                  <p className={`text-sm ${subTextStyle}`}>Salary</p>
                  <p className={`font-medium ${textStyle}`}>$1000</p>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="flex items-center gap-12 mb-8">
              <div>
                <p className={`text-sm mb-2 ${subTextStyle}`}>Approval</p>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-12 h-6 bg-gray-400 rounded-full peer peer-checked:bg-green-500 transition"></div>
                </label>
              </div>
              <div>
                <p className={`text-sm mb-2 ${subTextStyle}`}>Block</p>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-12 h-6 bg-gray-400 rounded-full peer peer-checked:bg-red-500 transition"></div>
                </label>
              </div>
            </div>

            {/* Job Description */}
            <div>
              <p className={`text-sm mb-2 ${subTextStyle}`}>Job Description</p>
              <div
                className={`p-4 rounded-lg border text-sm leading-relaxed ${
                  mode === "light"
                    ? "bg-gray-50 border-gray-200 text-gray-700"
                    : "bg-[#1f1f29] border-white/10 text-gray-300"
                }`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id
                augue non quam porta tristique. Nulla facilisi. Fusce ac elit
                vitae purus vulputate blandit.
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex gap-4">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition shadow">
                Approve Job
              </button>
              <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition shadow">
                Hide Job
              </button>
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition shadow">
                Delete Job
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div
            className={`col-span-12 lg:col-span-4 ${containerStyle} rounded-xl p-6`}
          >
            <h3 className={`text-xl font-semibold mb-6 ${textStyle}`}>
              User Details
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <PersonIcon className="text-indigo-500" />
                <div>
                  <p className={`text-sm ${subTextStyle}`}>Profile</p>
                  <p className={`font-medium ${textStyle}`}>John Doe</p>
                </div>
              </div>
              <div>
                <p className={`text-sm ${subTextStyle}`}>Email</p>
                <p className={`font-medium ${textStyle}`}>johndoe@gmail.com</p>
              </div>
              <div>
                <p className={`text-sm ${subTextStyle}`}>Total Jobs Posted</p>
                <p className={`font-medium ${textStyle}`}>12</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Apply Users Tab
        <div className={`${containerStyle} rounded-xl p-6`}>
          <h3 className={`text-xl font-semibold mb-6 ${textStyle}`}>
            Applied Users
          </h3>
          <ul className="space-y-3">
            {[
              { name: "Jane Smith", email: "janesmith@gmail.com" },
              { name: "Alex Johnson", email: "alexj@gmail.com" },
              { name: "Michael Lee", email: "mlee@gmail.com" },
            ].map((user, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center p-3 rounded-lg border hover:bg-indigo-50 dark:hover:bg-indigo-900 transition"
              >
                <div>
                  <p className={`font-medium ${textStyle}`}>{user.name}</p>
                  <p className={`text-sm ${subTextStyle}`}>{user.email}</p>
                </div>
                <button className="px-3 py-1 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  View Profile
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default JobDetails;