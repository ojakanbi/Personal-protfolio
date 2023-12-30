import React from "react";
import "./About.css";
import Image from "next/image";
import linkedinPic from "../../images/linkedin-pic.jpg";

export default function About() {
  return (
    <div className="container" id="about">
      <div className="section-heading">
        <h3>
          <span className="span">ABOUT</span> ME
        </h3>
      </div>
      <div className="about-section">
        <div className="about-description">
          <p>
            I'm a third-year student pursuing Information Science and
            Technology. My passion lies in leveraging technology for positive
            change. In addition to academics, I love soccer and spending time
            with family. I actively engage in various student organizations,
            including National Society of Black Engineer and The African Student Associations, to enhance my
            skills and contribute positively to the community.
          </p>
        </div>
      </div>
    </div>
  );
}
