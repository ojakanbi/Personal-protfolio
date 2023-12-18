import React from 'react'
import './Hero.css'
import profile from "../../images/profile-pic.jpg"
import Image from 'next/image';






export default function Hero() {
    return (
        <>
            <div className="mainHeader">
                <div className="imgContainer">
                        <img src="images/pf.jpg" alt="Profile picture of a African American male" id="pf1"/>
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
                    <a href='pdf/oyindamolaAkanbiResume.pdf' className="resumeLink">
                        <button className="resumeBtn">RESUME</button>
                    </a>
                </div>
            </div>


        </>
    )

}