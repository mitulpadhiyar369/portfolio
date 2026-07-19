// TechnologyCard – Individual skill card with icon, description, status, and progress
import React from 'react';
import ProgressBar from './ProgressBar';

const TechnologyCard = ({ tech, delay }) => {
  return (
    <div className={`tech-card fade-up delay-${delay}`} aria-label={`${tech.name} skill card`}>
      {/* Header: icon + name + badge */}
      <div className="tech-card-header">
        <div className="tech-icon-wrap" aria-hidden="true">
          {tech.icon}
        </div>
        <div className="tech-card-info">
          <h3 className="tech-card-name">{tech.name}</h3>
          <span className="tech-status-badge">{tech.status}</span>
        </div>
      </div>

      {/* Description */}
      <p className="tech-card-desc">{tech.description}</p>

      {/* Progress bar */}
      <ProgressBar value={tech.progress} label="Proficiency" />
    </div>
  );
};

export default TechnologyCard;
