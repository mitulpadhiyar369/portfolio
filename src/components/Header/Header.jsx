// Header Component
// Fixed header with glassmorphism, hide-on-scroll-down, IntersectionObserver active nav
import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../../styles/Header.css';
import Logo from './Logo';
import Navbar from './Navbar';
import SocialLinks from './SocialLinks';
import ResumeButton from './ResumeButton';
import ThemeToggle from './ThemeToggle';
import MobileMenu from './MobileMenu';
import { FiMenu } from 'react-icons/fi';

const SECTIONS = ['home', 'about', 'projects', 'technologies', 'contact'];

const Header = ({ theme, onThemeToggle }) => {
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  // Hide on scroll down / show on scroll up
  const handleScroll = useCallback(() => {
    const current = window.scrollY;
    if (current > lastScrollY.current && current > 100) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    setIsScrolled(current > 20);
    lastScrollY.current = current;
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Active section via IntersectionObserver
  useEffect(() => {
    const observers = [];
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const scrollToHome = () => {
    const el = document.getElementById('home');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`header ${isHidden ? 'hidden' : ''} ${isScrolled ? 'scrolled' : ''}`}
        role="banner"
      >
        {/* Left: Logo */}
        <Logo onClick={scrollToHome} />

        {/* Center: Navigation */}
        <div className="header-center">
          <Navbar activeSection={activeSection} />
        </div>

        {/* Right: Social + Resume + Theme */}
        <div className="header-right">
          <SocialLinks />
          <ResumeButton />
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
          <button
            className="hamburger"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
          >
            <FiMenu />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
};

export default Header;
