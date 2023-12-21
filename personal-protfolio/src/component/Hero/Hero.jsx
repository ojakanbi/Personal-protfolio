import React from "react";
import "./Hero.css";
import profile from "../../images/linkedin-pic.jpg";
import Image from "next/image";


export default function Hero() {
  return (
    <>
      <div className="mainHeader">
        <div className="imgContainer">
          <Image
            src={profile}
            alt="Profile picture of a African American male"
            id="pf1"
          />
        </div>
        <div className="textContainer">
          <div className="info">
            <i className="fa-solid fa-graduation-cap"></i>
            <span>The Pennsylvania State University</span>
          </div>
          <div className="mainName">Oyindamola J Akanbi</div>
          <div className="info">
            <i className="fa-solid fa-code"></i>
            <span>Information Science and Technology</span>
          </div>
          <div id="resumeAbout">
            <a href="oyindamolaAkanbiResume.pdf" target="_blank" className="resumeLink">
              <button className="resumeBtn">RESUME</button>
            </a>
            

  

            <a href="#about" className="resumeLink">
              <button className="resumeBtn">ABOUT</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
