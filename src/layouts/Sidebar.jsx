import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WorkIcon from "@mui/icons-material/Work";
import BusinessIcon from "@mui/icons-material/Business";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import React from "react";

const Sidebar = ({ open ,mode}) => {
  // const [open, setOpen] = useState(true);

  const menus = [
    { name: "Dashboard", icon: <DashboardIcon />, path: "/" },
    { name: "Users", icon: <PeopleIcon />, path: "/users" },
    { name: "Jobs", icon: <WorkIcon />, path: "/jobs" },
    { name: "Employers", icon: <BusinessIcon />, path: "/employers" },
    // { name: "Settings", icon: <SettingsIcon />, path: "/settings" },
  ];

  return (
    <div
    // bg-[#292930] text-white
      className={`${mode === "light" ? "" :"bg-[#292930]"} shadow-lg h-auto p-4 ${
        open ? "w-64" : "w-20"
      } duration-300`}
    >
      {/* Logo or Brand Name */}
      <div className="mb-6 text-2xl font-bold text-center">
        {open ? (
          <img
            src="https://www.hiringmine.com/assets/Hiring%20Mine%20Logo-453a72d3.png"
            alt="HiringMine Logo"
            className="w-60 p-3 mx-auto "
          />
        ) : (
          "HM"
        )}
      </div>

      <ul className="space-y-4">
        {menus.map((menu, i) => (
          <li key={i}>
            <Link
              to={menu.path}
              className="flex items-center gap-3 p-2 hover:bg-[#6851ff] rounded-md"
            >
              {menu.icon}
              {open && <span>{menu.name}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
