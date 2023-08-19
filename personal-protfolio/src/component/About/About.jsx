import React from "react";
import "./About.css"
import Image from 'next/image';
import linkedinPic from "../../images/linkedin-pic.jpg"


export default function About() {
    return (
        <div className="about-page-container">
            <div className="about-container">
                <div className="about-left-side">
                    <div className="about-img-container">
                       <Image src={linkedinPic} />
                    </div>
                    <div className="skill-mf">
  <p className="title-s">Skills</p>
  <div>
    <span>HTML</span> <span className="pull-right">70%</span>
    <div className="progress">
      <div className="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>
  <div>
    <span>CSS</span> <span className="pull-right">70%</span>
    <div className="progress">
      <div className="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>
  <div>
    <span>Python</span> <span className="pull-right">75%</span>
    <div className="progress">
      <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>
  <div>
    <span>Java</span> <span className="pull-right">55%</span>
    <div className="progress">
      <div className="progress-bar" role="progressbar" style={{ width: '55%' }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>
</div>

                </div>
                <div className="about-right-side">
                    <h3>
                        About me
                    </h3>
                    <p>
                         fhnsiudvsdvu
                    </p>
                </div>


            </div>
        </div>
    )
}