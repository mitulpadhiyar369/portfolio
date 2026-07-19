// SectionHeading – Reusable section header component
import React from 'react';

const SectionHeading = ({ label, title, subtitle, centered = true }) => {
  return (
    <div className={`projects-header ${centered ? 'text-center' : ''} fade-up`}>
      <span className="section-label">{label}</span>
      <h2 className="section-title fade-up delay-1">{title}</h2>
      {subtitle && (
        <p className="section-subtitle fade-up delay-2">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;
