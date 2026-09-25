// ProjectGrid – Responsive grid of 6 project cards
import React from 'react';
import ProjectCard from './ProjectCard';

const DELAYS = [1, 2, 3, 1, 2, 3];

const ProjectGrid = () => {
  return (
    <div className="project-grid single-layout" role="list" aria-label="Project cards">
      <ProjectCard />
    </div>
  );
};

export default ProjectGrid;
