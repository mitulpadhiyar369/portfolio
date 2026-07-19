// ProjectOverlay – Hover overlay for project cards
import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectOverlay = () => {
  return (
    <div className="project-overlay" aria-hidden="true">
      <p className="project-overlay-text">Project Details Coming Soon</p>
      <div className="project-overlay-buttons">
        <button className="overlay-btn overlay-btn-primary" disabled aria-disabled="true" title="Live demo coming soon">
          <FiExternalLink size={14} />
          Live Demo
        </button>
        <button className="overlay-btn overlay-btn-secondary" disabled aria-disabled="true" title="GitHub link coming soon">
          <FiGithub size={14} />
          GitHub
        </button>
      </div>
    </div>
  );
};

export default ProjectOverlay;
