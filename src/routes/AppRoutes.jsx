import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import React from "react";
import Dashboard from "../components/Dashboard";
import User from "../components/User";
import Jobs from "../components/Jobs";
import JobDetails from "../components/JobDetails";

// const Jobs = () => <h2>Jobs Page</h2>;
// const Employers = () => <h2>Employers Page</h2>;

const Settings = () => <h2>Settings Page</h2>;

const AppRoutes = ({mode, setMode}) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout mode={mode} setMode={setMode} />}>
          <Route index element={<Dashboard mode={mode}  />} />
          <Route path="users" element={<User mode={mode}/>} />
          <Route path="jobs" element={<Jobs mode={mode}/>} />
          <Route path="employers" element={<JobDetails   mode={mode} />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
