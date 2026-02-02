import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type AnimationType = 'fadeUp' | 'fadeIn' | 'fadeLeft' | 'fadeRight' | 'scaleIn' | 'stagger';

interface UseScrollAnimationOptions {
  type?: AnimationType;
  delay?: number;
  duration?: number;
  staggerDelay?: number;
  threshold?: number;
}

export const useScrollAnimation = <T extends HTMLElement>(
  options: UseScrollAnimationOptions = {}
) => {
  const ref = useRef<T>(null);
  const { 
    type = 'fadeUp', 
    delay = 0, 
    duration = 0.8,
    threshold = 0.2 
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const animations: Record<AnimationType, gsap.TweenVars> = {
      fadeUp: { opacity: 0, y: 60 },
      fadeIn: { opacity: 0 },
      fadeLeft: { opacity: 0, x: -60 },
      fadeRight: { opacity: 0, x: 60 },
      scaleIn: { opacity: 0, scale: 0.9 },
      stagger: { opacity: 0, y: 40 },
    };

    gsap.set(element, animations[type]);

    const tween = gsap.to(element, {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: `top ${100 - threshold * 100}%`,
        toggleActions: 'play none none none',
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [type, delay, duration, threshold]);

  return ref;
};

export const useStaggerAnimation = <T extends HTMLElement>() => {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = container.children;
    
    gsap.set(children, { opacity: 0, y: 50 });

    ScrollTrigger.create({
      trigger: container,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(children, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, []);

  return containerRef;
};

export const AnimatedSection = ({ 
  children, 
  className = '',
  animation = 'fadeUp',
  delay = 0
}: { 
  children: React.ReactNode; 
  className?: string;
  animation?: AnimationType;
  delay?: number;
}) => {
  const ref = useScrollAnimation<HTMLDivElement>({ type: animation, delay });
  
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default useScrollAnimation;
