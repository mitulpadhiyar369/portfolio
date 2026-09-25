// ProjectOverlay – Hover overlay for project cards
import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectOverlay = () => {
  return (
    <div className="project-overlay" aria-hidden="true">
      <div className="project-overlay-buttons">
        <a 
          href="https://mitulpadhiyar369.github.io/portfolio/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="overlay-btn overlay-btn-primary" 
          title="Live Demo"
        >
          <FiExternalLink size={14} />
          Live Demo
        </a>
        <a 
          href="https://github.com/mitulpadhiyar369" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="overlay-btn overlay-btn-secondary" 
          title="GitHub"
        >
          <FiGithub size={14} />
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectOverlay;
