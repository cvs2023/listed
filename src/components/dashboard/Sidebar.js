import React, { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import dashboard from "../../images/dash.png";
import transactions from "../../images/transactions.png";
import schedules from "../../images/schedules.png";
import users from "../../images/users.png";
import settings from "../../images/settings.png";

const LeftSection = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (linkId) => {
    setActiveLink((prevActiveLink) =>
      prevActiveLink === linkId ? null : linkId
    );
  };

  console.log({ activeLink });

  return (
    <div className="sidebar">
      <div className="logo">Board.</div>

      <div className="menu">
        <div className="top">
          <Link
            className={activeLink === 1 ? "active" : ""}
            onClick={() => handleClick(1)}
            to="/dashboard"
          >
            <img src={dashboard}></img>
            Dashboard
          </Link>

          <Link
            className={activeLink === 2 ? "active" : ""}
            onClick={() => handleClick(2)}
            to="/transactions"
          >
            <img src={transactions}></img>
            Transactions
          </Link>

          <Link
            className={activeLink === 3 ? "active" : ""}
            onClick={() => handleClick(3)}
            to="/schedules"
          >
            <img src={schedules}></img>
            Schedules
          </Link>
          <Link
            className={activeLink === 4 ? "active" : ""}
            onClick={() => handleClick(4)}
            to="/users"
          >
            <img src={users}></img>
            Users
          </Link>
          <Link
            className={activeLink === 5 ? "active" : ""}
            onClick={() => handleClick(5)}
            to="/settings"
          >
            <img src={settings}></img>
            Settings
          </Link>
        </div>

        <div class className="bottom">
          <Link
            className={activeLink === 6 ? "active" : ""}
            onClick={() => handleClick(6)}
            to="/help"
          >
            Help
          </Link>
          <Link
            className={activeLink === 7 ? "active" : ""}
            onClick={() => handleClick(7)}
            to="/contactUs"
          >
            Conatct Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
