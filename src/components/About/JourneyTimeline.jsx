// JourneyTimeline Component – Vertical animated timeline
import React from 'react';
import { LuCompass, LuGraduationCap, LuBookOpen, LuTrophy } from 'react-icons/lu';

const timelineItems = [
  {
    icon: <LuGraduationCap />,
    text: 'Started my journey in Computer Science, driven by curiosity about how the web and software come to life. Every concept learned was another piece of a fascinating puzzle.',
  },
  {
    icon: <LuBookOpen />,
    text: 'Currently pursuing B.Sc. Computer Science at M.B. Patel Science College, Anand — diving deep into programming fundamentals, data structures, and modern web technologies.',
  },
  {
    icon: <LuTrophy />,
    text: 'Maintaining a strong academic record with a CGPA of 8.27 while simultaneously building real-world projects and sharpening my frontend development skills day by day.',
  },
];

const JourneyTimeline = () => {
  return (
    <div>
      <h3 className="timeline-title">
        <span aria-hidden="true" className="timeline-title-icon"><LuCompass /></span> My Journey
      </h3>
      <div className="timeline" role="list">
        {timelineItems.map((item, index) => (
          <div
            key={index}
            className={`timeline-item fade-up delay-${index + 1}`}
            role="listitem"
          >
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-card">
              <span className="timeline-emoji" aria-hidden="true">{item.icon}</span>
              <p className="timeline-text">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JourneyTimeline;
