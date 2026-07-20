// MobileMenu Component
// Full-screen animated drawer for mobile navigation
import React, { useEffect } from 'react';
import { FiX, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Logo from './Logo';

const NAV_ITEMS = ['Home', 'About', 'Projects', 'Technologies', 'Contact'];

const MobileMenu = ({ isOpen, onClose, activeSection }) => {
  // Prevent body scroll when menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleNavClick = (item) => {
    const sectionId = item.toLowerCase();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`mobile-drawer ${isOpen ? 'open' : ''}`}
        aria-label="Mobile navigation"
        role="dialog"
        aria-modal="true"
      >
        <div className="mobile-drawer-header">
          <Logo onClick={() => handleNavClick('Home')} />
          <button
            className="mobile-drawer-close"
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <FiX />
          </button>
        </div>

        <ul className="mobile-nav-list" role="list">
          {NAV_ITEMS.map((item, index) => (
            <li key={item} role="listitem">
              <button
                className={`mobile-nav-item ${activeSection === item.toLowerCase() ? 'active' : ''} ${isOpen ? 'stagger-visible' : ''}`}
                style={{ transitionDelay: isOpen ? `${index * 0.08}s` : '0s' }}
                onClick={() => handleNavClick(item)}
                aria-label={`Navigate to ${item} section`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        <div className="mobile-nav-footer">
          <div className="mobile-social">
            <a href="https://github.com/mitulpadhiyar369" aria-label="GitHub" title="GitHub" target="_blank" rel="noopener noreferrer">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/mitul-padhiyar-92433a3a0/" aria-label="LinkedIn" title="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FiLinkedin />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mitulpadhiyar0369@gmail.com" aria-label="Email" title="Email" target="_blank" rel="noopener noreferrer">
              <FiMail />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default MobileMenu;
