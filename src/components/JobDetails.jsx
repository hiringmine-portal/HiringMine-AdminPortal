import React, { useState } from "react";
import WorkIcon from "@mui/icons-material/Work";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScheduleIcon from "@mui/icons-material/Schedule";
import BusinessIcon from "@mui/icons-material/Business";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BlockIcon from "@mui/icons-material/Block";
import { useParams } from "react-router-dom";

const JobDetails = ({ mode = "light" }) => {
  const [activeTab, setActiveTab] = useState("general");

  const { id } = useParams();
  console.log(id);

  // Theme styles
  const containerStyle =
    mode === "light"
      ? "bg-white shadow-lg"
      : "bg-[#2a2a35] border border-gray-700";

  const textStyle = mode === "light" ? "text-gray-900" : "text-white";
  const subTextStyle = mode === "light" ? "text-gray-600" : "text-gray-300";
  const cardStyle =
    mode === "light"
      ? "bg-gradient-to-br from-white to-gray-50 border border-gray-100"
      : "bg-gradient-to-br from-[#2a2a35] to-[#24242d] border border-gray-700";

  // Mock data
  const jobData = {
    title: "Senior React JS Developer",
    company: "Tech Innovations Inc.",
    salary: "$85,000 - $100,000",
    location: "San Francisco, CA (Remote)",
    type: "Full-time",
    experience: "Senior Level",
    posted: "2 days ago",
    applications: 24,
    views: 156,
    status: "active",
    description:
      "We are looking for an experienced React JS Developer to join our dynamic team. You will be responsible for developing and implementing user interface components using React.js concepts and workflows such as Redux, Flux, and Webpack.",
    requirements: [
      "5+ years of experience with React.js",
      "Strong proficiency in JavaScript, including DOM manipulation",
      "Experience with popular React.js workflows (Redux, Flux)",
      "Familiarity with RESTful APIs and modern front-end build pipelines",
      "Experience with common front-end development tools",
    ],
    user: {
      name: "John Doe",
      email: "johndoe@techinnovations.com",
      jobsPosted: 12,
      memberSince: "Jan 2023",
      rating: "4.8/5",
    },
  };

  const applicants = [
    {
      name: "Jane Smith",
      email: "janesmith@gmail.com",
      status: "Pending",
      applied: "1 day ago",
      match: "95%",
    },
    {
      name: "Alex Johnson",
      email: "alexj@gmail.com",
      status: "Reviewed",
      applied: "2 days ago",
      match: "87%",
    },
    {
      name: "Michael Lee",
      email: "mlee@gmail.com",
      status: "Interview",
      applied: "3 days ago",
      match: "92%",
    },
    {
      name: "Sarah Wilson",
      email: "sarahw@gmail.com",
      status: "Pending",
      applied: "4 days ago",
      match: "78%",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Reviewed":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Interview":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "Hired":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      default:
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
    }
  };

  return (
    <div
      className={`min-h-screen p-6 ${
        mode === "light" ? "bg-gray-50" : "bg-[#1e1e27]"
      }`}
    >
      {/* Header with Tabs */}
      <div className={`${containerStyle} rounded-2xl p-6 mb-6`}>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
          <div>
            <h1 className={`text-2xl font-bold ${textStyle}`}>
              {jobData.title}
            </h1>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-1">
                <BusinessIcon className="text-indigo-500" fontSize="small" />
                <span className={`text-sm ${subTextStyle}`}>
                  {jobData.company}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <LocationOnIcon className="text-green-500" fontSize="small" />
                <span className={`text-sm ${subTextStyle}`}>
                  {jobData.location}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <ScheduleIcon className="text-purple-500" fontSize="small" />
                <span className={`text-sm ${subTextStyle}`}>
                  Posted {jobData.posted}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-4 lg:mt-0">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                jobData.status === "active"
                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
              }`}
            >
              {jobData.status === "active" ? "Active" : "Inactive"}
            </span>
            <button className="p-2 rounded-lg bg-indigo-100 text-indigo-600 hover:bg-indigo-200 dark:bg-indigo-900 dark:text-indigo-300 dark:hover:bg-indigo-800">
              <EditIcon fontSize="small" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div
          className={`${
            mode === "light" ? "bg-white text-black" : "bg-[#292930] text-white"
          } flex gap-1 p-1   rounded-xl w-fit shadow-2xl`}
        >
          {[
            { key: "general", label: "Job Details", icon: WorkIcon },
            {
              key: "applyUsers",
              label: `Applicants (${applicants.length})`,
              icon: GroupIcon,
            },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === tab.key
                  ? "bg-white text-indigo-600 shadow-sm dark:bg-gray-700 dark:text-indigo-400"
                  : `${textStyle} hover:bg-white/50 dark:hover:bg-gray-700/50`
              }`}
            >
              <tab.icon fontSize="small" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      {activeTab === "general" ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Job Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Overview Card */}
            <div className={`${cardStyle} rounded-2xl p-6`}>
              <h3 className={`text-lg font-semibold mb-4 ${textStyle}`}>
                Job Overview
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className={`${mode === "light" ? "bg-white text-black" :"bg-[#292930] text-white"} flex items-center gap-3 p-3 rounded-lg shadow-md`}>
                  <div className="p-2 bg-indigo-100 rounded-lg dark:bg-indigo-900">
                    <AttachMoneyIcon className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <p className={`text-sm ${subTextStyle}`}>Salary</p>
                    <p className={`font-semibold ${textStyle}`}>
                      {jobData.salary}
                    </p>
                  </div>
                </div>
                <div className={`${mode === "light" ? "bg-white text-black" :"bg-[#292930] text-white"} flex items-center gap-3 p-3 rounded-lg shadow-md`}>
                  <div className="p-2 bg-green-100 rounded-lg dark:bg-green-900">
                    <WorkIcon className="text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className={`text-sm ${subTextStyle}`}>Job Type</p>
                    <p className={`font-semibold ${textStyle}`}>
                      {jobData.type}
                    </p>
                  </div>
                </div>
                <div className={`${mode === "light" ? "bg-white text-black" :"bg-[#292930] text-white"} flex items-center gap-3 p-3 rounded-lg shadow-md`}>
                  <div className="p-2 bg-purple-100 rounded-lg dark:bg-purple-900">
                    <TrendingUpIcon className="text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className={`text-sm ${subTextStyle}`}>Experience</p>
                    <p className={`font-semibold ${textStyle}`}>
                      {jobData.experience}
                    </p>
                  </div>
                </div>
                <div className={`${mode === "light" ? "bg-white text-black" :"bg-[#292930] text-white"} flex items-center gap-3 p-3 rounded-lg shadow-md`}>
                  <div className="p-2 bg-blue-100 rounded-lg dark:bg-blue-900">
                    <GroupIcon className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className={`text-sm ${subTextStyle}`}>Applications</p>
                    <p className={`font-semibold ${textStyle}`}>
                      {jobData.applications}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description Card */}
            <div className={`${cardStyle} rounded-2xl p-6`}>
              <h3 className={`text-lg font-semibold mb-4 ${textStyle}`}>
                Job Description
              </h3>
              <p className={`leading-relaxed mb-6 ${subTextStyle}`}>
                {jobData.description}
              </p>

              <h4 className={`font-semibold mb-3 ${textStyle}`}>
                Requirements:
              </h4>
              <ul className={`space-y-2 ${subTextStyle}`}>
                {jobData.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions Card */}
            <div className={`${cardStyle} rounded-2xl p-6`}>
              <h3 className={`text-lg font-semibold mb-4 ${textStyle}`}>
                Manage Job
              </h3>
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all">
                  <CheckCircleIcon fontSize="small" />
                  Approve Job
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all">
                  <BlockIcon fontSize="small" />
                  Hide Job
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all">
                  <DeleteIcon fontSize="small" />
                  Delete Job
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Employer Card */}
            <div className={`${cardStyle} rounded-2xl p-6`}>
              <h3 className={`text-lg font-semibold mb-4 ${textStyle}`}>
                Employer Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-100 rounded-lg dark:bg-indigo-900">
                    <PersonIcon className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <p className={`text-sm ${subTextStyle}`}>Name</p>
                    <p className={`font-semibold ${textStyle}`}>
                      {jobData.user.name}
                    </p>
                  </div>
                </div>
                <div>
                  <p className={`text-sm ${subTextStyle}`}>Email</p>
                  <p className={`font-semibold ${textStyle}`}>
                    {jobData.user.email}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className={`text-sm ${subTextStyle}`}>Jobs Posted</p>
                    <p className={`font-semibold ${textStyle}`}>
                      {jobData.user.jobsPosted}
                    </p>
                  </div>
                  <div>
                    <p className={`text-sm ${subTextStyle}`}>Member Since</p>
                    <p className={`font-semibold ${textStyle}`}>
                      {jobData.user.memberSince}
                    </p>
                  </div>
                </div>
                <button className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all">
                  View Profile
                </button>
              </div>
            </div>

            {/* Statistics Card */}
            <div className={`${cardStyle} rounded-2xl p-6`}>
              <h3 className={`text-lg font-semibold mb-4 ${textStyle}`}>
                Job Statistics
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className={subTextStyle}>Total Views</span>
                  <span className={`font-semibold ${textStyle}`}>
                    {jobData.views}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={subTextStyle}>Applications</span>
                  <span className={`font-semibold ${textStyle}`}>
                    {jobData.applications}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={subTextStyle}>Match Rate</span>
                  <span className="font-semibold text-green-600">High</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Applicants Tab
        <div className={`${containerStyle} rounded-2xl p-6`}>
          <div className="flex justify-between items-center mb-6">
            <h3 className={`text-xl font-semibold ${textStyle}`}>
              Applied Users ({applicants.length})
            </h3>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                Filter
              </button>
              <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                Sort
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {applicants.map((user, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border transition-all hover:shadow-md ${
                  mode === "light"
                    ? "bg-white border-gray-200 hover:border-indigo-200"
                    : "bg-gray-800 border-gray-700 hover:border-indigo-800"
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className={`font-semibold ${textStyle}`}>
                        {user.name}
                      </p>
                      <p className={`text-sm ${subTextStyle}`}>{user.email}</p>
                      <div className="flex items-center gap-3 mt-1">
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${getStatusColor(
                            user.status
                          )}`}
                        >
                          {user.status}
                        </span>
                        <span className="text-xs text-gray-500">
                          {user.applied}
                        </span>
                        <span className="text-xs text-green-600 font-medium">
                          Match: {user.match}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4 lg:mt-0">
                    <button className="flex items-center gap-2 px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all text-sm">
                      <VisibilityIcon fontSize="small" />
                      View Profile
                    </button>
                    <button className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetails;
