import React, { useEffect, useRef } from 'react';
import { Zap, ArrowRight, Users, Shield, Clock, MessageCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const WHATSAPP_NUMBER = '5541956766654';
const WHATSAPP_MESSAGE = 'Olá! Quero solicitar meu crédito com a CredFort.';

const services = [
  { name: 'Crédito Pessoal', path: '/credito-pessoal' },
  { name: 'Consignado', path: '/credito-consignado' },
  { name: 'Com Garantia', path: '/credito-garantia' },
  { name: 'FGTS', path: '/saque-aniversario-fgts' },
];

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(badgeRef.current, 
        { opacity: 0, y: -20 }, 
        { opacity: 1, y: 0, duration: 0.6 }
      )
      .fromTo(titleRef.current, 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 0.8 }, 
        '-=0.3'
      )
      .fromTo(descRef.current, 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.6 }, 
        '-=0.4'
      )
      .fromTo(ctaRef.current, 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.6 }, 
        '-=0.3'
      )
      .fromTo(servicesRef.current, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.5 }, 
        '-=0.2'
      )
      .fromTo(socialRef.current, 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.5 }, 
        '-=0.2'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank');
  };

  return (
    <section ref={heroRef} className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto">
        {/* Urgency Banner */}
        <div ref={badgeRef} className="flex justify-center mb-8 opacity-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold tracking-widest uppercase animate-pulse-glow">
            <Zap className="w-4 h-4" /> 
            <span>🔥 Promoção: Taxas a partir de 1.29% a.m. — Válido até hoje!</span>
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.1] mb-6 opacity-0">
            Crédito inteligente para quem{' '}
            <span className="gradient-text font-black italic">não tem tempo</span>{' '}
            a perder.
          </h1>
          
          <p ref={descRef} className="text-muted-foreground text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto opacity-0">
            Capital de giro, antecipação ou crédito pessoal com as menores taxas do mercado. 
            <strong className="text-foreground"> Aprovação em minutos, dinheiro na conta em até 24h.</strong>
          </p>

          {/* Quick service links */}
          <div ref={servicesRef} className="flex flex-wrap justify-center gap-3 mb-8 opacity-0">
            {services.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className="px-4 py-2 bg-secondary/50 hover:bg-primary/20 border border-border hover:border-primary/40 rounded-full text-sm font-medium text-muted-foreground hover:text-primary transition-all"
              >
                {service.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center mb-12 opacity-0">
            <button 
              onClick={handleWhatsApp}
              className="btn-primary text-base group"
            >
              <MessageCircle className="w-5 h-5" />
              SOLICITAR CRÉDITO AGORA 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="#simulador" className="btn-secondary">
              Simular Parcelas
            </a>
          </div>

          {/* Social Proof */}
          <div ref={socialRef} className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12 opacity-0">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center">
                    <Users className="w-4 h-4 text-muted-foreground" />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-foreground text-sm font-bold">+12.000 clientes</p>
                <p className="text-muted-foreground text-xs">Atendidos em 2024</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-success">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-bold">100% Seguro</span>
            </div>
            
            <div className="flex items-center gap-2 text-primary">
              <Clock className="w-5 h-5" />
              <span className="text-sm font-bold">Liberação em 24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
