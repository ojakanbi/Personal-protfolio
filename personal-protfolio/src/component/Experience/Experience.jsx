import React from "react";
import "./Experience.css";

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
                  <section>
                      <img src="https://img.icons8.com/ios-filled/50/000000/graduation-cap.png" />
                  </section>
                  <section>
                        <h3>Education</h3>
                        <p>
                            <span className="bold">The Pennsylvania State University</span>
                            <br />
                            <span className="italic">Bachelor of Science in Information Science and Technology</span>
                            <br />
                            <span className="italic">Minor in Security and Risk Analysis</span>
                            <br />
                            <span className="italic">Minor in Entrepreneurship and Innovation</span>
                            <br />
                            <span className="italic">GPA: 3.43</span>
                            <br />
                            <span className="italic">Expected Graduation: May 2022</span>
                        </p>
                  </section>
              </section>

      </div>
    </section>
  );
};

export default Experience;
