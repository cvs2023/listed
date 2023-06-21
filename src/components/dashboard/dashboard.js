import React from "react";
import Sidebar from "./Sidebar";
import DashRight from "./DashRight";
import Hamburger from "./hamburger";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <Hamburger />
      <DashRight />
    </div>
  );
};

export default Dashboard;
