// ResumeButton Component
// Triggers the Resume Preview Modal when clicked
import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

const ResumeButton = ({ className = 'resume-btn', onResumeOpen }) => {
  return (
    <button
      className={className}
      onClick={onResumeOpen}
      aria-label="View Resume"
      title="View Resume"
      type="button"
    >
      <FiExternalLink size={14} />
      Resume
    </button>
  );
};

export default ResumeButton;
