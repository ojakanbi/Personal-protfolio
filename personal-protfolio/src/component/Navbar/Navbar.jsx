import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <nav>
      <div id="logo-design"><a href="/">OJ</a></div>
        <ul>
          <li>
            <a href="#">
              <i className="fa-solid fa-house-user"></i>
              HOME
            </a>
          </li>
          <li>
            <a href="#about">
              <i className="fa-solid fa-address-card"></i>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#video-section-heading">
              <i className="fa-brands fa-youtube"></i>
              SKILLS
            </a>
          </li>
          <li>
            <a href="#experience">
              <i className="fa-solid fa-link"></i>
              EXPERIENCE
            </a>
          </li>
          <li>
            <a href="#projects">
              <i className="fa-solid fa-link"></i>
              PROJECTS 
            </a>
          </li>
          <li>
            <a href="Connect">
              <i className="fa-solid fa-link"></i>
              CONNECT
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

{

}
