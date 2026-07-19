// ProjectCard – Single project card with placeholder content
import React from 'react';
import ProjectOverlay from './ProjectOverlay';

const ProjectCard = ({ index, delay }) => {
  const icons = ['💻', '🎨', '⚙️', '🚀', '🌐', '📱'];
  const tags = [
    ['HTML', 'CSS', 'JavaScript'],
    ['React', 'CSS', 'JavaScript'],
    ['HTML', 'CSS', 'React'],
    ['JavaScript', 'HTML', 'CSS'],
    ['React', 'JavaScript', 'CSS'],
    ['HTML', 'CSS', 'JavaScript', 'React'],
  ];

  return (
    <article
      className={`project-card fade-up delay-${delay}`}
      aria-label={`Project placeholder ${index + 1}`}
    >
      {/* Thumbnail */}
      <div className="project-thumbnail">
        <div className="project-thumbnail-inner">
          <div className="project-thumbnail-icon" aria-hidden="true">
            {icons[index % icons.length]}
          </div>
          <span className="project-thumbnail-text">Project Image</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="project-body">
        <h3 className="project-title">Project Coming Soon</h3>
        <p className="project-description">
          This space is reserved for one of my upcoming development projects. Stay tuned
          for something exciting!
        </p>
        <div className="project-tags" role="list" aria-label="Technologies used">
          {(tags[index % tags.length]).map((tag) => (
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
