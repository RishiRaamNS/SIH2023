"use client";
import React from "react";
import "../styles/Details.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function details() {
  return (
    <div className="details">
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <div className="details--container">
        <h1 className="details--heading">Enter details to get started</h1>
        <span class="details--floating-label">Full Name</span>
        <input className="details--input"></input>
        <span class="details--floating-label">Email Address</span>
        <input className="details--input"></input>
        <span class="details--floating-label">Phone Number</span>
        <input className="details--input"></input>
        <span class="details--floating-label">Law Firm/ Organization Name</span>
        <input className="details--input"></input>
        <span class="details--floating-label">Area(s) of expertise</span>
        <input className="details--input"></input>
        <span class="details--floating-label">Law Firm/ Organization Name</span>
        <input className="details--input"></input>
      </div>
    </div>
  );
}

export default details;
