import React from 'react';
import { Clock, CreditCard, ShieldCheck, Smartphone, HeadphonesIcon, TrendingDown, LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const BenefitCard = ({ icon: Icon, title, desc }: BenefitCardProps) => (
  <div className="card-glass p-8 hover:border-primary/40 transition-all duration-300 group">
    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
      <Icon className="w-7 h-7 text-primary" />
    </div>
    <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
    <p className="text-muted-foreground leading-relaxed text-sm">{desc}</p>
  </div>
);

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Aprovação em Minutos",
      desc: "Esqueça semanas de espera. Analisamos seu perfil em minutos e o dinheiro cai na conta em menos de 24h."
    },
    {
      icon: TrendingDown,
      title: "Menores Taxas do Mercado",
      desc: "Algoritmo de risco que entende sua realidade financeira, oferecendo juros que cabem no seu fluxo de caixa."
    },
    {
      icon: ShieldCheck,
      title: "100% Seguro",
      desc: "Contratação feita pelo celular com segurança bancária de ponta a ponta. Sem filas, sem papelada."
    },
    {
      icon: Smartphone,
      title: "Totalmente Digital",
      desc: "Faça tudo pelo celular ou computador. Sem precisar ir a agências ou enfrentar burocracias."
    },
    {
      icon: CreditCard,
      title: "Flexibilidade de Pagamento",
      desc: "Escolha o prazo que melhor se adapta à sua realidade. De 12 a 120 meses para pagar."
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte Humanizado",
      desc: "Nossa equipe está disponível via WhatsApp para tirar todas as suas dúvidas em tempo real."
    }
  ];

  return (
    <section id="vantagens" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que escolher a <span className="gradient-text">CredFort?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Eliminamos as barreiras entre você e o capital necessário para realizar seus projetos ou expandir seus negócios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
