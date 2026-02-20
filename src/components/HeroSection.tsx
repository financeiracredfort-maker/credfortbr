import React, { useEffect, useRef } from 'react';
import { Zap, ArrowRight, Users, Shield, Clock, MessageCircle, Star, CheckCircle2, Award, TrendingUp } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-home.jpg';
import CountdownTimer from './CountdownTimer';
import { trackWhatsAppClick, trackCTAClick } from '@/lib/analytics';
import { buildWhatsAppURL } from '@/lib/utm';

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP_NUMBER = '5541956766654';
const WHATSAPP_MESSAGE = 'Olá! Quero solicitar meu crédito com a CredFort. Podem me ajudar?';

const services = [
  { name: 'Crédito Pessoal', path: '/credito-pessoal' },
  { name: 'Consignado', path: '/credito-consignado' },
  { name: 'Com Garantia', path: '/credito-garantia' },
  { name: 'FGTS', path: '/saque-aniversario-fgts' },
  { name: 'Limpa Nome', path: '/limpa-nome' },
];

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(contentRef.current, 
        { opacity: 0, x: -60 }, 
        { opacity: 1, x: 0, duration: 1 }
      )
      .fromTo(imageRef.current, 
        { opacity: 0, scale: 1.1, x: 60 }, 
        { opacity: 1, scale: 1, x: 0, duration: 1.2 }, 
        '-=0.7'
      )
      .fromTo(statsRef.current?.children || [], 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.6 }, 
        '-=0.5'
      );

      // Parallax effect on hero image
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleWhatsApp = () => {
    trackCTAClick('solicitar_credito', 'hero');
    trackWhatsAppClick('hero_cta');
    window.open(buildWhatsAppURL(WHATSAPP_NUMBER, WHATSAPP_MESSAGE), '_blank');
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        ref={imageRef}
        className="absolute inset-0 z-0"
      >
        <img 
          src={heroImage} 
          alt="Família feliz conquistando seus sonhos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>
      
      <div className="relative z-10 w-full pt-28 pb-24 md:pt-36 md:pb-32 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Countdown Timer */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
            <CountdownTimer />
          </div>

          <div ref={contentRef} className="max-w-2xl opacity-0">
            {/* Trust Badge */}
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-primary font-bold text-sm uppercase tracking-widest">Correspondente Bancário Autorizado</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-foreground leading-[1.05] mb-6">
              O crédito que você precisa,{' '}
              <span className="gradient-text font-black italic">na velocidade que você merece.</span>
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl mb-6 leading-relaxed">
              Esqueça a burocracia dos bancos tradicionais. Aqui você tem{' '}
              <strong className="text-foreground">aprovação em minutos</strong> e{' '}
              <strong className="text-foreground">dinheiro na conta em até 24 horas</strong>.
              Crédito pessoal, consignado, com garantia e muito mais.
            </p>

            {/* Value Props */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="px-4 py-2 bg-success/10 border border-success/30 rounded-full text-success text-sm font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Sem consulta ao SPC/Serasa
              </div>
              <div className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-bold flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Aprovação em minutos
              </div>
              <div className="px-4 py-2 bg-secondary border border-border rounded-full text-foreground text-sm font-bold flex items-center gap-2">
                <Shield className="w-4 h-4" />
                100% Seguro
              </div>
            </div>

            {/* Quick service links */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-muted-foreground text-sm self-center mr-2">Serviços:</span>
              {services.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className="px-3 py-1.5 bg-secondary/50 hover:bg-primary/20 border border-border hover:border-primary/40 rounded-full text-xs font-medium text-muted-foreground hover:text-primary transition-all"
                >
                  {service.name}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button 
                onClick={handleWhatsApp}
                className="btn-primary text-base group shadow-lg shadow-primary/30"
              >
                <MessageCircle className="w-5 h-5" />
                SOLICITAR CRÉDITO AGORA 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="#simulador" className="btn-secondary backdrop-blur-md">
                <TrendingUp className="w-5 h-5" />
                Simular Parcelas
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center gap-6">
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
                  <p className="text-muted-foreground text-xs">Satisfeitos em 2024</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
                <span className="text-foreground font-bold ml-2">4.9/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div ref={statsRef} className="absolute bottom-0 left-0 right-0 z-20 bg-card/80 backdrop-blur-xl border-t border-border">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center opacity-0">
              <p className="text-2xl md:text-3xl font-black gradient-text">R$ 500M+</p>
              <p className="text-muted-foreground text-xs uppercase tracking-widest">Crédito Liberado</p>
            </div>
            <div className="text-center opacity-0">
              <p className="text-2xl md:text-3xl font-black text-foreground">12.000+</p>
              <p className="text-muted-foreground text-xs uppercase tracking-widest">Clientes Atendidos</p>
            </div>
            <div className="text-center opacity-0">
              <p className="text-2xl md:text-3xl font-black text-success">1.29%</p>
              <p className="text-muted-foreground text-xs uppercase tracking-widest">Taxa a partir de</p>
            </div>
            <div className="text-center opacity-0">
              <p className="text-2xl md:text-3xl font-black text-primary">24h</p>
              <p className="text-muted-foreground text-xs uppercase tracking-widest">Dinheiro na Conta</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
