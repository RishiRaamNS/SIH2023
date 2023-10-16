"use client";
import React from "react";
import "../Components/pprofile.css";
import { Inter } from "next/font/google";
import { FaLocationDot } from "react-icons/fa6";
import { BiUserCircle } from "react-icons/bi";
import { GoPlusCircle } from "react-icons/go";
import { MdOutlineModeEditOutline } from "react-icons/md"
import { icons } from "react-icons";
const inter = Inter({ subsets: ["latin"] });

function profile({iconstyle}) {
  return (
    <div className="profile">
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <div className="profile--top">
        <BiUserCircle className="profile--profile-img" style={iconstyle}/>
        <div className="profile--section">
          <h1 className="profile--name">Rishi Raam</h1>
          <FaLocationDot className=" profile--location-icon" />
          <p className="profile--location">
            Coimbatore, TamilNadu - 11.00 am local time
          </p>
          <a className="profile--active">Available now</a>
        </div>

        <a className="btn btn-outline-primary profile--public-btn">
          See Public View
        </a>
        <a className="btn btn-primary profile--settings-btn">
          Profile Settings
        </a>
      </div>
      <div className="profile--bottom">
        <div className="profile--left">
          <h2 className="profile--h2">Video Introduction</h2>
          <GoPlusCircle className="profile--icons profile--video-plus" />
          <h2 className="profile--h2">Practice Areas</h2>
          <p className="profile--practice">Family</p>
          <p className="profile--practice">Corporate</p>
          <p className="profile--practice">Supreme Court</p>
          <h2 className="profile--h2">Languages</h2>
          <GoPlusCircle className="profile--icons profile--language-plus"  />
          <MdOutlineModeEditOutline className="profile--icons profile--language-edit" style={iconstyle} />
          <p className="profile--languages">
            English: <span className="gray-text">Native or Bilingual</span>
          </p>
          <p className="profile--languages">
            Spanish: <span className="gray-text">Fluent</span>
          </p>
          <h2 className="profile--h2">Education</h2>
          <GoPlusCircle className="profile--icons profile--education-plus" style={iconstyle} />
          <p className="profile--educations profile--university">
            ABC University
          </p>
          <p className="profile--educations">Bachelor of something(BA)</p>
          <p className="profile--educations">Business Administration</p>
          <p className="profile--educations profile--year">2014-2018</p>
        </div>
        <div className="profile--right">
          <h1 className="profile--heading">Advocate</h1>
          <p className="profile--paragraph">
            Advocate provides legal services in a variety of legal areas
            including, Family Disputes, Property related Matters, Matrimonial
            Disputes, and Drafting and vetting of various agreements and
            connected matters, Writ Jurisdiction, Service matters, Civil
            matters, Criminal matters, and other miscellaneous matters. He has
            extensive knowledge and expertise in criminal law and has appeared
            in a variety of criminal matters in various courts in and around
            Bangalore. He is also very competent in handling divorce and family
            disputes in original as well as appellate side to achieve excellent
            results for his clients.
          </p>
          <h1 className="profile--heading">Work History</h1>
          <p className="profile--paragraph">
            No work yet. Once you start getting hired on LegalPulse, your work
            with clients will show up here.
          </p>
          <h1 className="profile--heading">Portfolio</h1>
          <p className="profile--paragraph">
            Talent who add portfolios to their profile are more likely to win
            work. <span className="profile--link">Add a portfolio</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default profile;
