import React from "react";
import "./About.css";
import Image from "next/image";
import linkedinPic from "../../images/linkedin-pic.jpg";

export default function About() {
  return (
    < >

      <div className="headingTitle" id ="about">
        <h3>
          <span id="blue-span">WHO</span> AM I?{" "}
        </h3>
      </div>
      <div className="hidden about-section">
        <div className="about-section-media">
          {/* <LottieAnimation id="pr" animationData={flag} /> */}
        </div>
        <div className="about-section-text">
          <div className="about-section-text-container">
            <div className="about-section-text-container-title"></div>
            <div className="about-section-text-container-content">
              <p>
                I am a third-year Nigerian native, currently pursuing a degree
                in Information Science and Technology. My passion lies in the
                ever-evolving world of technology and its profound impact on
                daily human life. As a motivated individual, my goal is to
                leverage technology to make a positive difference in the world.
                <span> During my leisure time, I find joy in playing soccer with
                friends and spending quality moments with my family. I dedicated
                my initial college years to playing soccer at the collegiate
                level. Additionally, I actively participated in various
                organizations to enhance my social and leadership skills,
                including the National Society of Black Engineers (NSBE) and the
                African Student Association (ASA). Beyond that, I enjoy creating
                inspirational content on Instagram, aiming to motivate others in
                areas such as health, fitness, and the college experience.
                </span>
              </p>
              
            </div>
          </div>
        </div>
        </div>
       
    </>
  );
}
