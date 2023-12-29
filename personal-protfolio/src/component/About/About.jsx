import React from "react";
import "./About.css";
import Image from "next/image";
import linkedinPic from "../../images/linkedin-pic.jpg";

export default function About() {
  return (
    <>
      <div className="headingTitle" id="about">
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
                I am a third-year <span id="nigeriaGreen">N</span>i
                <span id="nigeriaGreen">g</span>e
                <span id="nigeriaGreen">r</span>i
                <span id="nigeriaGreen">a</span>n native, currently pursuing a
                degree in <span id = "spanBlack">
                Information Science and Technology
                </span>. My passion lies in
                the ever-evolving world of technology and its profound impact on
                daily human life. As a motivated individual, my goal is to
                leverage technology to make a positive difference in the world.
                <span>
                  {" "}
                  During my leisure time, I find joy in playing soccer with
                  friends and spending quality moments with my family. I
                  dedicated my initial college years to playing soccer at the
                  collegiate level. Additionally, I actively participated in
                  various organizations to enhance my social and leadership
                  skills, including the <span id="nigeriaGreen">National </span>
                  <span id ="spanYellow">
                  Society  of 
                  </span> <span id="spanRed">
                  Black Engineers 
                  </span> and the <span id = "spanRed">
                  African</span>  <span id = "spanBlack"> Student</span> <span id = "nigeriaGreen">Association</span>. Beyond that,
                  I enjoy creating inspirational content on Instagram, aiming to
                  motivate others in areas such as health, fitness, and the
                  college experience.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
