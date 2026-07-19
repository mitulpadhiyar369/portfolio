// AvailabilityCard – Shows open-to-work status with glowing dot
import React from 'react';

const AvailabilityCard = () => {
  return (
    <div className="availability-card" aria-label="Availability status">
      <div className="availability-header">
        <div className="availability-dot" aria-hidden="true" />
        <h4 className="availability-title">Currently Available</h4>
      </div>
      <p className="availability-text">
        Open to internships, collaborations, learning opportunities, and exciting
        web development projects where I can contribute and continue to grow.
      </p>
    </div>
  );
};

export default AvailabilityCard;
