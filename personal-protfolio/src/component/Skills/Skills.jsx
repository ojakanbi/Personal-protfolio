import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faPhp,
  faPython,
  faNode,
  faJs,
  faCss3,
  faHtml5,
  faFigma,
  faGitAlt,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faC, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { createStyles, Avatar, Text, Group } from "@mantine/core";
import { IconPhoneCall, IconAt, IconBook } from "@tabler/icons-react";
import "./Skills.css";

export default function Skills() {
  return (
    <section>
      <div className="headingTitle " id = "headingTitle">
              <h1>MY <span id="who">
              SKILLS</span></h1>
          </div>
      <div className="skills-section">
        
          
              <div className="technical-skills-container">
        <div className="skills-bottom">
          <div className="lang-skills-container">
            <div className="python-lang">
              <div className="each-skill">
                <div className="circle">
                  <FontAwesomeIcon icon={faPython} />{" "}
                </div>
                <div className="skills-text">
                  <div className="skills-label">Python</div>
                </div>
              </div>
            </div>
            <div className="nodejs-lang">
              <div className="each-skill">
                <div className="circle" style={{ fontSize: "250%" }}>
                  <FontAwesomeIcon icon={faNode} />{" "}
                </div>
                <div className="skills-text">
                  <div className="skills-label">Node.js</div>
                </div>
              </div>
            </div>
           
            <div className="js-lang">
              <div className="each-skill">
                <div className="circle">
                  <FontAwesomeIcon icon={faJs} />{" "}
                </div>
                <div className="skills-text">
                  <div className="skills-label">JavaScript</div>
                </div>
              </div>
            </div>
            <div className="css-lang">
              <div className="each-skill">
                <div className="circle">
                  <FontAwesomeIcon icon={faCss3} />{" "}
                </div>
                <div className="skills-text">
                  <div className="skills-label">CSS</div>
                </div>
              </div>
            </div>
            <div className="html-lang">
              <div className="each-skill">
                <div className="circle">
                  <FontAwesomeIcon icon={faHtml5} />{" "}
                </div>
                <div className="skills-text">
                  <div className="skills-label">HTML</div>
                </div>
              </div>
            </div>
            <div className="figma">
              <div className="each-skill">
                <div className="circle">
                  <FontAwesomeIcon icon={faFigma} />{" "}
                </div>
                <div className="skills-text">
                  <div className="skills-label">Figma</div>
                </div>
              </div>
            </div>
            <div className="git">
              <div className="each-skill">
                <div className="circle">
                  <FontAwesomeIcon icon={faGitAlt} />{" "}
                </div>
                <div className="skills-text">
                  <div className="skills-label">Git</div>
                </div>
              </div>
            </div>
            <div className="sql">
              <div className="each-skill">
                <div className="circle">
                  <FontAwesomeIcon icon={faDatabase} />{" "}
                </div>
                <div className="skills-text">
                  <div className="skills-label">PostgresSql</div>
                </div>
              </div>
            </div>
            <div className="github">
              <div className="each-skill">
                <div className="circle">
                  <FontAwesomeIcon icon={faGithub} />{" "}
                </div>
                <div className="skills-text">
                  <div className="skills-label">GitHub</div>
                </div>
              </div>
            </div>
            <div className="express">
              <div className="each-skill">
                <div className="circle">
                  <FontAwesomeIcon icon={faReact} />{" "}
                </div>
                <div className="skills-text">
                  <div className="skills-label">React</div>
                </div>
              </div>
            </div>
            <div className="express">
             
            </div>
          </div>
        </div>
        </div>
        </div>
         
    </section>
  );
}
