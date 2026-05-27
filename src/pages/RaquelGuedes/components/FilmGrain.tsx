import React from 'react';

interface FilmGrainProps {
  opacity?: number;
}

const FilmGrain: React.FC<FilmGrainProps> = ({ opacity = 0.035 }) => {
  return (
    <div
      className="rq-film-grain"
      style={{ opacity }}
      aria-hidden="true"
    />
  );
};

export default FilmGrain;
