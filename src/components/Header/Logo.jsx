// Logo Component
// Displays the MP monogram image with a purple→cyan gradient color treatment
// Clicking scrolls smoothly to the Home section
import React from 'react';
import mpLogo from '../../assets/mp-logo.png';

const Logo = ({ onClick }) => {
  return (
    <button
      className="logo"
      onClick={onClick}
      aria-label="Go to home section"
    >
      <span className="logo-img-wrap">
        {/*
          MP monogram logo — white lines on a dark background.
          A CSS mix-blend-mode: color overlay on the ::after pseudo-element
          tints the white strokes with a purple → cyan gradient.
          drop-shadow filter creates the ambient glow effect.
        */}
        <img
          src={mpLogo}
          alt="MP"
          className="logo-img"
          draggable="false"
        />
      </span>
    </button>
  );
};

export default Logo;
