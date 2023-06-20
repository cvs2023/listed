import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../images/VectorsRevenue.png";
import img2 from "../../images/Vectortransaction.png";
import img3 from "../../images/Vectorlike.png";
import img4 from "../../images/Vectorusers.png";

import profile from "../../images/profile.jpg";
const RightSection = () => {
  return (
    <div className="right-section">
      <div className="right-navbar">
        <h1 className="dashboard-text">Dashboard</h1>

        <div className="navbar-right-part">
          <div class="search-box">
            <input
              class="search-input"
              type="text"
              placeholder="Search.."
            ></input>

            <button class="search-btn">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          <FontAwesomeIcon icon={faBell} className="bell-icon" />
          <img className="right-profile-img" src={profile}></img>
        </div>
      </div>

      <div className="userData">
        <div className="box box1">
          <img src={img1}></img>

          <p> Total Revenues</p>
          <h2>$2,129,430</h2>
        </div>
        <div className="box box2">
          <img src={img2}></img>

          <p> Total Transactions</p>
          <h2>$2,129,430</h2>
        </div>
        <div className="box box3">
          <img src={img3}></img>

          <p> Total Likes</p>
          <h2>$2,129,430</h2>
        </div>
        <div className="box box4">
          <img src={img4}></img>

          <p> Total Users</p>
          <h2>$2,129,430</h2>
        </div>
      </div>

      <div className="chart"></div>

      <div className="bottom-section">
        <div className="top-products">
          <div className="top-products-top">
            <div>Top Products</div>
            <select>
              <option>May-June 2021</option>
            </select>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="top-products"></div>
      </div>
    </div>
  );
};

export default RightSection;
