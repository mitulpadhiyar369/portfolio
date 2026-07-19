// Technologies Section
import React from 'react';
import '../../styles/Technologies.css';
import SkillGrid from './SkillGrid';
import FutureLearning from './FutureLearning';
import CTASection from './CTASection';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Technologies = () => {
  useScrollAnimation();

  return (
    <section id="technologies" className="technologies" aria-label="Technologies section">
      <div className="tech-container">
        {/* Section Header */}
        <div className="tech-header">
          <span className="section-label fade-up">Skills &amp; Tools</span>
          <h2 className="section-title fade-up delay-1">Building with Modern Technologies</h2>
          <p className="section-subtitle fade-up delay-2">
            From programming fundamentals to modern frontend development, these technologies
            represent my current knowledge and my commitment to continuous growth.
          </p>
        </div>

        {/* 2x2 Skill Grid */}
        <SkillGrid />

        {/* Future Learning Chips */}
        <FutureLearning />

        {/* CTA */}
        <CTASection />
      </div>
    </section>
  );
};

export default Technologies;
