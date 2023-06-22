import React from "react";
import "./App.css";
import SignIn from "./signIn";
import LeftSide from "./leftSide";

const Home = ({ signIn }) => {
  return (
    <div className="flex-divider">
      <LeftSide />
      <SignIn signIn={signIn} />
    </div>
  );
};

export default Home;
