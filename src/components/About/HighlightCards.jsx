// HighlightCards Component – Personal details cards
import React from 'react';

const highlights = [
  { icon: '🎓', label: 'Education', value: 'B.Sc. Computer Science' },
  { icon: '🏫', label: 'College', value: 'M.B. Patel Science College, Anand' },
  { icon: '📊', label: 'Current CGPA', value: '8.27 / 10' },
  { icon: '🌍', label: 'Location', value: 'India' },
];

const HighlightCards = () => {
  return (
    <div className="highlight-cards">
      {highlights.map((item, index) => (
        <div
          key={item.label}
          className={`highlight-card fade-up delay-${index + 1}`}
        >
          <span className="highlight-icon" aria-hidden="true">{item.icon}</span>
          <div>
            <span className="highlight-label">{item.label}</span>
            <span className="highlight-value">{item.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HighlightCards;
