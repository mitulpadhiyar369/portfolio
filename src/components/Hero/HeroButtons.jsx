// HeroButtons Component
// Primary "View Projects", Secondary "Resume", and "Contact Me" CTA buttons
import React from 'react';
import { FiArrowRight, FiDownload, FiMail } from 'react-icons/fi';

const HeroButtons = ({ onResumeOpen }) => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero-buttons">
      {/* 1st button: View Projects */}
      <button
        className="btn-primary"
        onClick={() => scrollTo('projects')}
        aria-label="View my projects"
        id="hero-view-projects-btn"
      >
        View Projects
        <FiArrowRight aria-hidden="true" />
      </button>

      {/* 2nd button: Resume — opens modal */}
      <button
        className="btn-secondary"
        onClick={onResumeOpen}
        aria-label="View and download my resume"
        id="hero-resume-btn"
        type="button"
      >
        <FiDownload aria-hidden="true" />
        Resume
      </button>

      {/* 3rd button: Contact Me */}
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
