import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../images/VectorsRevenue.png";
import img2 from "../../images/Vectortransaction.png";
import img3 from "../../images/Vectorlike.png";
import img4 from "../../images/Vectorusers.png";
import arrow from "../../images/Vectorarrow.png";
import profile from "../../images/profile.jpg";
import ActivitiesChart from "./charts/ActivitiesChart";

const Transaction = () => {
  return (
    <div className="right-section">
      <div className="right-navbar">
        <h1 className="dashboard-text">Dashboard</h1>

        <div className="navbar-right-part">
          <div className="search-box">
            <input
              className="search-input"
              type="text"
              placeholder="Search.."
            ></input>

            <button className="search-btn">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          <FontAwesomeIcon icon={faBell} className="bell-icon" />
          <img className="right-profile-img" src={profile}></img>
        </div>
      </div>

      <div className="userData">
        <div className="box box1">
          <div className="image">
            <img src={img1}></img>
          </div>

          <p> Total Revenues</p>
          <h2>$2,129,430</h2>
        </div>
        <div className="box box2">
          <div className="image">
            <img src={img2}></img>
          </div>

          <p> Total Transactions</p>
          <h2>1,520</h2>
        </div>
        <div className="box box3">
          <div className="image">
            <img src={img3}></img>
          </div>

          <p> Total Likes</p>
          <h2>9,721</h2>
        </div>
        <div className="box box4">
          <div className="image">
            <img src={img4}></img>
          </div>

          <p> Total Users</p>
          <h2>892</h2>
        </div>
      </div>

      <ActivitiesChart />
      {/* <TestChart /> */}
    </div>
  );
};

export default Transaction;
