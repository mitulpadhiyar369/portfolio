// ProjectGrid – Responsive grid of 6 project cards
import React from 'react';
import ProjectCard from './ProjectCard';

const DELAYS = [1, 2, 3, 1, 2, 3];

const ProjectGrid = () => {
  return (
    <div className="project-grid" role="list" aria-label="Project cards">
      {Array.from({ length: 6 }, (_, i) => (
        <ProjectCard key={i} index={i} delay={DELAYS[i]} />
      ))}
    </div>
  );
};

export default ProjectGrid;
