// CTAButton Component – Reusable premium call-to-action button
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const CTAButton = ({ text = "Let's Connect", onClick, href, id }) => {
  if (href) {
    return (
      <a href={href} className="cta-btn" id={id} aria-label={text}>
        {text}
        <FiArrowRight aria-hidden="true" />
      </a>
    );
  }

  return (
    <button className="cta-btn" onClick={onClick} id={id} aria-label={text}>
      {text}
      <FiArrowRight aria-hidden="true" />
    </button>
  );
};

export default CTAButton;
