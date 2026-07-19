// Navbar Component
// Navigation items with active state detection & smooth scroll
import React from 'react';

const NAV_ITEMS = ['Home', 'About', 'Projects', 'Technologies', 'Contact'];

const Navbar = ({ activeSection }) => {
  const handleNavClick = (item) => {
    const sectionId = item.toLowerCase();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar" aria-label="Main navigation">
      {NAV_ITEMS.map((item) => (
        <button
          key={item}
          className={`nav-item ${activeSection === item.toLowerCase() ? 'active' : ''}`}
          onClick={() => handleNavClick(item)}
          aria-label={`Navigate to ${item} section`}
          aria-current={activeSection === item.toLowerCase() ? 'page' : undefined}
        >
          {item}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
