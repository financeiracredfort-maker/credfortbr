import React from 'react';
import { ArrowRight, CheckCircle2, MessageCircle, Shield, Clock, Star, Users, Zap } from 'lucide-react';
import { AnimatedSection, useStaggerAnimation } from '@/hooks/useScrollAnimation';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

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
  accentColor?: string;
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
}) => {
  const benefitsRef = useStaggerAnimation<HTMLDivElement>();
  const featuresRef = useStaggerAnimation<HTMLDivElement>();

  const handleWhatsApp = (message: string) => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fadeIn" className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold tracking-widest uppercase animate-pulse-glow">
              <Zap className="w-4 h-4" /> 
              <span>{urgencyText}</span>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedSection animation="fadeUp">
                <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">{serviceName}</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] mb-6">
                  {headline}{' '}
                  <span className="gradient-text font-black italic">{subheadline}</span>
                </h1>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeUp" delay={0.2}>
                <p className="text-muted-foreground text-lg md:text-xl mb-8 leading-relaxed">
                  {heroDescription}
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fadeUp" delay={0.3}>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-card/60 backdrop-blur-xl border border-border rounded-2xl p-4">
                    <p className="text-muted-foreground text-xs uppercase tracking-widest mb-1">Valor</p>
                    <p className="text-foreground font-bold">{minValue} a {maxValue}</p>
                  </div>
                  <div className="bg-card/60 backdrop-blur-xl border border-border rounded-2xl p-4">
                    <p className="text-muted-foreground text-xs uppercase tracking-widest mb-1">Taxa a partir de</p>
                    <p className="text-success font-bold">{taxaMin} a.m.</p>
                  </div>
                  <div className="bg-card/60 backdrop-blur-xl border border-border rounded-2xl p-4">
                    <p className="text-muted-foreground text-xs uppercase tracking-widest mb-1">Prazo</p>
                    <p className="text-foreground font-bold">Até {prazoMax}</p>
                  </div>
                  <div className="bg-card/60 backdrop-blur-xl border border-border rounded-2xl p-4">
                    <p className="text-muted-foreground text-xs uppercase tracking-widest mb-1">Liberação</p>
                    <p className="text-primary font-bold">Em até 24h</p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeUp" delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button 
                    onClick={() => handleWhatsApp(`Olá! Tenho interesse em ${serviceName}. Gostaria de mais informações.`)}
                    className="btn-primary text-base group"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {ctaText}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeIn" delay={0.5}>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2 text-success">
                    <Shield className="w-5 h-5" />
                    <span className="text-sm font-bold">100% Seguro</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <Clock className="w-5 h-5" />
                    <span className="text-sm font-bold">Resposta Imediata</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-5 h-5" />
                    <span className="text-sm font-bold">+12 mil clientes</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Simulator Card */}
            <AnimatedSection animation="fadeLeft" delay={0.3}>
              <div className="card-glass p-8 md:p-10 shadow-[var(--shadow-card)]">
                <h2 className="text-2xl font-bold text-foreground mb-6">Solicite Agora</h2>
                
                <div className="space-y-4 mb-8">
                  {features.slice(0, 5).map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <p className="text-foreground text-sm">{feature}</p>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => handleWhatsApp(`Olá! Quero solicitar ${serviceName} agora!`)}
                  className="w-full btn-primary justify-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  Falar com Especialista
                </button>

                <p className="text-center text-muted-foreground text-xs mt-4">
                  *Sujeito a análise de crédito. Sem compromisso.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Por que escolher nosso <span className="gradient-text">{serviceName}</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Oferecemos as melhores condições do mercado com atendimento personalizado
            </p>
          </AnimatedSection>

          <div ref={benefitsRef} className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card-glass p-8 hover:border-primary/40 transition-all group">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Tudo que você precisa em um só lugar
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Nosso {serviceName.toLowerCase()} foi desenvolvido pensando em você, com todas as facilidades que você merece.
              </p>
              
              <div ref={featuresRef} className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <p className="text-foreground text-sm">{feature}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeLeft">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-10 border border-primary/20">
                <div className="text-center">
                  <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Oferta Especial</p>
                  <h3 className="text-3xl font-bold text-foreground mb-2">Taxa a partir de</h3>
                  <p className="text-5xl font-black gradient-text mb-4">{taxaMin} a.m.</p>
                  <p className="text-muted-foreground mb-8">Para clientes aprovados hoje</p>
                  
                  <button 
                    onClick={() => handleWhatsApp(`Olá! Vi a oferta especial de ${serviceName} e quero aproveitar!`)}
                    className="btn-primary w-full justify-center"
                  >
                    Garantir Minha Taxa
                  </button>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-muted-foreground">Histórias reais de pessoas que transformaram suas vidas</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} animation="fadeUp" delay={index * 0.1}>
                <div className="card-glass p-8 h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
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
              <h2 className="text-3xl md:text-5xl font-black text-primary-foreground mb-6">
                Não perca mais tempo!
              </h2>
              <p className="text-primary-foreground/80 font-medium text-lg mb-10 max-w-2xl mx-auto">
                Aproveite as melhores condições do mercado para seu {serviceName.toLowerCase()}. 
                Nossa equipe está pronta para atender você agora mesmo.
              </p>
              
              <button 
                onClick={() => handleWhatsApp(`Olá! Quero contratar ${serviceName} com a CredFort!`)}
                className="px-10 py-5 bg-background text-foreground rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-background/90 transition-all flex items-center justify-center gap-3 mx-auto shadow-2xl"
              >
                <MessageCircle className="w-5 h-5" />
                Solicitar Agora pelo WhatsApp
              </button>
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
