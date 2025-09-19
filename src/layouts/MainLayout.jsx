import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";
import React, { useState } from "react";

const MainLayout = ({ mode, setMode }) => {
  const [open, setOpen] = useState(false); // default mobile closed

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      <Sidebar open={open} toggleSidebar={toggleSidebar} mode={mode}/>

      {/* Main Content Area */}
      <div className="flex w-full flex-col">
        <Topbar mode={mode} setMode={setMode} toggleSidebar={toggleSidebar} open={open} />
        <main className="flex h-[92vh] overflow-y-scroll p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
