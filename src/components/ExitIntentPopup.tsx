import React, { useState, useEffect, useCallback } from 'react';
import { X, MessageCircle, Gift, Shield, Clock, Zap, CheckCircle2 } from 'lucide-react';
import { gsap } from 'gsap';
import logoCredfort from '@/assets/logo-credfort.png';

const WHATSAPP_NUMBER = '5541956766654';

interface ExitIntentPopupProps {
  onClose?: () => void;
}

const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    onClose?.();
    // Store in session to not show again during this visit
    sessionStorage.setItem('exitIntentShown', 'true');
  }, [onClose]);

  const handleWhatsApp = () => {
    const message = 'Olá! Vi a oferta exclusiva de última chance e quero aproveitar! Podem me ajudar?';
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    handleClose();
  };

  useEffect(() => {
    // Check if already shown in this session
    if (sessionStorage.getItem('exitIntentShown') === 'true') {
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse leaves from the top of the page
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    // Also trigger on mobile after 30 seconds of inactivity or scroll up
    let inactivityTimer: NodeJS.Timeout;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // If user scrolls up significantly and has scrolled down before
      if (lastScrollY > 500 && currentScrollY < lastScrollY - 100 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
      lastScrollY = currentScrollY;
      
      // Reset inactivity timer on scroll
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        if (!hasShown && window.scrollY > 300) {
          setIsVisible(true);
          setHasShown(true);
        }
      }, 45000); // 45 seconds of inactivity
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(inactivityTimer);
    };
  }, [hasShown]);

  // Animate popup on show
  useEffect(() => {
    if (isVisible) {
      gsap.fromTo('.exit-popup-overlay', 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.3 }
      );
      gsap.fromTo('.exit-popup-content', 
        { opacity: 0, scale: 0.8, y: 50 }, 
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.7)' }
      );
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="exit-popup-overlay fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md">
      <div className="exit-popup-content relative w-full max-w-lg bg-card border border-border rounded-3xl shadow-2xl overflow-hidden">
        {/* Close button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-secondary/80 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with gradient */}
        <div className="relative bg-gradient-to-br from-primary to-primary/80 p-8 text-center">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjIiIGZpbGw9InJnYmEoMCwwLDAsMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-30" />
          
          <div className="relative z-10">
            {/* Logo */}
            <img 
              src={logoCredfort} 
              alt="CredFort" 
              className="h-10 mx-auto mb-4 brightness-0 invert opacity-90"
            />
            <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-full mb-4">
              <Gift className="w-7 h-7 text-primary-foreground" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-primary-foreground mb-2">
              Espere! Não vá ainda...
            </h2>
            <p className="text-primary-foreground/80 font-medium">
              Temos uma oferta exclusiva para você!
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Special offer */}
          <div className="bg-success/10 border border-success/30 rounded-2xl p-4 mb-6 text-center">
            <div className="flex items-center justify-center gap-2 text-success font-bold text-lg mb-1">
              <Zap className="w-5 h-5" />
              Taxa Especial de 1.19% a.m.
            </div>
            <p className="text-sm text-muted-foreground">
              Válida apenas para quem solicitar nos próximos 30 minutos!
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
              <span className="text-foreground text-sm">Aprovação em até 5 minutos</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
              <span className="text-foreground text-sm">Dinheiro na conta em 24 horas</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
              <span className="text-foreground text-sm">Sem consulta ao SPC/Serasa</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
              <span className="text-foreground text-sm">Atendimento personalizado</span>
            </div>
          </div>

          {/* CTA */}
          <button 
            onClick={handleWhatsApp}
            className="w-full btn-primary justify-center text-base py-4 shadow-lg shadow-primary/30"
          >
            <MessageCircle className="w-5 h-5" />
            Quero Aproveitar Agora!
          </button>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-4 mt-6 text-muted-foreground">
            <div className="flex items-center gap-1 text-xs">
              <Shield className="w-4 h-4" />
              <span>100% Seguro</span>
            </div>
            <div className="flex items-center gap-1 text-xs">
              <Clock className="w-4 h-4" />
              <span>Resposta Imediata</span>
            </div>
          </div>

          {/* Dismiss link */}
          <button 
            onClick={handleClose}
            className="w-full mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Não, prefiro pagar mais caro
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
