import React, { useState, useMemo } from "react";
import {
  TextField,
  MenuItem,
  IconButton,
  Modal,
  Box,
  Button,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

const UserTable = ({ mode }) => {
  // Dummy Users Data
  const allUsers = Array.from({ length: 75 }, (_, i) => ({
    id: i + 1,
    username: `User_${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: i % 2 === 0 ? "Candidate" : "Employer",
    date: `2025-09-${(i % 30) + 1}`,
    status: i % 3 === 0 ? "Active" : "Blocked",
    reported: i % 5 === 0, // every 5th user reported
  }));

  // Tabs
  const tabs = ["All Users", "Active Users", "Blocked Users", "Reported Users"];

  const [activeTab, setActiveTab] = useState("All Users");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);

  // Filters
  const [filters, setFilters] = useState({
    search: "",
    role: "",
    status: "",
  });

  const [openFilter, setOpenFilter] = useState(false);

  // Filtered Users
  const filteredUsers = useMemo(() => {
    let users =
      activeTab === "All Users"
        ? allUsers
        : activeTab === "Reported Users"
        ? allUsers.filter((u) => u.reported)
        : allUsers.filter((u) => u.status === activeTab.replace(" Users", ""));

    return users.filter((u) => {
      return (
        (filters.search === "" ||
          u.username.toLowerCase().includes(filters.search.toLowerCase()) ||
          u.email.toLowerCase().includes(filters.search.toLowerCase())) &&
        (filters.role === "" || u.role === filters.role) &&
        (filters.status === "" || u.status === filters.status)
      );
    });
  }, [allUsers, activeTab, filters]);

  // Pagination
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const getPaginationNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage, "...", totalPages);
      }
    }
    return pages;
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleResetFilters = () => {
    setFilters({ search: "", role: "", status: "" });
  };

  return (
    <div
      className={`p-6 rounded-xl ${
        mode === "light"
          ? "bg-white shadow-md text-black"
          : "bg-[#292930] text-white"
      }`}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Users Management</h2>

        {/* Filter Button */}
        <IconButton onClick={() => setOpenFilter(true)}>
          <FilterListIcon />
        </IconButton>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setCurrentPage(1);
            }}
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
      <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
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
                  mode === "light" ? "hover:bg-gray-50" : "hover:bg-gray-800"
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
                  No {activeTab.replace("Users", "").toLowerCase()} users match
                  your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination + Rows Per Page */}
      <div className="flex justify-between items-center mt-6">
        {/* Pagination */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-md ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-indigo-500 text-white hover:bg-indigo-600"
            }`}
          >
            Prev
          </button>

          {getPaginationNumbers().map((num, i) =>
            num === "..." ? (
              <span key={i} className="px-2">
                ...
              </span>
            ) : (
              <button
                key={i}
                onClick={() => handlePageChange(num)}
                className={`px-3 py-1 rounded-md ${
                  currentPage === num
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {num}
              </button>
            )
          )}

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

        {/* Rows per page */}
        <FormControl size="small" className="w-32">
          <InputLabel>Rows</InputLabel>
          <Select
            value={usersPerPage}
            label="Rows"
            onChange={(e) => {
              setUsersPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={100}>100</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* Filter Modal */}
      <Modal open={openFilter} onClose={() => setOpenFilter(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: 2,
            p: 4,
          }}
        >
          <h3 className="text-lg font-semibold mb-4">Filter Users</h3>

          <div className="grid gap-4">
            <TextField
              label="Search (Username / Email)"
              name="search"
              fullWidth
              value={filters.search}
              onChange={handleFilterChange}
            />

            <TextField
              select
              label="Role"
              name="role"
              fullWidth
              value={filters.role}
              onChange={handleFilterChange}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Candidate">Candidate</MenuItem>
              <MenuItem value="Employer">Employer</MenuItem>
            </TextField>

            <TextField
              select
              label="Status"
              name="status"
              fullWidth
              value={filters.status}
              onChange={handleFilterChange}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Blocked">Blocked</MenuItem>
            </TextField>
          </div>

          <div className="flex justify-between gap-3 mt-6">
            <Button
              variant="outlined"
              color="warning"
              fullWidth
              onClick={handleResetFilters}
            >
              Reset
            </Button>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => setOpenFilter(false)}
            >
              Apply
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default UserTable;