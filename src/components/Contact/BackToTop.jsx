// BackToTop – Smooth scroll to top button
import React from 'react';

const BackToTop = () => {
  const handleClick = () => {
    const el = document.getElementById('home');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      className="back-to-top"
      onClick={handleClick}
      aria-label="Back to top"
      id="back-to-top-btn"
    >
      <span className="back-to-top-arrow" aria-hidden="true">↑</span>
      Back to Top
    </button>
  );
};

export default BackToTop;
