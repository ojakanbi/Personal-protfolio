import React from "react";
import "./Hero.css";
import profile from "../../images/linkedin-pic.jpg";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="image-wrapper">
        <Image
          src={profile}
          alt="Profile picture of an African American male"
          id="profile-image"
          width={300}
          height={400}
        />
      </div>
      <div className="text-section">
        <div className="info">
          <i className="fa-solid fa-graduation-cap"></i>
          <span>The Pennsylvania State University</span>
        </div>
        <div className="main-name">Oyindamola J Akanbi</div>
        <div className="info">
          <i className="fa-solid fa-code"></i>
          <span>Information Science and Technology</span>
        </div>
        <div className="button-group">
          <a href="oyindamolaAkanbiResume.pdf" target="_blank" className="resume-link">
            <button className="resume-btn">RESUME</button>
          </a>
          <a href="#about" className="resume-link">
            <button className="resume-btn">ABOUT</button>
          </a>
        </div>
      </div>
    </div>
  );
}
