import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import TennisCenterCourt from '../assets/images/TennisCenterCourt.png';
import LofiMotors from '../assets/images/LofiMotors.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.tenniscentercourt.com/" target="_blank" rel="noreferrer"><img src={TennisCenterCourt} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.tenniscentercourt.com/" target="_blank" rel="noreferrer"><h2>Tennis Center Court</h2></a>
                <p>Developed and manage a dynamic tennis blog, featuring articles, tips, and reviews tailored to tennis enthusiasts. Leveraged modern web technologies to create a user-friendly interface and engaging content that resonates with the tennis community.</p>
            </div>
            <div className="project">
                <a  href="https://www.youtube.com/@LOFIMOTORS" target="_blank" rel="noreferrer"><img src={LofiMotors} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.youtube.com/@LOFIMOTORS" target="_blank" rel="noreferrer"><h2>LoFi Motors</h2></a>
                <p>Content creator for the LoFi Motors YouTube channel, producing AI-generated melodies and visually captivating animations. Combined AI tools with creative expertise to deliver immersive LoFi experiences, blending futuristic cityscapes, chill beats, and relaxing vibes for an ever-growing audience.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;