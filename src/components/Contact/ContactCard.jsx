// ContactCard – Single info card (email / linkedin / github / location)
import React from 'react';

const ContactCard = ({ icon, label, value, href }) => {
  const Tag = href ? 'a' : 'div';
  const props = href
    ? { href, target: href.startsWith('mailto') ? undefined : '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Tag className="contact-card" aria-label={`${label}: ${value}`} {...props}>
      <div className="contact-card-icon" aria-hidden="true">{icon}</div>
      <div>
        <span className="contact-card-label">{label}</span>
        <span className="contact-card-value">{value}</span>
      </div>
    </Tag>
  );
};

export default ContactCard;
