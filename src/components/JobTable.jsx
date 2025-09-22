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
import { useNavigate } from "react-router-dom";

const JobTable = ({ mode }) => {
  // Dummy Jobs Data
  const navigate = useNavigate()
  const allJobs = Array.from({ length: 105 }, (_, i) => ({
    id: i + 1,
    designation: `Job Title ${i + 1}`,
    company: `Company ${i + 1}`,
    category: i % 2 === 0 ? "IT" : "Finance",
    position: i % 3 === 0 ? "Manager" : "Developer",
    jobType: i % 2 === 0 ? "Full-Time" : "Part-Time",
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
  const [jobsPerPage, setJobsPerPage] = useState(10);

  // Filter State
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    position: "",
    jobType: "",
  });

  // Modal State
  const [openFilter, setOpenFilter] = useState(false);

  const tabs = [
    "All Jobs",
    "Active Jobs",
    "Approved Jobs",
    "Pending Jobs",
    "Reported Jobs",
    "Inactive Jobs",
    "Deleted Jobs",
  ];

  // Filtered Jobs
  const filteredJobs = useMemo(() => {
    let jobs =
      activeTab === "All Jobs"
        ? allJobs
        : allJobs.filter(
            (job) => job.status === activeTab.replace(" Jobs", "")
          );

    return jobs.filter((job) => {
      return (
        (filters.search === "" ||
          job.designation
            .toLowerCase()
            .includes(filters.search.toLowerCase()) ||
          job.company.toLowerCase().includes(filters.search.toLowerCase())) &&
        (filters.category === "" || job.category === filters.category) &&
        (filters.position === "" || job.position === filters.position) &&
        (filters.jobType === "" || job.jobType === filters.jobType)
      );
    });
  }, [allJobs, activeTab, filters]);

  // Pagination
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

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
    setFilters({
      search: "",
      category: "",
      position: "",
      jobType: "",
    });
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
        <h2 className="text-xl font-bold">Jobs Management</h2>

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
              <th className="p-3">Designation</th>
              <th className="p-3">Company</th>
              <th className="p-3">Category</th>
              <th className="p-3">Position</th>
              <th className="p-3">Job Type</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
              {currentJobs.map((job) => (
                <tr
  key={job.id}
  onClick={() => navigate(`/jobdetail/${job.id}`)}
  className={`cursor-pointer border-b ${
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
        job.status === "Active"
          ? "bg-green-100 text-green-700"
          : job.status === "Approved"
          ? "bg-blue-100 text-blue-700"
          : job.status === "Pending"
          ? "bg-yellow-100 text-yellow-700"
          : job.status === "Reported"
          ? "bg-red-100 text-red-700"
          : "bg-gray-200 text-gray-700"
      }`}
    >
      {job.status}
    </span>
  </td>
</tr>

            
              // <tr
              //   // onClick={() => navigate(`/jobs/${job.id}`)}
              //     key={job.id}
              //     className={`border-b ${
              //       mode === "light" ? "hover:bg-gray-50" : "hover:bg-gray-800"
              //     }`}
              //   >
              //     <td className="p-3">{job.id}</td>
              //     <td className="p-3">{job.designation}</td>
              //     <td className="p-3">{job.company}</td>
              //     <td className="p-3">{job.category}</td>
              //     <td className="p-3">{job.position}</td>
              //     <td className="p-3">{job.jobType}</td>
              //     <td className="p-3">
              //       <span
              //         className={`px-2 py-1 rounded-full text-xs ${
              //           job.status === "Active"
              //             ? "bg-green-100 text-green-700"
              //             : job.status === "Approved"
              //             ? "bg-blue-100 text-blue-700"
              //             : job.status === "Pending"
              //             ? "bg-yellow-100 text-yellow-700"
              //             : job.status === "Reported"
              //             ? "bg-red-100 text-red-700"
              //             : "bg-gray-200 text-gray-700"
              //         }`}
              //       >
              //         {job.status}
              //       </span>
              //     </td>
              //   </tr>
            
                
              ))}
            {currentJobs.length === 0 && (
              <tr>
                <td colSpan="7" className="p-4 text-center opacity-70">
                  No {activeTab.replace("Jobs", "").toLowerCase()} jobs match
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
            value={jobsPerPage}
            label="Rows"
            onChange={(e) => {
              setJobsPerPage(Number(e.target.value));
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
          <h3 className="text-lg font-semibold mb-4">Filter Jobs</h3>

          <div className="grid gap-4">
            <TextField
              label="Search"
              name="search"
              fullWidth
              value={filters.search}
              onChange={handleFilterChange}
            />

            <TextField
              select
              label="Category"
              name="category"
              fullWidth
              value={filters.category}
              onChange={handleFilterChange}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="IT">IT</MenuItem>
              <MenuItem value="Finance">Finance</MenuItem>
            </TextField>

            <TextField
              select
              label="Position"
              name="position"
              fullWidth
              value={filters.position}
              onChange={handleFilterChange}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Manager">Manager</MenuItem>
              <MenuItem value="Developer">Developer</MenuItem>
            </TextField>

            <TextField
              select
              label="Job Type"
              name="jobType"
              fullWidth
              value={filters.jobType}
              onChange={handleFilterChange}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Full-Time">Full-Time</MenuItem>
              <MenuItem value="Part-Time">Part-Time</MenuItem>
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

export default JobTable;
