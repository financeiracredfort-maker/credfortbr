import React from 'react';
import { Building2, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

const WHATSAPP_NUMBER = '5541956766654';

const Footer = () => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  };

  return (
    <footer className="py-16 border-t border-border px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary p-2 rounded-lg">
                <Building2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-black text-foreground">CREDFORT</span>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm mb-6">
              A CredFort é uma correspondente bancária focada em facilitar o acesso ao crédito com transparência, 
              segurança e inovação tecnológica.
            </p>
            <button 
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
            >
              <MessageCircle className="w-4 h-4" />
              Fale conosco pelo WhatsApp
            </button>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase text-xs tracking-widest">Institucional</h4>
            <ul className="space-y-4 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Ouvidoria</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase text-xs tracking-widest">Contato</h4>
            <ul className="space-y-4 text-muted-foreground text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>(41) 9567-6654</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>atendimento@credfort.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Av. Cândido de Abreu, 660<br/>Curitiba, PR</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-xs leading-relaxed max-w-4xl mx-auto">
            CREDFORT SOLUÇÕES FINANCEIRAS LTDA - CNPJ 00.000.000/0001-00. 
            A CredFort não é uma instituição financeira. Somos um correspondente bancário autorizado. 
            Taxas de juros entre 1.29% a 5.99% ao mês. CET varia de acordo com o perfil do cliente.
            Crédito sujeito a análise. Imagens meramente ilustrativas.
          </p>
          <p className="text-muted-foreground/50 text-xs mt-4">
            © {new Date().getFullYear()} CredFort. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
