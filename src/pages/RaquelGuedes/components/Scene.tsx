import React, { useState } from 'react';
import type { Scene as SceneType } from '../data/scenes';
import CinematicText from './CinematicText';

interface SceneProps {
  scene: SceneType;
  index: number;
}

const Scene: React.FC<SceneProps> = ({ scene, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const sceneClasses = [
    'rq-scene',
    scene.type === 'text-only' && 'rq-scene--intro',
    scene.id === 'final' && 'rq-scene--final',
  ]
    .filter(Boolean)
    .join(' ');

  const mediaClasses = [
    'rq-scene__media',
    scene.animation === 'kenburns' && 'rq-scene__media--kenburns',
    scene.animation === 'parallax' && 'rq-scene__media--parallax',
    scene.isPortrait && 'rq-scene__media--portrait',
  ]
    .filter(Boolean)
    .join(' ');

  const contentClasses = [
    scene.textPosition === 'left' && 'rq-scene__content--left',
    scene.textPosition === 'right' && 'rq-scene__content--right',
    scene.textPosition === 'bottom' && 'rq-scene__content--bottom',
  ]
    .filter(Boolean)
    .join(' ');

  const overlayClasses = [
    'rq-scene__overlay',
    scene.overlayDark && 'rq-scene__overlay--dark',
  ]
    .filter(Boolean)
    .join(' ');

  // Check if it's the final scene (special layout)
  const isFinalScene = scene.id === 'final';

  return (
    <section
      className={sceneClasses}
      data-scene-id={scene.id}
      data-scene-index={index}
    >
      {/* Background Media */}
      {scene.type === 'photo' && scene.media && (
        <div className={mediaClasses}>
          <img
            src={scene.media}
            alt={scene.mediaAlt || ''}
            className={imageLoaded ? 'loaded' : ''}
            onLoad={() => setImageLoaded(true)}
            loading={index < 3 ? 'eager' : 'lazy'}
          />
          <div className={overlayClasses} />
        </div>
      )}

      {scene.type === 'video' && scene.media && (
        <div className={mediaClasses}>
          <video
            src={scene.media}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className={imageLoaded ? 'loaded' : ''}
            onCanPlay={() => setImageLoaded(true)}
          />
          <div className={overlayClasses} />
        </div>
      )}

      {/* Content */}
      {isFinalScene ? (
        <div className="rq-final-message">
          {scene.title && <p className="rq-age">{scene.title}</p>}
          {scene.subtitle && <p className="rq-age-label">{scene.subtitle}</p>}
          <div className="rq-divider" style={{ marginTop: '3rem' }} />
          {scene.paragraph && (
            <p
              className="rq-subtitle"
              style={{ marginTop: '2rem', fontStyle: 'italic' }}
            >
              {scene.paragraph}
            </p>
          )}
        </div>
      ) : (
        <CinematicText
          label={scene.label}
          title={scene.title}
          titleGold={scene.id === 'ela-brilho'}
          titleItalic={scene.id === 'intro'}
          subtitle={scene.subtitle}
          subtitleItalic={scene.id === 'nos'}
          quote={scene.quote}
          paragraph={scene.paragraph}
          className={contentClasses}
        />
      )}
    </section>
  );
};

export default Scene;
