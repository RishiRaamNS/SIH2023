import React from "react";
import Container from "../Components/Container";
import "../styles/Signup.css";
import Login from "../login/page";
import ReactDOM from "react-dom";

function Signup() {
  return (
    <div className="Signup">
      <div className="login--flex-wrapper">
        <div className="login--left-container">
          <img src="/login.svg" className="login--hero-img" />
        </div>
        <div className="login--right-container">
          <Container heading={"Signup"} btn="Sign up" />
        </div>
      </div>
    </div>
  );
}

export default Signup;