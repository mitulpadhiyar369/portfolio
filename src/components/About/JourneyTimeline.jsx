// JourneyTimeline Component – Vertical animated timeline
import React from 'react';

const timelineItems = [
  {
    emoji: '🎓',
    text: 'Started my journey in Computer Science, driven by curiosity about how the web and software come to life. Every concept learned was another piece of a fascinating puzzle.',
  },
  {
    emoji: '📚',
    text: 'Currently pursuing B.Sc. Computer Science at M.B. Patel Science College, Anand — diving deep into programming fundamentals, data structures, and modern web technologies.',
  },
  {
    emoji: '🏆',
    text: 'Maintaining a strong academic record with a CGPA of 8.27 while simultaneously building real-world projects and sharpening my frontend development skills day by day.',
  },
];

const JourneyTimeline = () => {
  return (
    <div>
      <h3 className="timeline-title">
        <span aria-hidden="true">🗺️</span> My Journey
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
              <span className="timeline-emoji" aria-hidden="true">{item.emoji}</span>
              <p className="timeline-text">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JourneyTimeline;
