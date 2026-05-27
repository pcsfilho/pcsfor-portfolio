import { useState, useRef, useCallback, useEffect } from 'react';
import { Howl, Howler } from 'howler';

interface UseAudioOptions {
  src: string;
  volume?: number;
  loop?: boolean;
}

interface UseAudioReturn {
  isPlaying: boolean;
  isLoaded: boolean;
  isMuted: boolean;
  start: () => void;
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
  const volumeRef = useRef(volume);
  const shouldPlayWhenReady = useRef(false);
  const startRequested = useRef(false);
  const unlockHandlerRef = useRef<(() => void) | null>(null);

  const ensurePlay = useCallback(() => {
    const sound = soundRef.current;
    if (!sound) return;

    if (sound.playing()) {
      setIsPlaying(true);
      return;
    }

    if (!isLoaded) {
      shouldPlayWhenReady.current = true;
      return;
    }

    sound.volume(volumeRef.current);

    try {
      sound.play();
    } catch (error) {
      console.error('Audio play error:', error);
    }
  }, [isLoaded]);

  // Initialize Howl instance
  useEffect(() => {
    soundRef.current = new Howl({
      src: [src],
      volume: volumeRef.current,
      loop,
      preload: true,
      onload: () => {
        setIsLoaded(true);

        if (shouldPlayWhenReady.current || startRequested.current) {
          shouldPlayWhenReady.current = false;
          ensurePlay();
        }
      },
      onloaderror: (_id, error) => {
        console.error('Audio load error:', error);
      },
      onplayerror: (_id, error) => {
        console.error('Audio play error:', error);

        if (!unlockHandlerRef.current) {
          const unlockAndRetry = () => {
            Howler.off('unlock', unlockAndRetry);
            unlockHandlerRef.current = null;

            if (startRequested.current) {
              ensurePlay();
            }
          };

          unlockHandlerRef.current = unlockAndRetry;
          Howler.once('unlock', unlockAndRetry);
        }
      },
      onplay: () => {
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
      if (unlockHandlerRef.current) {
        Howler.off('unlock', unlockHandlerRef.current);
        unlockHandlerRef.current = null;
      }
      if (soundRef.current) {
        soundRef.current.unload();
      }
    };
  }, [src, loop, ensurePlay]);

  const start = useCallback(() => {
    startRequested.current = true;
    ensurePlay();
  }, [ensurePlay]);

  const play = useCallback(() => {
    start();
  }, [start]);

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
        start();
      }
    }
  }, [isPlaying, start]);

  return {
    isPlaying,
    isLoaded,
    isMuted,
    start,
    toggle,
    play,
    pause,
    mute,
    unmute,
  };
};

export default useAudio;
