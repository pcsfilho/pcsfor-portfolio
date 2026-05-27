import { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface UseTimelineOptions {
  sceneSelector: string;
  onSceneEnter?: (index: number) => void;
  onSceneLeave?: (index: number) => void;
}

export const useTimeline = ({
  sceneSelector,
  onSceneEnter,
  onSceneLeave,
}: UseTimelineOptions) => {
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  const initTimeline = useCallback(() => {
    // Clear previous triggers
    triggersRef.current.forEach(trigger => trigger.kill());
    triggersRef.current = [];

    const scenes = document.querySelectorAll(sceneSelector);

    scenes.forEach((scene, index) => {
      // Content animations
      const content = scene.querySelector('.rq-scene__content');
      const title = scene.querySelector('.rq-title');
      const subtitle = scene.querySelector('.rq-subtitle');
      const quote = scene.querySelector('.rq-quote');
      const paragraph = scene.querySelector('.rq-paragraph');
      const label = scene.querySelector('.rq-label');
      const media = scene.querySelector('.rq-scene__media img, .rq-scene__media video');

      // Create animation timeline for this scene
      const tl = gsap.timeline({
        paused: true,
      });

      // Label animation
      if (label) {
        tl.fromTo(
          label,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          0
        );
      }

      // Title animation
      if (title) {
        tl.fromTo(
          title,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
          0.2
        );
      }

      // Subtitle animation
      if (subtitle) {
        tl.fromTo(
          subtitle,
          { opacity: 0, y: 30 },
          { opacity: 0.9, y: 0, duration: 1, ease: 'power3.out' },
          0.4
        );
      }

      // Quote animation
      if (quote) {
        tl.fromTo(
          quote,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' },
          0.3
        );
      }

      // Paragraph animation
      if (paragraph) {
        tl.fromTo(
          paragraph,
          { opacity: 0, y: 20 },
          { opacity: 0.85, y: 0, duration: 1, ease: 'power3.out' },
          0.6
        );
      }

      // Media loaded class
      if (media) {
        const handleLoad = () => {
          media.classList.add('loaded');
        };

        if (media instanceof HTMLImageElement) {
          if (media.complete) {
            handleLoad();
          } else {
            media.addEventListener('load', handleLoad);
          }
        } else if (media instanceof HTMLVideoElement) {
          if (media.readyState >= 3) {
            handleLoad();
          } else {
            media.addEventListener('canplay', handleLoad);
          }
        }
      }

      // Create ScrollTrigger
      const trigger = ScrollTrigger.create({
        trigger: scene,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => {
          tl.play();
          onSceneEnter?.(index);
        },
        onLeave: () => {
          onSceneLeave?.(index);
        },
        onEnterBack: () => {
          tl.play();
          onSceneEnter?.(index);
        },
        onLeaveBack: () => {
          tl.reverse();
          onSceneLeave?.(index);
        },
      });

      triggersRef.current.push(trigger);
    });

    // Refresh ScrollTrigger
    ScrollTrigger.refresh();
  }, [sceneSelector, onSceneEnter, onSceneLeave]);

  const killTimeline = useCallback(() => {
    triggersRef.current.forEach(trigger => trigger.kill());
    triggersRef.current = [];
    if (timelineRef.current) {
      timelineRef.current.kill();
      timelineRef.current = null;
    }
  }, []);

  const refresh = useCallback(() => {
    ScrollTrigger.refresh();
  }, []);

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      initTimeline();
    }, 100);

    return () => {
      clearTimeout(timer);
      killTimeline();
    };
  }, [initTimeline, killTimeline]);

  return {
    initTimeline,
    killTimeline,
    refresh,
  };
};

// Ken Burns animation for images
export const useKenBurns = (selector: string, duration: number = 20) => {
  useEffect(() => {
    const images = document.querySelectorAll(selector);

    images.forEach((img) => {
      gsap.fromTo(
        img,
        {
          scale: 1,
          x: '0%',
          y: '0%',
        },
        {
          scale: 1.1,
          x: '-2%',
          y: '-1%',
          duration,
          ease: 'none',
          repeat: -1,
          yoyo: true,
        }
      );
    });

    return () => {
      gsap.killTweensOf(selector);
    };
  }, [selector, duration]);
};

// Parallax effect
export const useParallax = (selector: string, speed: number = 0.5) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    elements.forEach((el) => {
      gsap.to(el, {
        yPercent: -30 * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: el.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === selector) {
          trigger.kill();
        }
      });
    };
  }, [selector, speed]);
};

export default useTimeline;
