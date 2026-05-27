import { useState, useRef, useCallback, useEffect } from 'react';
import { Howl } from 'howler';

interface UseAudioOptions {
  src: string;
  volume?: number;
  loop?: boolean;
}

interface UseAudioReturn {
  isPlaying: boolean;
  isLoaded: boolean;
  isMuted: boolean;
  toggle: () => void;
  play: () => void;
  pause: () => void;
  mute: () => void;
  unmute: () => void;
}

export const useAudio = ({
  src,
  volume = 0.7,
  loop = true,
}: UseAudioOptions): UseAudioReturn => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const soundRef = useRef<Howl | null>(null);
  const hasStarted = useRef(false);
  const volumeRef = useRef(volume);

  // Initialize Howl instance
  useEffect(() => {
    console.log('Creating Howl with src:', src, 'volume:', volumeRef.current);

    soundRef.current = new Howl({
      src: [src],
      volume: volumeRef.current,
      loop,
      preload: true,
      onload: () => {
        console.log('Audio loaded successfully');
        setIsLoaded(true);
      },
      onloaderror: (_id, error) => {
        console.error('Audio load error:', error);
      },
      onplayerror: (_id, error) => {
        console.error('Audio play error:', error);
      },
      onplay: () => {
        console.log('Audio now playing, volume:', soundRef.current?.volume());
        setIsPlaying(true);
      },
      onpause: () => {
        setIsPlaying(false);
      },
      onstop: () => {
        setIsPlaying(false);
      },
    });

    return () => {
      if (soundRef.current) {
        soundRef.current.unload();
      }
    };
  }, [src, loop]);

  // Start audio on first user interaction
  const startAudio = useCallback(() => {
    if (!hasStarted.current && soundRef.current) {
      hasStarted.current = true;
      console.log('User interaction detected, starting audio...');
      soundRef.current.volume(volumeRef.current);
      soundRef.current.play();
    }
  }, []);

  // Listen for user interactions to start audio
  useEffect(() => {
    const handleInteraction = () => {
      startAudio();
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);
    document.addEventListener('keydown', handleInteraction);

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };
  }, [startAudio]);

  const play = useCallback(() => {
    if (soundRef.current && !isPlaying) {
      soundRef.current.volume(volumeRef.current);
      soundRef.current.play();
    }
  }, [isPlaying]);

  const pause = useCallback(() => {
    if (soundRef.current && isPlaying) {
      soundRef.current.pause();
    }
  }, [isPlaying]);

  const toggle = useCallback(() => {
    if (isMuted) {
      if (soundRef.current) {
        soundRef.current.mute(false);
        setIsMuted(false);
      }
    } else {
      if (soundRef.current) {
        soundRef.current.mute(true);
        setIsMuted(true);
      }
    }
  }, [isMuted]);

  const mute = useCallback(() => {
    if (soundRef.current) {
      soundRef.current.mute(true);
      setIsMuted(true);
    }
  }, []);

  const unmute = useCallback(() => {
    if (soundRef.current) {
      soundRef.current.mute(false);
      setIsMuted(false);
      if (!isPlaying) {
        soundRef.current.play();
      }
    }
  }, [isPlaying]);

  return {
    isPlaying,
    isLoaded,
    isMuted,
    toggle,
    play,
    pause,
    mute,
    unmute,
  };
};

export default useAudio;
