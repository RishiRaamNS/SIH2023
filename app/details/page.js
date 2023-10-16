"use client";
import React from "react";
import "../styles/Details.css";
import { Inter } from "next/font/google";
import { PiUserCirclePlusDuotone } from "react-icons/pi";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

function details() {
  return (
    <div className="details">
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <h1 className="details--heading">Enter details to get started</h1>
      <PiUserCirclePlusDuotone className="details--profile-picture" />
      <div className="details--grid">
        <div>
          <span class="details--floating-label">Full Name</span>
          <input className="details--input"></input>
        </div>
        <div>
          <span class="details--floating-label">Email Address</span>
          <input className="details--input"></input>
        </div>
        <div>
          <span class="details--floating-label">Phone Number</span>
          <input className="details--input"></input>
        </div>
        <div>
          <span class="details--floating-label">
            Law Firm/ Organization Name
          </span>
          <input className="details--input"></input>
        </div>
        <div>
          <span class="details--floating-label">Area(s) of expertise</span>
          <input className="details--input"></input>
        </div>
        <div>
          <span class="details--floating-label">Years of Experience</span>
          <input className="details--input"></input>
        </div>
        <div>
          <span class="details--floating-label">Location</span>
          <input className="details--input"></input>
        </div>
        <div>
          <span class="details--floating-label">Languages Spoken</span>
          <input className="details--input"></input>
        </div>
        <div>
          <span class="details--floating-label">
            Link to Professional Website/Linkedin Profile
          </span>
          <input className="details--input"></input>
        </div>
      </div>
      <Link className="btn btn-primary details--btn" href="/">Get Started</Link>
    </div>
  );
}

export default details;
