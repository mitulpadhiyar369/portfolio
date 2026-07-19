// Footer – Copyright + Made with React + Back to Top
import React from 'react';
import BackToTop from './BackToTop';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <p className="footer-text">
        © {year} Made with{' '}
        <span className="footer-heart" aria-label="love">❤️</span>
        {' '}Builte by Mitul
      </p>
      <BackToTop />
    </footer>
  );
};

export default Footer;
