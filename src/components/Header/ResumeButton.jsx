// ResumeButton Component
// Opens resume in a new browser tab with premium gradient button
import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import resumeFile from '../../assets/resume.jpg';

const ResumeButton = ({ className = 'resume-btn' }) => {
  return (
    <a
      href={resumeFile}
      className={className}
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
