import React from "react";
import "./About.css"
import Image from 'next/image';
import linkedinPic from "../../images/linkedin-pic.jpg"


export default function About() {
  return (
    <>
    <div className="about-container">
      <div className= "info-container">
        <div>
          <div>
            <h3>About Me</h3>
            <h6>
              A Junior majoring in Information Science & Technology at The Pennsylvania State University.
            </h6>
            <p>As an<mark> aspiring</mark>tech leader, my passion is centered around harnessing technology to create a positive impact in people's lives. I am driven to build innovative tools and technologies that contribute to the development of society. .</p>
            <div className="row aabout-list">
            <div className="media">
                                        <label>Birthday</label>
                                        <p>5th april 2003</p>
                                    </div>
                                    <div className="media">
                                        <label>Age</label>
                                        <p>20 Yr</p>
                                    </div>
                                    <div className="media">
                                        <label>Residence</label>
                                        <p>Canada</p>
                                    </div>
                                    <div className="media">
                                        <label>Address</label>
                                        <p>Pennsylvania, USA</p>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="media">
                                        <label>E-mail</label>
                                        <p>info@domain.com</p>
                                    </div>
                                    <div className="media">
                                        <label>Phone</label>
                                        <p>820-885-3321</p>
                                    </div>
                                    <div className="media">
                                        <label>Skype</label>
                                        <p>skype.0404</p>
                                    </div>
                                    <div className="media">
                                        <label>Freelance</label>
                                        <p>Available</p>
                                    </div>
                                </div>

            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}