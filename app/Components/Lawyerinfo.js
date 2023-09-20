import React from "react";
import { FaUserLarge } from "react-icons/fa6";
import "./Lawyerinfo.css";

function Lawyerinfo() {
  return (
    <div className="Lawyerinfo">
      <FaUserLarge className="Lawyerinfo--image" />
      <h1 className="Lawyerinfo--name">Rishi Raam</h1>
      <p className="Lawyerinfo--profession">Advocate</p>
      <p className="Lawyerinfo--rating">⭐ 4.6/5.0 (100+ clients)</p>
      <p className="Lawyerinfo--experience">14 years of Experience</p>
      <a className="Lawyerinfo--fieldchips">Criminal</a>
      <a className="Lawyerinfo--fieldchips">Divorce</a>
      <a className="Lawyerinfo--fieldchips lastchip">Family</a>
      <a className="Lawyerinfo--seemore btn btn-primary">See more</a>
    </div>
  );
}

export default Lawyerinfo;
