import React from 'react';
import { MessageCircle, ArrowRight, Shield, Clock } from 'lucide-react';

const WHATSAPP_NUMBER = '5541956766654';
const WHATSAPP_MESSAGE = 'Olá! Quero solicitar meu crédito com a CredFort e garantir a taxa promocional!';

const CTASection = () => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank');
  };

  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-[2.5rem] p-10 md:p-16 text-center" 
             style={{ background: 'var(--gradient-gold-dark)' }}>
          {/* Texture overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzAwMCI+PC9yZWN0Pgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMjIyIj48L3JlY3Q+Cjwvc3ZnPg==')]" />
          
          <div className="relative z-10">
            {/* Urgency badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/20 backdrop-blur-sm text-background text-xs font-bold mb-8 uppercase tracking-widest">
              <Clock className="w-4 h-4" /> Oferta por tempo limitado
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-background mb-6 leading-tight">
              O capital que você precisa,<br />com a seriedade que você merece.
            </h2>
            
            <p className="text-background/80 font-medium text-lg mb-10 max-w-2xl mx-auto">
              Junte-se a mais de 12.000 brasileiros que já transformaram suas finanças com a CredFort. 
              Sem taxas ocultas, sem surpresas.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <button 
                onClick={handleWhatsApp}
                className="px-10 py-5 bg-background text-foreground rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-all flex items-center justify-center gap-3 group shadow-2xl"
              >
                <MessageCircle className="w-5 h-5" /> 
                Falar com Especialista
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-background/70 text-sm">
              <Shield className="w-4 h-4" />
              <span>Atendimento seguro e confidencial</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
