// HighlightCards Component – Personal details cards
import React from 'react';
import { LuGraduationCap, LuSchool, LuTrendingUp, LuMapPin } from 'react-icons/lu';

const highlights = [
  { icon: <LuGraduationCap />, label: 'Education', value: 'B.Sc. Computer Science' },
  { icon: <LuSchool />, label: 'College', value: 'M.B. Patel Science College, Anand' },
  { icon: <LuTrendingUp />, label: 'Current CGPA', value: '8.27 / 10' },
  { icon: <LuMapPin />, label: 'Location', value: 'India' },
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
