// About Section – Two-column layout with timeline and creative right side
import React, { useEffect } from 'react';
import '../../styles/About.css';
import AboutContent from './AboutContent';
import JourneyTimeline from './JourneyTimeline';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const About = () => {
  useScrollAnimation();

  return (
    <section id="about" className="about" aria-label="About section">
      <div className="about-container">
        {/* Section Header */}
        <div className="about-header">
          <span className="section-label fade-up">About Me</span>
          <h2 className="section-title fade-up delay-1">Who I Am?</h2>
          <p className="section-subtitle fade-up delay-2">
            A passionate Computer Science student who enjoys building modern web applications,
            continuously learning new technologies, and transforming ideas into real-world
            digital experiences.
          </p>
        </div>

        {/* Content Grid */}
        <div className="about-grid">
          {/* Left: Text + Cards + CTA */}
          <div className="slide-left">
            <AboutContent />
          </div>

          {/* Right: Timeline + Code Decoration */}
          <div className="about-right slide-right">
            <JourneyTimeline />

            {/* Decorative floating code snippet */}
            <div className="about-code-deco" aria-hidden="true">
              <span className="code-line"><span className="code-keyword">const</span> <span className="code-var">developer</span> = {'{'}</span>
              <span className="code-line">  <span className="code-var">name</span>: <span className="code-string">"Mitul Padhiyar"</span>,</span>
              <span className="code-line">  <span className="code-var">role</span>: <span className="code-string">"Frontend Developer"</span>,</span>
              <span className="code-line">  <span className="code-var">cgpa</span>: <span className="code-number">8.27</span>,</span>
              <span className="code-line">  <span className="code-var">passion</span>: <span className="code-string">"Building the Web"</span>,</span>
              <span className="code-line">  <span className="code-var">isLearning</span>: <span className="code-keyword">true</span>,</span>
              <span className="code-line">{'}'}</span>
              <span className="code-line code-comment">// Always growing 🚀</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
