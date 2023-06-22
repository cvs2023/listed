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

          <Link className="pointer-events-none" to="/">
            <img src={transactions}></img>
            Transactions
          </Link>

          <Link className="pointer-events-none" to="/">
            <img src={schedules}></img>
            Schedules
          </Link>
          <Link className="pointer-events-none" to="/">
            <img src={users}></img>
            Users
          </Link>
          <Link className="pointer-events-none" to="/">
            <img src={settings}></img>
            Settings
          </Link>
        </div>

        <div class className="bottom">
          <Link className="pointer-events-none" to="/">
            Help
          </Link>
          <Link className="pointer-events-none" to="/">
            Conatct Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
