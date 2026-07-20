// ContactInfo – Left column with info cards + availability
import React from 'react';
import { FiMail, FiLinkedin, FiGithub, FiMapPin } from 'react-icons/fi';
import ContactCard from './ContactCard';
import AvailabilityCard from './AvailabilityCard';

const ContactInfo = () => {
  const isMobile = typeof navigator !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const emailHref = isMobile 
    ? 'mailto:mitulpadhiyar0369@gmail.com' 
    : 'https://mail.google.com/mail/?view=cm&fs=1&to=mitulpadhiyar0369@gmail.com';

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
      value: 'mitulpadhiyar369',
      href: 'https://github.com/mitulpadhiyar369',
    },
    {
      icon: <FiMail />,
      label: 'Email Me',
      value: 'mitulpadhiyar0369@gmail.com',
      href: emailHref,
    },
    {
      icon: <FiMapPin />,
      label: 'Location',
      value: 'Anand,Gujarat,India',
      href: null,
    },
  ];

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
