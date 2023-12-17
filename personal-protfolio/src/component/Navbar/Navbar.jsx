import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <nav>
        <h1 className="nameLogo">Oyindamola Akanbi</h1>
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
              VIDEO
            </a>
          </li>
          <li>
            <a href="#connect">
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
