import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
const App = () => {
  const [show, setShow] = useState(true);
  function onToggleMenu(e) {
    setShow(!show);
  }

  return (
    <div className="hamburger font-Poppins ">
      <header className="bg-white">
        <nav className="flex text-5xl justify-between items-center w-[92%]  mx-auto">
          <div
            className={`nav-links   ${show === true ? "" : "top-[9%]"}
            duration-500 lg:static absolute bg-white lg:min-h-fit min-h-[60vh] left-0 top-[-100%] lg:w-auto  w-full flex items-center px-5`}
          >
            <ul className="flex lg:flex-row flex-col lg:items-center lg:gap-[4vw] gap-8">
              <Link className="hover:text-gray-500" to="/dashboard">
                Dashbaord
              </Link>
              <Link className="hover:text-gray-500" to="/transactions">
                Transactions
              </Link>
              <Link className="hover:text-gray-500" to="/schedules">
                Schedules
              </Link>
              <Link className="hover:text-gray-500" to="/users">
                Users
              </Link>
              <Link className="hover:text-gray-500" to="/settings">
                Settings
              </Link>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            {/* <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
              Sign in
            </button> */}
            {show == true ? (
              <ion-icon
                onClick={() => onToggleMenu()}
                name="menu"
                className="text-3xl cursor-pointer md:hidden"
              ></ion-icon>
            ) : (
              <ion-icon
                onClick={() => onToggleMenu()}
                name="close"
                className="text-3xl cursor-pointer md:hidden"
              ></ion-icon>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default App;
