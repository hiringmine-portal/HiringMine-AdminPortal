import React, { useState } from "react";

const UserTable = ({ mode }) => {
  // Dummy Users Data
  const allUsers = Array.from({ length: 53 }, (_, i) => ({
    id: i + 1,
    username: `User_${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: i % 2 === 0 ? "Candidate" : "Employer",
    date: `2025-09-${(i % 30) + 1}`,
    status: i % 3 === 0 ? "Active" : "Blocked",
  }));

  // Tab State
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  // Filter Users According to Tab
  const filteredUsers =
    activeTab === "All"
      ? allUsers
      : allUsers.filter((u) => u.status === activeTab);

  // Pagination Logic
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const changeTab = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1); // reset page when switching tab
  };

  return (
    <div
      className={`p-6 rounded-xl ${
        mode === "light"
          ? "bg-white shadow-md text-black"
          : "bg-[#292930] text-white"
      }`}
    >
      <h2 className="text-xl font-bold mb-4">Users Management</h2>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        {["All", "Active", "Blocked"].map((tab) => (
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
            {tab} Users
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
              <th className="p-3">Username</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr
                key={user.id}
                className={`border-b ${
                  mode === "light"
                    ? "hover:bg-gray-50"
                    : "hover:bg-gray-800"
                }`}
              >
                <td className="p-3">{user.id}</td>
                <td className="p-3">{user.username}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.role}</td>
                <td className="p-3">{user.date}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
            {currentUsers.length === 0 && (
              <tr>
                <td colSpan="6" className="p-4 text-center opacity-70">
                  No {activeTab.toLowerCase()} users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
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

export default UserTable;