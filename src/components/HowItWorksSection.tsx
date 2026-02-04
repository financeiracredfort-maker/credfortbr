import React, { useEffect, useRef } from 'react';
import { FileSearch, MessageCircle, CheckCircle, Banknote, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP_NUMBER = '5541956766654';
const WHATSAPP_MESSAGE = 'Olá! Quero iniciar minha simulação de crédito agora!';

interface Step {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
  highlight?: string;
}

const steps: Step[] = [
  {
    icon: <MessageCircle className="w-8 h-8" />,
    number: '01',
    title: 'Entre em Contato',
    description: 'Fale conosco pelo WhatsApp ou preencha o simulador. É rápido e sem compromisso.',
    highlight: '30 segundos'
  },
  {
    icon: <FileSearch className="w-8 h-8" />,
    number: '02',
    title: 'Análise Personalizada',
    description: 'Nossos consultores analisam seu perfil e encontram as melhores condições para você.',
    highlight: 'Sem burocracia'
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    number: '03',
    title: 'Aprovação Rápida',
    description: 'Com análise inteligente, seu crédito é aprovado em minutos, de forma 100% digital.',
    highlight: 'Em minutos'
  },
  {
    icon: <Banknote className="w-8 h-8" />,
    number: '04',
    title: 'Dinheiro na Conta',
    description: 'Após a assinatura digital do contrato, o dinheiro cai na sua conta em até 24 horas.',
    highlight: 'Em até 24h'
  }
];

const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the connecting line
      if (lineRef.current) {
        gsap.fromTo(lineRef.current, 
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
            }
          }
        );
      }

      // Animate steps with stagger
      const stepElements = stepsRef.current?.children;
      if (stepElements) {
        gsap.fromTo(stepElements,
          { opacity: 0, y: 60, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank');
  };

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-b from-background to-secondary/30 overflow-hidden" id="como-funciona">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">
            Processo Simples
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Como Funciona?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Do primeiro contato ao dinheiro na conta em <span className="text-primary font-bold">4 passos simples</span>. 
            Sem burocracia, sem complicação.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div 
            ref={lineRef}
            className="hidden lg:block absolute top-24 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary via-primary/50 to-primary origin-left"
            style={{ transformOrigin: 'left center' }}
          />

          <div ref={stepsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative group"
              >
                {/* Card */}
                <div className="card-glass p-8 h-full text-center hover:border-primary/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:shadow-primary/10">
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-black text-sm shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 mx-auto mt-4 mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Highlight Badge */}
                  {step.highlight && (
                    <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-success/10 border border-success/30 text-success text-xs font-bold">
                      {step.highlight}
                    </div>
                  )}
                </div>

                {/* Arrow (Mobile/Tablet) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <ArrowRight className="w-6 h-6 text-primary rotate-90 md:rotate-0" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border">
            <div className="text-left">
              <p className="text-foreground font-bold text-lg">Pronto para começar?</p>
              <p className="text-muted-foreground text-sm">Inicie sua simulação agora mesmo!</p>
            </div>
            <button 
              onClick={handleWhatsApp}
              className="btn-primary whitespace-nowrap group"
            >
              <MessageCircle className="w-5 h-5" />
              Iniciar Simulação
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
