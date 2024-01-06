'use client'
import React from "react";
import "./Navbar.css";
import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <>
   
        

      <nav className="navbar-container">
      <motion.div animate={{rotate:360, duration: 10 }} >
      <div className="logo-container">
        <a href="/" className="logo-link">
          OJ
        </a>
          </div>
          </motion.div>
      <div id="contrcution-image">
        <img src="construction.png" />

      </div>
      <ul className="nav-links">
        <li>
          <a href="#" className="nav-link">
            <i className="fa-solid fa-house-user"></i>
            HOME
          </a>
        </li>
        <li>
          <a href="#about" className="nav-link">
            <i className="fa-solid fa-address-card"></i>
            ABOUT
          </a>
        </li>
        <li>
          <a href="#skills" className="nav-link">
            <i className="fa-brands fa-youtube"></i>
            SKILLS
          </a>
        </li>
        <li>
          <a href="#experience" className="nav-link">
            <i className="fa-solid fa-link"></i>
            EXPERIENCE
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-link">
            <i className="fa-solid fa-link"></i>
            PROJECTS 
          </a>
        </li>
        <li>
          <a href="#connect" className="nav-link">
            <i className="fa-solid fa-link"></i>
            CONNECT
          </a>
        </li>
      </ul>
      </nav>
      
    
     
    </>
    
  );
}
