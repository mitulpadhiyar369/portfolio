// HeroButtons Component
// Primary "View Projects" and Secondary "Contact Me" CTA buttons
import React from 'react';
import { FiArrowRight, FiMail } from 'react-icons/fi';

const HeroButtons = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero-buttons">
      <button
        className="btn-primary"
        onClick={() => scrollTo('projects')}
        aria-label="View my projects"
        id="hero-view-projects-btn"
      >
        View Projects
        <FiArrowRight aria-hidden="true" />
      </button>
      <button
        className="btn-secondary"
        onClick={() => scrollTo('contact')}
        aria-label="Contact me"
        id="hero-contact-btn"
      >
        <FiMail aria-hidden="true" />
        Contact Me
      </button>
    </div>
  );
};

export default HeroButtons;
