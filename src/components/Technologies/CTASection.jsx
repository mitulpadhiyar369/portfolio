// CTASection for Technologies – Scrolls to Projects
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const CTASection = () => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="tech-cta fade-up">
      <h3>Always Learning, Always Building</h3>
      <p>
        Technology evolves at a breathtaking pace — and I thrive in that environment.
        I embrace new challenges, continuously sharpen my existing skills, and channel
        every lesson learned into building better, smarter, and more meaningful digital
        experiences.
      </p>
      <button
        className="btn-primary"
        onClick={scrollToProjects}
        id="tech-cta-btn"
        aria-label="View my projects"
      >
        View My Projects
        <FiArrowRight aria-hidden="true" />
      </button>
    </div>
  );
};

export default CTASection;
