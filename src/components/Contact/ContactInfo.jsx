// ContactInfo – Left column with info cards + availability
import React from 'react';
import { FiMail, FiLinkedin, FiGithub, FiMapPin } from 'react-icons/fi';
import ContactCard from './ContactCard';
import AvailabilityCard from './AvailabilityCard';

// Replace placeholder values with your actual details
const INFO_ITEMS = [
  {
    icon: <FiLinkedin />,
    label: 'LinkedIn',
    value: 'mitul-padhiyar-92433a3a0',
    href: 'https://www.linkedin.com/in/mitul-padhiyar-92433a3a0/',
  },
  {
    icon: <FiGithub />,
    label: 'GitHub',
    value: 'My GitHub Profile',      // ← replace
    href: '#',                          // ← replace with GitHub URL
  },
  {
    icon: <FiMail />,
    label: 'Email Me',
    value: 'mitulpadhiyar0369@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=mitulpadhiyar0369@gmail.com',
  },
  {
    icon: <FiMapPin />,
    label: 'Location',
    value: 'Anand,Gujarat,India',
    href: null,
  },
];

const ContactInfo = () => {
  return (
    <div className="contact-info slide-left">
      <h3 className="contact-info-title">Get In Touch</h3>
      {INFO_ITEMS.map((item) => (
        <ContactCard
          key={item.label}
          icon={item.icon}
          label={item.label}
          value={item.value}
          href={item.href}
        />
      ))}
      <AvailabilityCard />
    </div>
  );
};

export default ContactInfo;
