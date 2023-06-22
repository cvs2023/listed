import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../images/VectorsRevenue.png";
import img2 from "../../images/Vectortransaction.png";
import img3 from "../../images/Vectorlike.png";
import img4 from "../../images/Vectorusers.png";
import arrow from "../../images/Vectorarrow.png";
import profile from "../../images/profile.jpg";
import LineChart from "./charts/LineChart";
import App from "./charts/PieChart";
// import TestChart from "./charts/testChart";
const userData = [
  {
    id: 1,
    img: img1,
    title: " Total Revenues",
    num: "$2,129,430",
  },
  {
    id: 2,
    img: img2,

    title: "Total Transactions",
    num: "1,520",
  },
  {
    id: 3,
    img: img3,

    title: "Total Likes",
    num: "9,721",
  },
  {
    id: 4,
    img: img4,
    title: "Total Users",
    num: "892",
  },
];
const DashRight = () => {
  const [data, setdata] = useState(userData);
  return (
    <div className="right-section">
      <div className="right-navbar">
        <h1 className="dashboard-text dash-hide">Dashboard</h1>

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

      <LineChart />
      {/* <TestChart /> */}

      <div className="bottom-section">
        <div className="top-products-box">
          <div className="top-products-top">
            <h1>Top Products</h1>
            <div>
              <select>
                <option>May-June 2021</option>
                <option>May-June 2021</option>
              </select>
            </div>
          </div>
          {/* chart below*/}
          <App />
        </div>

        <div className="todays-schedule-box">
          <div className="todays-schedule-in">
            <h1>Today's schedule</h1>
            <div>
              <p>See All</p>
              <img src={arrow}></img>
            </div>
          </div>

          <div className="schedule schedule-color1">
            <h6 className="">Meeting with suppliers from Kuta Bali</h6>
            <p className="">14.00-15.00</p>
            <p className="">at Sunset Road, Kuta, Bali </p>
          </div>

          <div className="schedule schedule-color2">
            <h6 className="">Check operation at Giga Factory 1</h6>
            <p className="">18.00-20.00</p>
            <p className="">at Central Jakarta </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashRight;
