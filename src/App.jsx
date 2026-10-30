// App.jsx – Root component with theme management and resume modal state
import React, { useState, useEffect } from 'react';
import './styles/global.css';
import GlobalBackground from './components/GlobalBackground/GlobalBackground';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Technologies from './components/Technologies/Technologies';
import Contact from './components/Contact/Contact';
import ResumeModal from './components/Resume/ResumeModal';

const App = () => {
  // ---------- Theme Management ----------
  // Reads from localStorage, defaults to 'dark'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  // Apply theme attribute to document root + persist to localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // ---------- Resume Modal State ----------
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const openResume = () => setIsResumeOpen(true);
  const closeResume = () => setIsResumeOpen(false);

  return (
    <div className="app" data-theme={theme}>
      {/* Global cinematic background — fixed, behind everything, z-index: -1 */}
      <GlobalBackground />

      {/* Fixed Header */}
      <Header theme={theme} onThemeToggle={handleThemeToggle} onResumeOpen={openResume} />

      {/* Main Sections */}
      <main>
        <Hero onResumeOpen={openResume} />
        <About />
        <Projects />
        <Technologies />
        <Contact />
      </main>

      {/* Resume Preview Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={closeResume} />
    </div>
  );
};

export default App;
