import "../styles/Login.css";
import Container from "../Components/Container";
import ReactDOM from "react-dom";
import React from "react";
import Signup from "../signup/page";
import Link from "next/link";

export default function Login() {
  return (
    <div className="Login">
      
      <div className="login--flex-wrapper">
        <div className="login--left-container">
          <img src="/login.svg" className="login--hero-img" />
        </div>
        <div className="login--right-container">
          <Container heading={"Welcome back"} btn={"Log In"} />
        </div>
      </div>
    </div>
  );
}
