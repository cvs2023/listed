import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
const App = () => {
  const [show, setShow] = useState(true);
  function onToggleMenu() {
    setShow(!show);
  }

  return (
    <div className="hamburger font-Poppins ">
      <header className="bg-white ">
        <nav className="flex text-5xl justify-between items-center  w-[92%]  mx-auto">
          <div
            className={`nav-links z-[20] justify-center  ${
              show === true ? "" : "top-[6%]"
            }
            
            duration-500 xl:static absolute bg-black text-white  xl:min-h-fit min-h-[60vh] left-0 top-[-100%] xl:w-auto  w-full flex items-center px-5`}
          >
            <ul className="flex flex-col hamburger-text  xl:gap-[4vw] gap-8">
              <Link
                className="hover:text-gray-500 "
                to="/dashboard"
                onClick={() => onToggleMenu()}
              >
                Dashbaord
              </Link>
              <Link className="hover:text-gray-500 pointer-events-none " to="/">
                Transactions
              </Link>
              <Link className="hover:text-gray-500 pointer-events-none " to="/">
                Schedules
              </Link>
              <Link className="hover:text-gray-500 pointer-events-none " to="/">
                Users
              </Link>
              <Link className="hover:text-gray-500 pointer-events-none " to="/">
                Settings
              </Link>
              <Link className="hover:text-gray-500 pointer-events-none " to="/">
                Help
              </Link>
              <Link className="hover:text-gray-500 pointer-events-none " to="/">
                Contact
              </Link>
            </ul>
          </div>
          <div className="flex items-center gap-6">
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
