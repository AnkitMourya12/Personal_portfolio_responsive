import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

import CallToAction from "../shared/CallToAction";
import TechIcons from "../../images/tech-icons.png";
import Section from "../shared/section";
import Resume from "../../download/nw_R1.pdf";
//import SkillsChart from "../skills";

import "./style.scss";

const Skills = () => {
    return (
        <Section
            background="dark"
            id="skills"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        src={TechIcons}
                        alt="JavaScript, React, CSS, HTML, SASS, Photoshop, Figma"
                    />
                </div>
                <div className="right-col">
                    <h2>Skills</h2>
                    <p>
C/C++,Basic Python, React, Node.js, HTML, CSS, JavaScript , Java Basic.<br/>
Data Analysis:Data Visualization, Matplotlib, Numpy, Pnadas, Seaborn, PowerBI.<br/>
Database: MySQL, MongoDB.<br/>
Subjective: DSA, OS,Computer Network,DBMS, Software Engineering. <br/>
Development Tools: Git & GitHiub, VSCode, Jupyter, Google Colab
                    </p>
                    
                
                    {/* <SkillsChart/> */}
                    
                    <CallToAction
                        text="Download CV"
                        icon={<AiOutlineCloudDownload />}
                        action={() => window.open(Resume)}
                    />
                </div>
            </div>
        </Section>
    );
};

export default Skills;
