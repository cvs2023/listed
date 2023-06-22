import React from "react";
import Sidebar from "./Sidebar";
import DashRight from "./DashRight";
import Hamburger from "./hamburger";
const Dashboard = () => {
  return (
    <div>
      <div>
        <Hamburger />
      </div>
      <div className="dashboard">
        <Sidebar />

        <DashRight />
      </div>
    </div>
  );
};

export default Dashboard;
