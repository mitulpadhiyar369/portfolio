// ThemeToggle Component
// Switches between dark/light modes with animation
import React, { useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = ({ theme, onToggle }) => {
  const [spinning, setSpinning] = useState(false);

  const handleToggle = () => {
    setSpinning(true);
    onToggle();
    setTimeout(() => setSpinning(false), 500);
  };

  return (
    <button
      className="theme-toggle"
      onClick={handleToggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <span className={`theme-toggle-icon ${spinning ? 'spinning' : ''}`}>
        {theme === 'dark' ? <FiSun /> : <FiMoon />}
      </span>
    </button>
  );
};

export default ThemeToggle;
