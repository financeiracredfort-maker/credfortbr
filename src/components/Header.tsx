import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoCredfort from '@/assets/logo-credfort.png';

const WHATSAPP_NUMBER = '5541956766654';
const WHATSAPP_MESSAGE = 'Olá! Gostaria de falar com um consultor da CredFort.';

const services = [
  { name: 'Crédito Pessoal', path: '/credito-pessoal' },
  { name: 'Crédito Consignado', path: '/credito-consignado' },
  { name: 'Crédito com Garantia', path: '/credito-garantia' },
  { name: 'Antecipação FGTS', path: '/saque-aniversario-fgts' },
  { name: 'Limpa Nome', path: '/limpa-nome' },
  { name: 'Crédito Empresarial', path: '/credito-empresarial' },
  { name: 'Crédito BNDES', path: '/credito-bndes' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-xl border-b border-border shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src={logoCredfort} 
            alt="CredFort - Sua Saúde Financeira" 
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {/* Services Dropdown */}
          <div className="relative">
            <button 
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              Serviços <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isServicesOpen && (
              <div 
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-xl shadow-2xl py-2 animate-fade-in"
              >
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block px-4 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <a href="/#simulador" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Simulador</a>
          <a href="/#depoimentos" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Depoimentos</a>
          <a href="/#faq" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Dúvidas</a>
          <button 
            onClick={handleWhatsApp}
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-bold text-sm hover:brightness-110 transition-all shadow-lg flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Falar com Consultor
          </button>
        </div>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-foreground p-2">
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-border animate-fade-in">
          <div className="px-4 py-6 space-y-2">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Nossos Serviços</p>
            {services.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 text-foreground font-medium border-b border-border"
              >
                {service.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <a href="/#simulador" onClick={() => setIsMenuOpen(false)} className="block py-3 text-foreground font-medium border-b border-border">Simulador</a>
              <a href="/#depoimentos" onClick={() => setIsMenuOpen(false)} className="block py-3 text-foreground font-medium border-b border-border">Depoimentos</a>
              <a href="/#faq" onClick={() => setIsMenuOpen(false)} className="block py-3 text-foreground font-medium border-b border-border">Dúvidas</a>
            </div>
            <button 
              onClick={handleWhatsApp}
              className="w-full btn-primary mt-4"
            >
              <MessageCircle className="w-5 h-5" />
              Falar pelo WhatsApp
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
