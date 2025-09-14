import React from 'react';
import '../assets/styles/Education.scss';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';

type EduItem = {
  degree: string;
  school: string;
  location: string;
  period: string;
  highlights?: string[];
  tags?: string[];
};

const EDUCATION: EduItem[] = [
  {
    degree: 'B.Sc. in Computer Science',
    school: 'University of Málaga (UMA)',
    location: 'Málaga, Spain',
    period: '2020 – 2025',
    highlights: [
      'Data structures, algorithms, and systems',
      'Final project: React + Node.js platform enabling project financing via private equity with built-in social networking features'    ],
    tags: ['Node.JS', 'React']
  },
  {
    degree: 'M.Sc. in Big Data, Data Science & AI',
    school: 'Complutense University of Madrid (UCM)',
    location: 'Madrid, Spain',
    period: '2025 – 2026',
    highlights: [
      'Machine learning & deep learning',
      'Big data & distributed computing',
      'Data engineering & visualization'
    ],
    tags: ['Python', 'Spark', 'MLOps']
  }
];


function Education() {
  return (
    <section id="education">
      <div className="items-container">
        <div className="education_wrapper">
          <Typography component="h1" variant="h3" className="title">
            Education
          </Typography>

          <Box className="edu-grid">
            {EDUCATION.map((item, idx) => (
              <Box key={idx} className="edu-card">
                <Box className="header">
                  <SchoolIcon className="icon" />
                  <div>
                    <Typography variant="h6" className="degree">
                      {item.degree}
                    </Typography>
                    <Typography className="school">{item.school}</Typography>
                  </div>
                </Box>

                <Box className="meta">
                  <span className="meta-item">
                    <CalendarMonthIcon className="meta-icon" />
                    {item.period}
                  </span>
                  <span className="meta-item">
                    <PlaceIcon className="meta-icon" />
                    {item.location}
                  </span>
                </Box>

                {item.highlights && (
                  <ul className="highlights">
                    {item.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                )}

                {/* {item.tags && (
                  <Box className="tags">
                    {item.tags.map((t, i) => (
                      <Chip key={i} label={t} variant="outlined" size="small" />
                    ))}
                  </Box>
                )} */}
              </Box>
            ))}
          </Box>
        </div>
      </div>
    </section>
  );
}

export default Education;
