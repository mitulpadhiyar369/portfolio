// ResumeButton Component
// Opens resume PDF in a new browser tab with premium gradient button
import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

// Replace href="#" with your actual Google Drive or hosted resume PDF link
const ResumeButton = () => {
  return (
    <a
      href="#"
      className="resume-btn"
      aria-label="View Resume"
      title="View Resume"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FiExternalLink size={14} />
      Resume
    </a>
  );
};

export default ResumeButton;
