
import React from "react";
import "./Experience.css";




// create me a data of experiences 
const experiences = [
  {
    image: "salesforce.svg",
    title: "Incoming Software Engineer Intern",
    date: "May 2024 - Aug 2024",
    description: "San Francisco, CA"
  },
  {
    image: "pennstate.png",
    title: "Information Technology Support",
    date: "Nov 2023 - Present",
    description: "Penn State University"
  },
  {
    image: "salesforce.svg",
    title: "FutureForce Techlauncpad Scholar Intern",
    date: "June 2023 - Aug 2023",
    description: "San Francisco, CA"
  },
 
];



const experienceSections = experiences.map((experience, index) => (
  <section key={index} className="experieceCard">
    <section className="timeline">
      <div className="circleExperience">
        <img src={experience.image} alt="experience" />
      </div>
      {index !== experiences.length - 1 && <div className="line"></div>}
    </section>
    <section className="card-content">
      <h3>{experience.title}</h3>
      <p>{experience.date}</p>
      <p>{experience.description}</p>
    </section>
  </section>
));






const Experience = () => {
  return (
    <section>
      <div className="headingTitle " id ="left">
        <h3>
          <span id="blue-span">My</span> Experience{" "}
        </h3>
          </div>

          <div className="experience-section">
        <section className="each-experience">
          
  
          
                        {experienceSections}
              </section>

      </div>
    </section>
  );
};






export default Experience;
