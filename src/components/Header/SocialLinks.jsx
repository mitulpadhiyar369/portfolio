// SocialLinks Component
// GitHub, LinkedIn, Gmail icons with hover effects
import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

// Replace placeholder hrefs with your actual links
const links = [
  { icon: <FiGithub />, href: 'https://github.com/mitulpadhiyar369', label: 'GitHub Profile', title: 'GitHub' },
  { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/mitul-padhiyar-92433a3a0/', label: 'LinkedIn Profile', title: 'LinkedIn' },
  { icon: <FiMail />, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=mitulpadhiyar0369@gmail.com', label: 'Send Email', title: 'Email' },
];

const SocialLinks = () => {
  return (
    <div className="social-links" role="list">
      {links.map((link) => (
        <a
          key={link.title}
          href={link.href}
          className="social-link"
          aria-label={link.label}
          title={link.title}
          target={!link.href.startsWith('mailto:') ? '_blank' : undefined}
          rel={!link.href.startsWith('mailto:') ? 'noopener noreferrer' : undefined}
          role="listitem"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
