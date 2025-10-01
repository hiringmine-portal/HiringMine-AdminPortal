// import React from 'react'

// const UserDetails = () => {
//   return (
//     <div>UserDetails</div>
//   )
// }

// export default UserDetails






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
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import BadgeIcon from "@mui/icons-material/Badge";
import { useParams } from "react-router-dom";

const UserDetails = ({ mode = "light" }) => {
  const [activeTab, setActiveTab] = useState("general");

  const { id } = useParams();

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

  // Mock user data with complete schema
  const userData = {
    id: "USR_001",
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    title: "Senior React Developer",
    bio: "Experienced full-stack developer with 5+ years in React.js, Node.js, and cloud technologies. Passionate about creating scalable web applications and mentoring junior developers.",
    
    // Personal Details
    personal: {
      joined: "Jan 2023",
      lastActive: "2 hours ago",
      status: "active",
      availability: "Immediately Available",
      experience: "5+ years"
    },

    // Skills
    skills: [
      { name: "React.js", level: "Expert", years: 5 },
      { name: "JavaScript", level: "Expert", years: 6 },
      { name: "Node.js", level: "Advanced", years: 4 },
      { name: "TypeScript", level: "Advanced", years: 3 },
      { name: "MongoDB", level: "Intermediate", years: 3 },
      { name: "AWS", level: "Intermediate", years: 2 },
      { name: "Python", level: "Intermediate", years: 2 }
    ],

    // Education
    education: [
      {
        degree: "MSc Computer Science",
        institution: "Stanford University",
        year: "2018-2020",
        grade: "3.8/4.0"
      },
      {
        degree: "BSc Software Engineering",
        institution: "UC Berkeley",
        year: "2014-2018",
        grade: "3.6/4.0"
      }
    ],

    // Experience
    experience: [
      {
        position: "Senior React Developer",
        company: "Tech Innovations Inc.",
        duration: "2022 - Present",
        description: "Leading frontend development team, architecting scalable React applications, and mentoring junior developers."
      },
      {
        position: "Full Stack Developer",
        company: "Digital Solutions LLC",
        duration: "2020 - 2022",
        description: "Developed and maintained web applications using React.js and Node.js, implemented CI/CD pipelines."
      }
    ],

    // Job Applications
    appliedJobs: [
      {
        id: "JOB_001",
        title: "Senior React JS Developer",
        company: "Tech Innovations Inc.",
        appliedDate: "2024-01-15",
        status: "Under Review",
        match: "95%"
      },
      {
        id: "JOB_002",
        title: "Frontend Lead",
        company: "Creative Minds",
        appliedDate: "2024-01-10",
        status: "Interview",
        match: "87%"
      },
      {
        id: "JOB_003",
        title: "Full Stack Developer",
        company: "StartUp XYZ",
        appliedDate: "2024-01-05",
        status: "Rejected",
        match: "78%"
      },
      {
        id: "JOB_004",
        title: "React Native Developer",
        company: "Mobile First Inc.",
        appliedDate: "2024-01-02",
        status: "Offer",
        match: "92%"
      }
    ],

    // Statistics
    stats: {
      totalApplications: 24,
      interviews: 8,
      offers: 3,
      profileViews: 156,
      responseRate: "85%"
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "offer":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "interview":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "under review":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "rejected":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default:
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
    }
  };

  const getMatchColor = (match) => {
    const percentage = parseInt(match);
    if (percentage >= 90) return "text-green-600";
    if (percentage >= 80) return "text-yellow-600";
    return "text-red-600";
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
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
              {userData.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h1 className={`text-2xl font-bold ${textStyle}`}>
                {userData.name}
              </h1>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-1">
                  <BadgeIcon className="text-indigo-500" fontSize="small" />
                  <span className={`text-sm ${subTextStyle}`}>
                    {userData.title}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <LocationOnIcon className="text-green-500" fontSize="small" />
                  <span className={`text-sm ${subTextStyle}`}>
                    {userData.location}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <ScheduleIcon className="text-purple-500" fontSize="small" />
                  <span className={`text-sm ${subTextStyle}`}>
                    Member since {userData.personal.joined}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-4 lg:mt-0">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                userData.personal.status === "active"
                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
              }`}
            >
              {userData.personal.status === "active" ? "Active" : "Inactive"}
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
          } flex gap-1 p-1 rounded-xl w-fit shadow-2xl`}
        >
          {[
            { key: "general", label: "Profile Details", icon: PersonIcon },
            {
              key: "appliedJobs",
              label: `Applied Jobs (${userData.appliedJobs.length})`,
              icon: WorkIcon,
            },
            { key: "skills", label: "Skills", icon: CodeIcon },
            { key: "experience", label: "Experience", icon: TrendingUpIcon },
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
          {/* Main User Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Bio Card */}
            <div className={`${cardStyle} rounded-2xl p-6`}>
              <h3 className={`text-lg font-semibold mb-4 ${textStyle}`}>
                About Me
              </h3>
              <p className={`leading-relaxed ${subTextStyle}`}>
                {userData.bio}
              </p>
            </div>

            {/* Contact Information */}
            <div className={`${cardStyle} rounded-2xl p-6`}>
              <h3 className={`text-lg font-semibold mb-4 ${textStyle}`}>
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className={`${mode === "light" ? "bg-white text-black" :"bg-[#292930] text-white"} flex items-center gap-3 p-3 rounded-lg shadow-md`}>
                  <div className="p-2 bg-indigo-100 rounded-lg dark:bg-indigo-900">
                    <EmailIcon className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <p className={`text-sm ${subTextStyle}`}>Email</p>
                    <p className={`font-semibold ${textStyle}`}>
                      {userData.email}
                    </p>
                  </div>
                </div>
                <div className={`${mode === "light" ? "bg-white text-black" :"bg-[#292930] text-white"} flex items-center gap-3 p-3 rounded-lg shadow-md`}>
                  <div className="p-2 bg-green-100 rounded-lg dark:bg-green-900">
                    <PhoneIcon className="text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className={`text-sm ${subTextStyle}`}>Phone</p>
                    <p className={`font-semibold ${textStyle}`}>
                      {userData.phone}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className={`${cardStyle} rounded-2xl p-6`}>
              <h3 className={`text-lg font-semibold mb-4 ${textStyle}`}>
                Education
              </h3>
              <div className="space-y-4">
                {userData.education.map((edu, index) => (
                  <div key={index} className={`${mode === "light" ? "bg-white text-black" :"bg-[#292930] text-white"} p-4 rounded-lg shadow-md`}>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-purple-100 rounded-lg dark:bg-purple-900">
                        <SchoolIcon className="text-purple-600 dark:text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-semibold ${textStyle}`}>
                          {edu.degree}
                        </h4>
                        <p className={subTextStyle}>{edu.institution}</p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-sm text-gray-500">{edu.year}</span>
                          <span className="text-sm font-semibold">GPA: {edu.grade}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Statistics Card */}
            <div className={`${cardStyle} rounded-2xl p-6`}>
              <h3 className={`text-lg font-semibold mb-4 ${textStyle}`}>
                Job Search Statistics
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className={subTextStyle}>Total Applications</span>
                  <span className={`font-semibold ${textStyle}`}>
                    {userData.stats.totalApplications}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={subTextStyle}>Interviews</span>
                  <span className={`font-semibold ${textStyle}`}>
                    {userData.stats.interviews}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={subTextStyle}>Offers Received</span>
                  <span className={`font-semibold ${textStyle}`}>
                    {userData.stats.offers}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={subTextStyle}>Profile Views</span>
                  <span className={`font-semibold ${textStyle}`}>
                    {userData.stats.profileViews}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={subTextStyle}>Response Rate</span>
                  <span className="font-semibold text-green-600">
                    {userData.stats.responseRate}
                  </span>
                </div>
              </div>
            </div>

            {/* Personal Details */}
            <div className={`${cardStyle} rounded-2xl p-6`}>
              <h3 className={`text-lg font-semibold mb-4 ${textStyle}`}>
                Personal Details
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className={subTextStyle}>Experience</span>
                  <span className={`font-semibold ${textStyle}`}>
                    {userData.personal.experience}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={subTextStyle}>Availability</span>
                  <span className="font-semibold text-green-600">
                    {userData.personal.availability}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={subTextStyle}>Last Active</span>
                  <span className={`font-semibold ${textStyle}`}>
                    {userData.personal.lastActive}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={subTextStyle}>Member Since</span>
                  <span className={`font-semibold ${textStyle}`}>
                    {userData.personal.joined}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions Card */}
            <div className={`${cardStyle} rounded-2xl p-6`}>
              <h3 className={`text-lg font-semibold mb-4 ${textStyle}`}>
                Quick Actions
              </h3>
              <div className="space-y-2">
                <button className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all">
                  Send Message
                </button>
                <button className="w-full py-2 border border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900 transition-all">
                  Download Resume
                </button>
                <button className="w-full py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                  Schedule Interview
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : activeTab === "appliedJobs" ? (
        // Applied Jobs Tab
        <div className={`${containerStyle} rounded-2xl p-6`}>
          <div className="flex justify-between items-center mb-6">
            <h3 className={`text-xl font-semibold ${textStyle}`}>
              Applied Jobs ({userData.appliedJobs.length})
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
            {userData.appliedJobs.map((job, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border transition-all hover:shadow-md ${
                  mode === "light"
                    ? "bg-white border-gray-200 hover:border-indigo-200"
                    : "bg-gray-800 border-gray-700 hover:border-indigo-800"
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-semibold">
                        {job.company.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className={`font-semibold ${textStyle}`}>
                          {job.title}
                        </p>
                        <p className={`text-sm ${subTextStyle}`}>
                          {job.company}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mt-2">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${getStatusColor(
                          job.status
                        )}`}
                      >
                        {job.status}
                      </span>
                      <span className="text-xs text-gray-500">
                        Applied: {job.appliedDate}
                      </span>
                      <span className={`text-xs font-medium ${getMatchColor(job.match)}`}>
                        Match: {job.match}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4 lg:mt-0">
                    <button className="flex items-center gap-2 px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all text-sm">
                      <VisibilityIcon fontSize="small" />
                      View Job
                    </button>
                    <button className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm">
                      Withdraw
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : activeTab === "skills" ? (
        // Skills Tab
        <div className={`${containerStyle} rounded-2xl p-6`}>
          <h3 className={`text-xl font-semibold mb-6 ${textStyle}`}>
            Skills & Technologies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {userData.skills.map((skill, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl border ${
                  mode === "light"
                    ? "bg-white border-gray-200"
                    : "bg-gray-800 border-gray-700"
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className={`font-semibold ${textStyle}`}>
                    {skill.name}
                  </span>
                  <span className={`text-sm ${getMatchColor(skill.level === 'Expert' ? '95%' : skill.level === 'Advanced' ? '85%' : '75%')}`}>
                    {skill.level}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      skill.level === 'Expert' 
                        ? 'bg-green-500' 
                        : skill.level === 'Advanced' 
                        ? 'bg-blue-500' 
                        : 'bg-yellow-500'
                    }`}
                    style={{
                      width: skill.level === 'Expert' ? '95%' : skill.level === 'Advanced' ? '85%' : '75%'
                    }}
                  ></div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-gray-500">
                    {skill.years} years experience
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Experience Tab
        <div className={`${containerStyle} rounded-2xl p-6`}>
          <h3 className={`text-xl font-semibold mb-6 ${textStyle}`}>
            Work Experience
          </h3>
          <div className="space-y-6">
            {userData.experience.map((exp, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border ${
                  mode === "light"
                    ? "bg-white border-gray-200"
                    : "bg-gray-800 border-gray-700"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                    <BusinessIcon className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                      <h4 className={`text-lg font-semibold ${textStyle}`}>
                        {exp.position}
                      </h4>
                      <span className="text-sm text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                        {exp.duration}
                      </span>
                    </div>
                    <p className={`font-medium text-indigo-600 dark:text-indigo-400 mb-3`}>
                      {exp.company}
                    </p>
                    <p className={subTextStyle}>{exp.description}</p>
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

export default UserDetails;