import React from "react";
import { FaUserLarge } from "react-icons/fa6";
import "./Lawyerinfo.css";

function Lawyerinfo({ name, star, exp }) {
  return (
    <div className="Lawyerinfo">
      <FaUserLarge className="Lawyerinfo--image" />
      <h1 className="Lawyerinfo--name">{name}</h1>
      <p className="Lawyerinfo--profession">Advocate</p>
      <p className="Lawyerinfo--rating">⭐ {star}/5.0 (100+ clients)</p>
      <p className="Lawyerinfo--experience">{exp} years of Experience</p>
      <a className="Lawyerinfo--fieldchips">Criminal</a>
      <a className="Lawyerinfo--fieldchips">Divorce</a>
      <a className="Lawyerinfo--fieldchips lastchip">Family</a>
      <a className="Lawyerinfo--seemore btn btn-primary">See more</a>
    </div>
  );
}

export default Lawyerinfo;
