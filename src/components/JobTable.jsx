import React, { useState } from "react";

const JobTable = ({ mode }) => {
  // Dummy Jobs Data
  const allJobs = Array.from({ length: 42 }, (_, i) => ({
    id: i + 1,
    designation: `Job Title ${i + 1}`,
    company: `Company ${i + 1}`,
    category: i % 2 === 0 ? "IT" : "Finance",
    position: i % 3 === 0 ? "Manager" : "Developer",
    jobType: i % 2 === 0 ? "Full-Time" : "Part-Time",
    active: i % 2 === 0,
    approve: i % 3 === 0,
    hidden: i % 4 === 0,
    status:
      i % 7 === 0
        ? "Deleted"
        : i % 6 === 0
        ? "Inactive"
        : i % 5 === 0
        ? "Reported"
        : i % 4 === 0
        ? "Pending"
        : i % 3 === 0
        ? "Approved"
        : "Active",
  }));

  // Tabs State
  const [activeTab, setActiveTab] = useState("All Jobs");
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 8;

  const tabs = [
    "All Jobs",
    "Active Jobs",
    "Approved Jobs",
    "Pending Jobs",
    "Reported Jobs",
    "Inactive Jobs",
    "Deleted Jobs",
  ];

  // Filter Jobs According to Tab
  const filteredJobs =
    activeTab === "All Jobs"
      ? allJobs
      : allJobs.filter((job) => job.status === activeTab.replace(" Jobs", ""));

  // Pagination
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const changeTab = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const [selectedJob, setSelectedJob] = useState(null);

  const openModal = (job) => setSelectedJob(job);
  const closeModal = () => setSelectedJob(null);

  const approveJob = () => {
    alert(`Job ${selectedJob.id} Approved ✅`);
    closeModal();
  };

  const deleteJob = () => {
    alert(`Job ${selectedJob.id} Deleted ❌`);
    closeModal();
  };

  return (
    <div
      className={` p-6 rounded-xl ${
        mode === "light"
          ? "bg-white shadow-md text-black"
          : "bg-[#292930] text-white"
      }`}
    >
      <h2 className="text-xl font-bold mb-4">Jobs Management</h2>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => changeTab(tab)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              activeTab === tab
                ? "bg-indigo-600 text-white"
                : mode === "light"
                ? "bg-gray-200 hover:bg-gray-300"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr
              className={`${
                mode === "light" ? "bg-gray-100" : "bg-[#2a2a32]"
              } text-left`}
            >
              <th className="p-3">ID</th>
              <th className="p-3">Designation</th>
              <th className="p-3">Company</th>
              <th className="p-3">Category</th>
              <th className="p-3">Position</th>
              <th className="p-3">Job Type</th>
              <th className="p-3">Active</th>
              <th className="p-3">Approved</th>
              <th className="p-3">Hidden</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentJobs.map((job) => (
              <tr
                key={job.id}
                className={`border-b ${
                  mode === "light" ? "hover:bg-gray-50" : "hover:bg-gray-800"
                }`}
              >
                <td className="p-3">{job.id}</td>
                <td className="p-3">{job.designation}</td>
                <td className="p-3">{job.company}</td>
                <td className="p-3">{job.category}</td>
                <td className="p-3">{job.position}</td>
                <td className="p-3">{job.jobType}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      job.active
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {job.active ? "Yes" : "No"}
                  </span>
                </td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      job.approve
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {job.approve ? "Yes" : "No"}
                  </span>
                </td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      job.hidden
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {job.hidden ? "Yes" : "No"}
                  </span>
                </td>
                <td className="p-3">
                  <button
                    onClick={() => openModal(job)}
                    className="px-3 py-1 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
            {currentJobs.length === 0 && (
              <tr>
                <td colSpan="10" className="p-4 text-center opacity-70">
                  No {activeTab.toLowerCase()} found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded-md ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-indigo-500 text-white hover:bg-indigo-600"
          }`}
        >
          Previous
        </button>

        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 rounded-md ${
                currentPage === i + 1
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}

          {/* Modal */}
          {selectedJob && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
              <div
                className={`w-full max-w-3xl rounded-2xl shadow-2xl transform transition-all duration-300 scale-100 ${
                  mode === "light"
                    ? "bg-white text-black"
                    : "bg-[#1e1e24] text-white"
                }`}
              >
                {/* Header */}
                <div
                  className={`flex items-center justify-between px-6 py-4 rounded-t-2xl ${
                    mode === "light"
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                      : "bg-gradient-to-r from-indigo-600 to-purple-700 text-white"
                  }`}
                >
                  <h3 className="text-lg font-semibold">
                    Job Details - {selectedJob.designation}
                  </h3>
                  <button
                    onClick={closeModal}
                    className="text-white hover:text-gray-200 transition"
                  >
                    ✕
                  </button>
                </div>

                {/* Body */}
                <div className="px-6 py-5 max-h-[65vh] overflow-y-auto space-y-6">
                  {/* Grid Info */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <p>
                      <span className="font-semibold">ID:</span>{" "}
                      {selectedJob.id}
                    </p>
                    <p>
                      <span className="font-semibold">Company:</span>{" "}
                      {selectedJob.company}
                    </p>
                    <p>
                      <span className="font-semibold">Category:</span>{" "}
                      {selectedJob.category}
                    </p>
                    <p>
                      <span className="font-semibold">Position:</span>{" "}
                      {selectedJob.position}
                    </p>
                    <p>
                      <span className="font-semibold">Job Type:</span>{" "}
                      {selectedJob.jobType}
                    </p>
                    <p>
                      <span className="font-semibold">Active:</span>{" "}
                      {selectedJob.active}
                    </p>
                    <p>
                      <span className="font-semibold">Approved:</span>{" "}
                      {selectedJob.approved}
                    </p>
                    <p>
                      <span className="font-semibold">Hidden:</span>{" "}
                      {selectedJob.hidden}
                    </p>
                    <p className="col-span-2">
                      <span className="font-semibold">Date:</span>{" "}
                      {selectedJob.date}
                    </p>
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="text-md font-semibold mb-2">
                      Job Description
                    </h4>
                    <p className="text-sm leading-relaxed whitespace-pre-line">
                      {selectedJob.description ||
                        "No description available. Please update job details."}
                    </p>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h4 className="text-md font-semibold mb-2">Requirements</h4>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      {selectedJob.requirements &&
                      selectedJob.requirements.length > 0 ? (
                        selectedJob.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))
                      ) : (
                        <p className="text-sm text-gray-500">
                          No requirements listed.
                        </p>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex flex-col sm:flex-row justify-end gap-3 px-6 py-4 border-t border-gray-200">
                  <button
                    onClick={approveJob}
                    className="flex-1 sm:flex-none px-5 py-2 rounded-lg bg-green-500 text-white font-medium shadow-md hover:bg-green-600 transition"
                  >
                    ✅ Approve
                  </button>
                  <button
                    onClick={deleteJob}
                    className="flex-1 sm:flex-none px-5 py-2 rounded-lg bg-red-500 text-white font-medium shadow-md hover:bg-red-600 transition"
                  >
                    🗑️ Delete
                  </button>
                  <button
                    onClick={closeModal}
                    className="flex-1 sm:flex-none px-5 py-2 rounded-lg bg-gray-400 text-white font-medium shadow-md hover:bg-gray-500 transition"
                  >
                    ✖ Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded-md ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-indigo-500 text-white hover:bg-indigo-600"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default JobTable;
