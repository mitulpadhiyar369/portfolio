// FutureLearning – "Currently Exploring" chips for upcoming technologies
import React from 'react';
import { LuSparkles } from 'react-icons/lu';
import { 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiGithub, 
  SiPython, 
  SiTypescript 
} from 'react-icons/si';

const futureTechs = [
  { icon: <SiReact style={{ color: '#61dafb' }} />, label: 'React.js' },
  { icon: <SiNodedotjs style={{ color: '#339933' }} />, label: 'Node.js' },
  { icon: <SiExpress />, label: 'Express.js' },
  { icon: <SiMongodb style={{ color: '#47a248' }} />, label: 'MongoDB' },
  { icon: <SiGithub />, label: 'Git & GitHub' },
  { icon: <SiPython style={{ color: '#3776ab' }} />, label: 'Python' },
  { icon: <SiTypescript style={{ color: '#3178c6' }} />, label: 'TypeScript' },
];

const FutureLearning = () => {
  return (
    <div className="future-learning fade-up">
      <h3 className="future-title">
        <LuSparkles aria-hidden="true" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px', color: 'var(--accent-purple)' }} />
        Currently Exploring
      </h3>
      <p className="future-subtitle">Technologies I'm actively learning and plan to add to my skillset</p>
      <div className="future-chips" role="list" aria-label="Future technologies to learn">
        {futureTechs.map((tech) => (
          <span
            key={tech.label}
            className="future-chip"
            role="listitem"
            title={`Planning to learn ${tech.label}`}
          >
            <span className="future-chip-icon" aria-hidden="true">{tech.icon}</span>
            {tech.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FutureLearning;
