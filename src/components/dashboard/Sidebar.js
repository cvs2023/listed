import React, { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import dashboard from "../../images/dash.png";
import transactions from "../../images/transactions.png";
import schedules from "../../images/schedules.png";
import users from "../../images/users.png";
import settings from "../../images/settings.png";

const LeftSection = () => {
  return (
    <div className="sidebar">
      <div className="logo">Board.</div>

      <div className="menu">
        <div className="top">
          <Link to="/dashboard">
            <img src={dashboard}></img>
            Dashboard
          </Link>

          <Link to="/transactions">
            <img src={transactions}></img>
            Transactions
          </Link>

          <Link to="/schedules">
            <img src={schedules}></img>
            Schedules
          </Link>
          <Link to="/users">
            <img src={users}></img>
            Users
          </Link>
          <Link to="/settings">
            <img src={settings}></img>
            Settings
          </Link>
        </div>

        <div class className="bottom">
          <Link to="/help">Help</Link>
          <Link to="/contactUs">Conatct Us</Link>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
