// AboutContent Component – Left column: intro text + highlight cards + CTA
import React from 'react';
import HighlightCards from './HighlightCards';
import CTAButton from './CTAButton';

const AboutContent = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="about-left">
      {/* Section header */}
      <div className="about-content-text fade-up">
        <h3>Who Am I?</h3>
        <p>
          I'm Mitul Padhiyar — a driven Computer Science student with a genuine passion
          for building things that live on the web. Currently pursuing my B.Sc. at M.B.
          Patel Science College, Anand, I spend my time crafting responsive interfaces,
          exploring modern JavaScript frameworks, and continuously expanding my knowledge
          of software engineering principles.
        </p>
        <br />
        <p>
          With a CGPA of 8.27, I balance academic excellence with practical learning —
          because I believe the best developers are those who never stop being curious.
          My goal is to evolve into a full-stack engineer who builds meaningful, scalable,
          and beautifully designed digital products.
        </p>
      </div>

      {/* Personal highlights */}
      <HighlightCards />

      {/* CTA */}
      <CTAButton
        text="Let's Connect"
        onClick={scrollToContact}
        id="about-cta-btn"
      />
    </div>
  );
};

export default AboutContent;
