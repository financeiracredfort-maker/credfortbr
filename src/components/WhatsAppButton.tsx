import React from 'react';
import { MessageCircle } from 'lucide-react';
import { trackWhatsAppClick } from '@/lib/analytics';
import { buildWhatsAppURL } from '@/lib/utm';

const WHATSAPP_NUMBER = '5541956766654';
const WHATSAPP_MESSAGE = 'Olá! Gostaria de saber mais sobre as opções de crédito da CredFort.';

const WhatsAppButton = () => {
  const handleClick = () => {
    trackWhatsAppClick('floating_button');
    window.open(buildWhatsAppURL(WHATSAPP_NUMBER, WHATSAPP_MESSAGE), '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="btn-whatsapp group"
      aria-label="Falar pelo WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white fill-white" />
      <span className="absolute right-20 bg-card text-foreground px-4 py-2 rounded-xl text-sm font-bold 
                       opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-border">
        Fale conosco!
      </span>
    </button>
  );
};

export default WhatsAppButton;
