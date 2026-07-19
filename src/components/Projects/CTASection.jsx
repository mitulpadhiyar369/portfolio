// CTASection for Projects – Scrolls to Technologies
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const CTASection = () => {
  const scrollToTech = () => {
    const el = document.getElementById('technologies');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="projects-cta fade-up">
      <h3>More Projects Coming Soon</h3>
      <p>
        My portfolio is a work in progress — just like me. New projects are being
        developed and will be showcased here as I continue to build, experiment,
        and grow as a developer.
      </p>
      <button
        className="btn-primary"
        onClick={scrollToTech}
        id="projects-cta-btn"
        aria-label="Explore my journey"
      >
        Explore My Journey
        <FiArrowRight aria-hidden="true" />
      </button>
    </div>
  );
};

export default CTASection;
