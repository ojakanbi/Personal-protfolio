import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faPython,
  faNode,
  faJs,
  faCss3,
  faHtml5,
  faGitAlt,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faC, faDatabase } from "@fortawesome/free-solid-svg-icons";
import "./Skills.css";


export default function Skills() {
  return (
    <section className="skills-container" id = "skills">
      <div className="section-heading">
        <h3>MY <span className = "span">SKILLS</span></h3>
      </div>
      <div className="skills-section">
        <div className="skills-grid">
          <div className="each-skill">
            <div className="circle">
              <FontAwesomeIcon icon={faPython} />
            </div>
            <div className="skills-label">Python</div>
          </div>
          <div className="each-skill">
            <div className="circle">
              <FontAwesomeIcon icon={faJs} />
            </div>
            <div className="skills-label">JavaScript</div>
          </div>
        </div>
        <div className="skills-grid">
          <div className="each-skill">
            <div className="circle">
              <FontAwesomeIcon icon={faNode} />
            </div>
            <div className="skills-label">Node.js</div>
          </div>
          <div className="each-skill">
            <div className="circle">
              <FontAwesomeIcon icon={faReact} />
            </div>
            <div className="skills-label">React</div>
          </div>
        </div>
        <div className="skills-grid">
          <div className="each-skill">
            <div className="circle">
              <FontAwesomeIcon icon={faHtml5} />
            </div>
            <div className="skills-label">HTML</div>
          </div>
          <div className="each-skill">
            <div className="circle">
              <FontAwesomeIcon icon={faCss3} />
            </div>
            <div className="skills-label">CSS</div>
          </div>
        </div>
        <div className="skills-grid">
          <div className="each-skill">
            <div className="circle">
              <FontAwesomeIcon icon={faGitAlt} />
            </div>
            <div className="skills-label">Git</div>
          </div>
          <div className="each-skill">
            <div className="circle">
              <FontAwesomeIcon icon={faDatabase} />
            </div>
            <div className="skills-label">SQL</div>
          </div>
        </div>
      </div>
    </section>
  );
}
