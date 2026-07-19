// ScrollIndicator Component
// Animated scroll-down prompt at the bottom of the hero
import React from 'react';

const ScrollIndicator = () => {
  const handleClick = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className="scroll-indicator"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label="Scroll down to About section"
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      <div className="scroll-mouse" aria-hidden="true">
        <div className="scroll-wheel" />
      </div>
      <div className="scroll-arrow" aria-hidden="true">
        <span />
        <span />
      </div>
      <span>Scroll</span>
    </div>
  );
};

export default ScrollIndicator;
