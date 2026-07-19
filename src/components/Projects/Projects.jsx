// Projects Section
import React from 'react';
import '../../styles/Projects.css';
import SectionHeading from './SectionHeading';
import ProjectGrid from './ProjectGrid';
import ComingSoon from './ComingSoon';
import CTASection from './CTASection';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Projects = () => {
  useScrollAnimation();

  return (
    <section id="projects" className="projects" aria-label="Projects section">
      <div className="projects-container">
        <SectionHeading
          label="My Work"
          title="Featured Projects"
          subtitle="A collection of projects that showcase my learning journey, creativity, and passion for building modern web applications. More exciting projects will be added as I continue to grow as a developer."
        />

        {/* 6 Placeholder Cards */}
        <ProjectGrid />

        {/* Coming Soon Message */}
        <ComingSoon />

        {/* CTA */}
        <CTASection />
      </div>
    </section>
  );
};

export default Projects;
