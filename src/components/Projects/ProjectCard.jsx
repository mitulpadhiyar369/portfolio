// ProjectCard – Single project card with placeholder content
import React from 'react';
import ProjectOverlay from './ProjectOverlay';
import projectImg from '../../assets/portfolio-project.jpg';

const ProjectCard = () => {
  const tags = ['React', 'CSS', 'JavaScript', 'HTML'];

  return (
    <article
      className="project-card fade-up delay-1"
      aria-label="My Portfolio Project"
    >
      {/* Thumbnail */}
      <div className="project-thumbnail" style={{ background: 'none' }}>
        <img 
          src={projectImg} 
          alt="My Portfolio" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Card Body */}
      <div className="project-body">
        <h3 className="project-title">My Portfolio</h3>
        <p className="project-description">
          A personal developer portfolio showcasing my profile, skills, technologies, and projects.
        </p>
        <div className="project-tags" role="list" aria-label="Technologies used">
          {tags.map((tag) => (
            <span key={tag} className="project-tag" role="listitem">{tag}</span>
          ))}
        </div>
      </div>

      {/* Hover Overlay */}
      <ProjectOverlay />
    </article>
  );
};

export default ProjectCard;
