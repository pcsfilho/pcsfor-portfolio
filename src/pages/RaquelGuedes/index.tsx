import React, { useEffect, useState, useCallback } from 'react';
import Lenis from 'lenis';

// Styles
import './styles.css';

// Components
import LoadingScreen from './components/LoadingScreen';
import ParticleEffect from './components/ParticleEffect';
import FilmGrain from './components/FilmGrain';
import Scene from './components/Scene';
import AudioController from './components/AudioController';
import ScrollIndicator from './components/ScrollIndicator';

// Hooks
import { useAudio } from './hooks/useAudio';
import { useTimeline } from './hooks/useTimeline';

// Data
import { scenes, audioConfig, experienceConfig } from './data/scenes';

const RaquelGuedes: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [hideScrollIndicator, setHideScrollIndicator] = useState(false);

  // Audio hook
  const {
    isPlaying,
    isMuted,
    toggle: toggleAudio,
  } = useAudio({
    src: audioConfig.src,
    volume: audioConfig.volume,
  });

  // Timeline hook
  const handleSceneEnter = useCallback((index: number) => {
    setCurrentSceneIndex(index);

    // Hide scroll indicator after certain scenes
    if (index >= experienceConfig.hideScrollIndicatorAfterScene) {
      setHideScrollIndicator(true);
    }
  }, []);

  useTimeline({
    sceneSelector: '.rq-scene',
    onSceneEnter: handleSceneEnter,
  });

  // Initialize Lenis smooth scroll
  useEffect(() => {
    if (isLoading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Add lenis class to html
    document.documentElement.classList.add('lenis');

    return () => {
      lenis.destroy();
      document.documentElement.classList.remove('lenis');
    };
  }, [isLoading]);

  // Handle loading complete
  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  // Toggle audio
  const handleAudioToggle = useCallback(() => {
    toggleAudio();
  }, [toggleAudio]);

  // Set page title
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'Raquel | 39 Anos';

    return () => {
      document.title = originalTitle;
    };
  }, []);

  return (
    <div className="rq-experience">
      {/* Loading Screen */}
      {isLoading && (
        <LoadingScreen
          onComplete={handleLoadingComplete}
          duration={3000}
          text="Uma história sobre luz..."
          subtitle="Toque para iniciar"
        />
      )}

      {/* Background Effects */}
      <ParticleEffect count={40} maxOpacity={0.5} speed={0.25} />
      <FilmGrain opacity={0.03} />

      {/* Scenes */}
      <div className="rq-smooth-scroll">
        {scenes.map((scene, index) => (
          <Scene key={scene.id} scene={scene} index={index} />
        ))}
      </div>

      {/* UI Controls */}
      {!isLoading && (
        <>
          <AudioController
            isPlaying={isPlaying}
            isMuted={isMuted}
            onToggle={handleAudioToggle}
          />

          {experienceConfig.showScrollIndicator && (
            <ScrollIndicator hidden={hideScrollIndicator} />
          )}
        </>
      )}
    </div>
  );
};

export default RaquelGuedes;
