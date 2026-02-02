import React, { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, MessageCircle, Shield, Clock, Star, Users, Zap, TrendingUp, Award, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatedSection, useStaggerAnimation } from '@/hooks/useScrollAnimation';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP_NUMBER = '5541956766654';

interface ServiceBenefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

interface FAQ {
  question: string;
  answer: string;
}

interface ServicePageProps {
  serviceName: string;
  headline: string;
  subheadline: string;
  heroDescription: string;
  benefits: ServiceBenefit[];
  features: string[];
  testimonials: Testimonial[];
  faqs: FAQ[];
  ctaText: string;
  urgencyText?: string;
  minValue?: string;
  maxValue?: string;
  taxaMin?: string;
  prazoMax?: string;
  heroImage?: string;
}

const ServicePageTemplate: React.FC<ServicePageProps> = ({
  serviceName,
  headline,
  subheadline,
  heroDescription,
  benefits,
  features,
  testimonials,
  faqs,
  ctaText,
  urgencyText = '🔥 Liberação em até 24 horas!',
  minValue = 'R$ 1.000',
  maxValue = 'R$ 500.000',
  taxaMin = '1.29%',
  prazoMax = '120 meses',
  heroImage,
}) => {
  const benefitsRef = useStaggerAnimation<HTMLDivElement>();
  const featuresRef = useStaggerAnimation<HTMLDivElement>();
  const heroRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.fromTo(heroContentRef.current, 
        { opacity: 0, x: -60 }, 
        { opacity: 1, x: 0, duration: 1 }
      )
      .fromTo(heroImageRef.current, 
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
      if (heroImageRef.current) {
        gsap.to(heroImageRef.current, {
          yPercent: 20,
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

  const handleWhatsApp = (message: string) => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section with Image */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        {heroImage && (
          <div 
            ref={heroImageRef}
            className="absolute inset-0 z-0"
          >
            <img 
              src={heroImage} 
              alt={serviceName}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        )}

        {/* Fallback gradient if no image */}
        {!heroImage && (
          <>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full -z-10" />
          </>
        )}
        
        <div className="relative z-10 w-full pt-28 pb-16 md:pt-36 md:pb-24 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Urgency Badge */}
            <div className="flex justify-start mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-md border border-primary/40 text-primary text-xs font-bold tracking-widest uppercase animate-pulse-glow">
                <Zap className="w-4 h-4" /> 
                <span>{urgencyText}</span>
              </div>
            </div>

            <div ref={heroContentRef} className="max-w-2xl opacity-0">
              <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block flex items-center gap-2">
                <Award className="w-4 h-4" />
                {serviceName}
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] mb-6">
                {headline}{' '}
                <span className="gradient-text font-black italic">{subheadline}</span>
              </h1>
              
              <p className="text-muted-foreground text-lg md:text-xl mb-8 leading-relaxed">
                {heroDescription}
              </p>

              {/* Value Props Pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="px-4 py-2 bg-success/10 border border-success/30 rounded-full text-success text-sm font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Taxa a partir de {taxaMin} a.m.
                </div>
                <div className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-bold flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Dinheiro em 24h
                </div>
                <div className="px-4 py-2 bg-secondary border border-border rounded-full text-foreground text-sm font-bold flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  100% Seguro
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button 
                  onClick={() => handleWhatsApp(`Olá! Tenho interesse em ${serviceName}. Gostaria de uma simulação personalizada.`)}
                  className="btn-primary text-base group shadow-lg shadow-primary/30"
                >
                  <MessageCircle className="w-5 h-5" />
                  {ctaText}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => handleWhatsApp(`Olá! Quero saber mais sobre ${serviceName}.`)}
                  className="btn-secondary backdrop-blur-md"
                >
                  <Sparkles className="w-5 h-5" />
                  Ver Condições Especiais
                </button>
              </div>

              {/* Social Proof */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center overflow-hidden">
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
                <p className="text-2xl md:text-3xl font-black gradient-text">{minValue}</p>
                <p className="text-muted-foreground text-xs uppercase tracking-widest">Valor Mínimo</p>
              </div>
              <div className="text-center opacity-0">
                <p className="text-2xl md:text-3xl font-black text-foreground">{maxValue}</p>
                <p className="text-muted-foreground text-xs uppercase tracking-widest">Valor Máximo</p>
              </div>
              <div className="text-center opacity-0">
                <p className="text-2xl md:text-3xl font-black text-success">{taxaMin}</p>
                <p className="text-muted-foreground text-xs uppercase tracking-widest">Taxa a partir de</p>
              </div>
              <div className="text-center opacity-0">
                <p className="text-2xl md:text-3xl font-black text-primary">{prazoMax}</p>
                <p className="text-muted-foreground text-xs uppercase tracking-widest">Prazo Máximo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-8 bg-secondary/50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            <div className="flex items-center gap-2 text-sm font-bold">
              <Shield className="w-5 h-5 text-success" />
              <span>SSL SECURE</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-bold">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>LGPD COMPLIANT</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-bold">
              <Award className="w-5 h-5 text-primary" />
              <span>BACEN CERTIFIED</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-bold">
              <TrendingUp className="w-5 h-5 text-success" />
              <span>+R$ 500M LIBERADOS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">Vantagens Exclusivas</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Por que escolher nosso <span className="gradient-text">{serviceName}</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Oferecemos as melhores condições do mercado com atendimento humanizado e taxas justas
            </p>
          </AnimatedSection>

          <div ref={benefitsRef} className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card-glass p-8 hover:border-primary/40 transition-all group hover:-translate-y-2 duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Checklist */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fadeRight">
              <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">Diferenciais</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Tudo que você precisa em um só lugar
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Nosso {serviceName.toLowerCase()} foi desenvolvido pensando em você, com todas as facilidades que você merece.
              </p>
              
              <div ref={featuresRef} className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-secondary/50 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <p className="text-foreground text-sm font-medium">{feature}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeLeft">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-10 border border-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] rounded-full" />
                
                <div className="text-center relative z-10">
                  <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Oferta Especial</p>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Taxa a partir de</h3>
                  <p className="text-5xl font-black gradient-text mb-2">{taxaMin} a.m.</p>
                  <p className="text-muted-foreground mb-8">Para clientes aprovados hoje</p>
                  
                  <button 
                    onClick={() => handleWhatsApp(`Olá! Vi a oferta especial de ${serviceName} com taxa de ${taxaMin} e quero aproveitar!`)}
                    className="btn-primary w-full justify-center"
                  >
                    <Zap className="w-5 h-5" />
                    Garantir Minha Taxa
                  </button>
                  
                  <p className="text-muted-foreground text-xs mt-4">*Sujeito a análise de crédito</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">Depoimentos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-muted-foreground">Histórias reais de pessoas que transformaram suas vidas</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} animation="fadeUp" delay={index * 0.1}>
                <div className="card-glass p-8 h-full relative">
                  <div className="absolute top-4 right-4 text-6xl text-primary/10 font-serif">"</div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 relative z-10">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Dúvidas Frequentes
            </h2>
            <p className="text-muted-foreground">Encontre respostas para as principais perguntas</p>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} animation="fadeUp" delay={index * 0.1}>
                <details className="group card-glass p-6 cursor-pointer">
                  <summary className="flex justify-between items-center font-bold text-foreground list-none">
                    {faq.question}
                    <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-muted-foreground mt-4 leading-relaxed">{faq.answer}</p>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <AnimatedSection animation="scaleIn">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjIiIGZpbGw9InJnYmEoMCwwLDAsMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-30" />
            
            <div className="relative z-10">
              <Zap className="w-16 h-16 text-primary-foreground/80 mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-black text-primary-foreground mb-6">
                Não perca mais tempo!
              </h2>
              <p className="text-primary-foreground/80 font-medium text-lg mb-10 max-w-2xl mx-auto">
                Aproveite as melhores condições do mercado para seu {serviceName.toLowerCase()}. 
                Nossa equipe está pronta para atender você agora mesmo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => handleWhatsApp(`Olá! Quero contratar ${serviceName} com a CredFort!`)}
                  className="px-10 py-5 bg-background text-foreground rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-background/90 transition-all flex items-center justify-center gap-3 shadow-2xl"
                >
                  <MessageCircle className="w-5 h-5" />
                  Solicitar Agora pelo WhatsApp
                </button>
              </div>
              
              <p className="text-primary-foreground/60 text-sm mt-6">
                Atendimento de Segunda a Sexta, das 8h às 20h
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicePageTemplate;
