import React, { useEffect, useState } from 'react';
import ParticleEffect from './ParticleEffect';

interface LoadingScreenProps {
  onComplete?: () => void;
  duration?: number;
  text?: string;
  subtitle?: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onComplete,
  duration = 4000,
  text = 'Uma história sobre luz...',
  subtitle = 'Toque para iniciar',
}) => {
  const [isHidden, setIsHidden] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // If user has already interacted, start the timer
    if (hasInteracted) {
      const timer = setTimeout(() => {
        setIsHidden(true);
        setTimeout(() => {
          onComplete?.();
        }, 1500); // Wait for fade out animation
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [hasInteracted, duration, onComplete]);

  const handleInteraction = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
    }
  };

  return (
    <div
      className={`rq-loading ${isHidden ? 'hidden' : ''}`}
      onClick={handleInteraction}
      onTouchStart={handleInteraction}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleInteraction();
        }
      }}
    >
      <ParticleEffect count={30} maxOpacity={0.4} speed={0.2} />

      <p className="rq-loading__text">{text}</p>

      {!hasInteracted && (
        <span className="rq-loading__subtitle">{subtitle}</span>
      )}
    </div>
  );
};

export default LoadingScreen;
