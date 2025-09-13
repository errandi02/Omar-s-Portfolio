import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faBriefcaseClock, faSchool } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcaseClock} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Engineer at Avanade</h3>
            <h4 className="vertical-timeline-element-subtitle">Malaga, Spain</h4>
            <p>
              Full-stack Development, SpringBoot Backend Development, Project Cooperation, Testing, Defect Management, Deployment Coordination, Client Collaboration, Agile Proficiency
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Engineer Intern at Avanade</h3>
            <h4 className="vertical-timeline-element-subtitle">Malaga, Spain</h4>
            <p>
              FullStack Development, C# Backend Development, Team Cooperating
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">FullStack Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Malaga, Spain</h4>
            <p>
              Full-stack Development, Google API Development, Php Laravel Dev 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2020 - 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faSchool} />}
          >
            <h3 className="vertical-timeline-element-title">Computer Engineering Student</h3>
            <h4 className="vertical-timeline-element-subtitle">Malaga, Spain</h4>
            <p>
              Programming Expertise, Problem-Solving Skills, System Design, Critical Thinking, Team Collaboration
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;