import React, { useState, useEffect } from "react";
import googleIcon from "../../images/google-icon.png";
import appleIcon from "../../images/apple-icon.png";
import { auth, provider } from "../../auth/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [value, setValue] = useState(null);
  const navigate = useNavigate();

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      const token = auth.config.apiKey;

      localStorage.setItem("token", token);
      setValue(token);

      navigate("/dashboard");
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("token"));
    if (value) {
      navigate("/dashboard");
    }
  });
  return (
    <div className="sign-in">
      <div className="sign-in-box">
        <h1 className="sign-in-text">Sign In</h1>
        <h4 className="sign-in-message">Sign in to your account</h4>
        <div className="button-box">
          <button className="button-google" onClick={handleClick}>
            <img className="image" src={googleIcon} />
            Sign in with Google
          </button>

          <button className="button-apple">
            <img className="image" src={appleIcon}></img>Sign in with Apple
          </button>
        </div>
        <form className="form-box">
          <label className="input-text">Email address</label>
          <input type="email" />

          <label className="input-text">Password</label>
          <input type="password" />

          <a href="#">Forgot Password?</a>
          <button className="submit-btn bg-black" type="submit">
            Sign In
          </button>
        </form>
        <div className="bottom-text">
          <p className="bottom-msg">
            Do you have account?<a href="#">Register here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
