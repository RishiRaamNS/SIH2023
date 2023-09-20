"use client";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { FiSearch } from "react-icons/fi";
import Lawyerinfo from "../Components/Lawyerinfo";
import { FaPenToSquare, FaShieldHalved } from "react-icons/fa6";
import {LiaUserClockSolid} from "react-icons/lia"

const providers = [
  " Advocates",
  " Document Writers",
  " Mediators",
  " Arbitrators",
  " Legal Consultants",
]

function App() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        return prevIndex + 1 < providers.length ? prevIndex + 1 : 0;
      });
    }, 1000);

    return () => clearInterval(interval);
  });
  const resetState = () => {
    setIndex(0);
  };

  return (
    <div className="main-container">
      <nav className="navbar">
        <div className="container-fluid">
          <h1 className="navbar-brand">Legalix</h1>
          <div className="right-side">
            <a className="nav-link">Learn</a>
            <a className="nav-link">About</a>
            <a className="nav-link">My Profile</a>
            <a className="nav-link">Login</a>

            <a className="btn btn-primary">Signup</a>
          </div>
        </div>
      </nav>
      <div className="section-1 section">
        <div className="left-container">
          <h1 className="slogan">
            Connecting you to Trusted Legal Experts in India
          </h1>
          <p className="sub-heading">
            Your gateway to a simplified and efficient legal experience.
          </p>
          <button className="btn btn-primary get-started">Get started</button>
        </div>

        <div className="right-container">
          <img src="/law.svg" className="hero-img" />
        </div>
      </div>

      <div className="section-2 section">
        <h1 className="heading">
          Find the top
          <span className="sliding-text"> {providers[index]} </span>
        </h1>
        <form>
          <div className="search-wrapper">
            <FiSearch className="search-icon" />
            <input
              className="search-bar"
              type="text"
              placeholder="Search"
            ></input>
          </div>
        </form>
        <div id="myDropdown" class="dropdown">
          <button
            class="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select City
          </button>
          <ul class="dropdown-menu">
            <li>
              <input
                type="text"
                placeholder="Search.."
                id="input"
                // onChange={handleChange}
              />
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
        <div id="myDropdown" class="dropdown">
          <button
            class="btn btn-white dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select Area
          </button>
          <ul class="dropdown-menu">
            <li>
              <input
                type="text"
                placeholder="Search.."
                id="input"
                // onChange={handleChange}
              />
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="section-3 section">
        <h1 className="heading">Top rated Advocates in India</h1>
        <div className="grid-container">
          <Lawyerinfo />
          <Lawyerinfo />
          <Lawyerinfo />
          <Lawyerinfo />
        </div>
      </div>

      <div className="section-4 section">
        <div className="left-container">
          <img src="/features.svg" className="feature--img" />
        </div>
        <div className="right-container">
          <h1 className="heading feature--heading">
            Elevate Your Legal Experience, Effortlessly
          </h1>
          <FaPenToSquare className="feature--icon"/>
          <h2 className="feature--subheading">No cost to join</h2>
          <p className="feature--paragraph">
            Committed to Universal Access to Quality Legal Services.
          </p>
          <FaShieldHalved className="feature--icon"/>
          <h2 className="feature--subheading">Transparent and Reliable</h2>
          <p className="feature--paragraph">
            Rest assured with a transparent rating and review system.
          </p>
          <LiaUserClockSolid className="feature--icon"/>
          <h2 className="feature--subheading">Expertise Meets Convenience</h2>
          <p className="feature--paragraph">
            Effortlessly access legal expertise, anytime, anywhere.
          </p>
          <a className="btn btn-primary">Sign up for free</a>
          <a className="btn btn-white">Learn more</a>
        </div>
      </div>

      <div className="section section-5">
        
      </div>
    </div>
  );
}

// const handleChange = event => {
//   var input, filter, a, i, div;
//   // input = document.getElementById("input");
//   filter = event.target.value.toUpperCase();
//   div = document.getElementById("myDropdown");
//   a = div.getElementsByClassName("dropdown-item");
//   for (i = 0; i < a.length; i++) {
//     const txtValue = a[i].textContent || a[i].innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       a[i].style.display = "";
//     } else {
//       a[i].style.display = "none";
//     }
//   }
// }

export default App;
