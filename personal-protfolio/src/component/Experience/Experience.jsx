import React from "react";
import "./Experience.css";

const experiences = [
  {
    image: "salesforce.svg",
    imageSize: " ",
    title: "Incoming Software Engineer Intern",
    date: "May 2024 - Aug 2024",
    description: "San Francisco, CA"
  },
  {
    image: "pennstate.png",
    imageSize: "250px",
    title: "Information Technology Support",
    date: "Nov 2023 - Present",
    description: "Penn State University"
  },
  {
    image: "Salesforce.svg",
    imageSize: " ",
    title: "FutureForce Techlauncpad Scholar Intern",
    date: "June 2023 - Aug 2023",
    description: "San Francisco, CA"
  },
];

const experienceSections = experiences.map((experience, index) => (
  <section key={index} className="experienceCard">
    <div className="card-content">
      <img
      href = "https://www.salesforce.com/"
        src={experience.image}

        alt="Experience"
        width={experience.imageSize}
       ></img>
      <h3>{experience.title}</h3>
      <p>{experience.date}</p>
      <p>{experience.description}</p>
    </div>
  </section>
));

const Experience = () => {
  return (
    <div className="container" id = "experience">
      <div className="section-heading">
        <h3>
          <span className="span"> My</span> Experience{" "}
        </h3>
      </div>

      <div className="content-container">
        {experienceSections}
      </div>
    </div>
  );
};

export default Experience;
