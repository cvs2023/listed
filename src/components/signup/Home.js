import React from "react";
import "./App.css";
import SignIn from "./signIn";
import LeftSide from "./leftSide";

const Home = () => {
  return (
    <div className="flex-divider">
      <LeftSide />
      <SignIn />
    </div>
  );
};

export default Home;
