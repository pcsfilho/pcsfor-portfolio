import React from 'react';

interface AudioControllerProps {
  isPlaying: boolean;
  isMuted: boolean;
  onToggle: () => void;
}

const AudioController: React.FC<AudioControllerProps> = ({
  isPlaying,
  isMuted,
  onToggle,
}) => {
  const controlClasses = [
    'rq-audio-control',
    isPlaying && !isMuted && 'rq-audio-control--playing',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={controlClasses}
      onClick={onToggle}
      aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
      title={isMuted ? 'Ativar som' : 'Desativar som'}
    >
      {isMuted ? (
        // Muted icon
        <svg
          className="rq-audio-control__icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      ) : (
        // Audio bars (animated when playing)
        <div className="rq-audio-control__bars">
          <span className="rq-audio-control__bar" />
          <span className="rq-audio-control__bar" />
          <span className="rq-audio-control__bar" />
          <span className="rq-audio-control__bar" />
        </div>
      )}

      <span className="rq-audio-control__text">
        {isMuted ? 'Som' : 'Tocando'}
      </span>
    </button>
  );
};

export default AudioController;
