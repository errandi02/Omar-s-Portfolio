import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    
    "Java",
    "SQL",
    "HTML",
    "CSS",
    "MDX",
    "SQLServer",
    "Postman",
    "Laravel PHP",
  //  "React",
    "JavaScript",
    "Angular",
    "C++",
    "C",
    "C#",
    "UML"
];

const labelsSecond = [
    "Jira",
    "ServiceNow",
    "Github",
    "Bitbucket",
    "Trello",
    "Slack",
    "Jenkins"
];

const labelsThird = [
    "OpenAI",
    "Make",
    "Flowise",
    "8n8",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Development</h3>
                    <p>Proficient in building, testing, and maintaining web applications using modern frameworks and technologies. Experienced in both backend and frontend development, as well as database management and system integration.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Agile Methodologies</h3>
                    <p>Skilled in working within Agile frameworks to manage projects efficiently. Experienced in tools like Jira for testing and defect management, coordinating deployments via ServiceNow, and ensuring smooth collaboration with clients and cross-functional teams.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>AI Knowledge</h3>
                    <p> Expertise in prompt engineering, automation with Make, SEO-optimized social media posts, AI-driven workflows
                        with 8n8, and more.
                    </p>
                    
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;