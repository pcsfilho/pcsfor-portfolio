import React from 'react';

interface ScrollIndicatorProps {
  hidden?: boolean;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ hidden = false }) => {
  return (
    <div className={`rq-scroll-indicator ${hidden ? 'hidden' : ''}`}>
      <span className="rq-scroll-indicator__text">Role para baixo</span>
      <svg
        className="rq-scroll-indicator__arrow"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </div>
  );
};

export default ScrollIndicator;
