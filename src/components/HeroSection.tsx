import React from 'react';
import { Zap, ArrowRight, Users, Shield, Clock, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '5541956766654';
const WHATSAPP_MESSAGE = 'Olá! Quero solicitar meu crédito com a CredFort.';

const HeroSection = () => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank');
  };

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto">
        {/* Urgency Banner */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold tracking-widest uppercase animate-pulse-glow">
            <Zap className="w-4 h-4" /> 
            <span>🔥 Promoção: Taxas a partir de 1.29% a.m. — Válido até hoje!</span>
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.1] mb-6">
            Crédito inteligente para quem{' '}
            <span className="gradient-text font-black italic">não tem tempo</span>{' '}
            a perder.
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
            Capital de giro, antecipação ou crédito pessoal com as menores taxas do mercado. 
            <strong className="text-foreground"> Aprovação em minutos, dinheiro na conta em até 24h.</strong>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12">
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
