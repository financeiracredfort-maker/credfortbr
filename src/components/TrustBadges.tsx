import React, { useEffect, useRef } from 'react';
import { Lock, ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TrustBadges = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const badges = containerRef.current?.querySelectorAll('.trust-badge');
      if (badges) {
        gsap.fromTo(badges, 
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 90%',
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-background py-10 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16">
        <div className="trust-badge opacity-0">
          <Lock className="w-5 h-5" /> SSL SECURE
        </div>
        <div className="trust-badge opacity-0">
          <ShieldCheck className="w-5 h-5" /> LGPD COMPLIANT
        </div>
        <div className="trust-badge opacity-0">
          <CheckCircle2 className="w-5 h-5" /> BACEN CERTIFIED
        </div>
        <div className="trust-badge opacity-0">
          <Award className="w-5 h-5" /> ISO 27001
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
