// FutureLearning – "Currently Exploring" chips for upcoming technologies
import React from 'react';

const futureTechs = [
  { icon: '⚛️', label: 'React.js' },
  { icon: '🟢', label: 'Node.js' },
  { icon: '🚂', label: 'Express.js' },
  { icon: '🍃', label: 'MongoDB' },
  { icon: '🐙', label: 'Git & GitHub' },
  { icon: '🐍', label: 'Python' },
  { icon: '🔥', label: 'TypeScript' },
];

const FutureLearning = () => {
  return (
    <div className="future-learning fade-up">
      <h3 className="future-title">🔭 Currently Exploring</h3>
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
