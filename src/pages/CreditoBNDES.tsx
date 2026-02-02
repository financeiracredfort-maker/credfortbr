import React from 'react';
import { Landmark, TrendingUp, Clock, Shield, Factory, Leaf } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import heroImage from '@/assets/hero-bndes.jpg';

const CreditoBNDES = () => {
  return (
    <ServicePageTemplate
      serviceName="Crédito BNDES"
      headline="Financiamento com as menores taxas do Brasil via"
      subheadline="BNDES"
      heroDescription="Acesse as linhas de crédito do BNDES com as melhores condições do mercado brasileiro. Financie máquinas, equipamentos, projetos de inovação e expansão com taxas subsidiadas pelo Governo Federal. O caminho mais inteligente para fazer sua empresa crescer."
      heroImage={heroImage}
      minValue="R$ 20.000"
      maxValue="R$ 20.000.000"
      taxaMin="0.79%"
      prazoMax="120 meses"
      urgencyText="🏛️ Taxas subsidiadas pelo Governo Federal!"
      ctaText="Simular Crédito BNDES"
      benefits={[
        {
          icon: <Landmark className="w-7 h-7 text-primary" />,
          title: "Taxas Subsidiadas",
          description: "Taxas muito abaixo do mercado, subsidiadas pelo Governo Federal através do BNDES. Economia real para sua empresa."
        },
        {
          icon: <Factory className="w-7 h-7 text-primary" />,
          title: "Máquinas e Equipamentos",
          description: "Financie equipamentos nacionais credenciados no BNDES com até 100% de financiamento. Modernize sua produção."
        },
        {
          icon: <TrendingUp className="w-7 h-7 text-primary" />,
          title: "Projetos de Expansão",
          description: "Capital para ampliar sua empresa, construir, reformar ou comprar imóveis comerciais. Cresça com segurança."
        },
        {
          icon: <Leaf className="w-7 h-7 text-primary" />,
          title: "Linhas Sustentáveis",
          description: "Condições especiais para projetos de energia solar, eficiência energética e sustentabilidade. Invista no futuro."
        },
        {
          icon: <Clock className="w-7 h-7 text-primary" />,
          title: "Prazo de até 120 meses",
          description: "Parcele em até 10 anos com carência de até 24 meses para começar a pagar. Planejamento de longo prazo."
        },
        {
          icon: <Shield className="w-7 h-7 text-primary" />,
          title: "Assessoria Completa",
          description: "Cuidamos de toda a burocracia e documentação. Você foca no seu negócio, nós resolvemos o financiamento."
        }
      ]}
      features={[
        "BNDES Finame (máquinas e equipamentos)",
        "BNDES Automático",
        "Cartão BNDES",
        "BNDES Giro",
        "Linhas para energia solar",
        "Financiamento de software",
        "Capital para inovação",
        "Carência de até 24 meses"
      ]}
      testimonials={[
        {
          name: "Engenheiro Paulo Silva",
          role: "Diretor, Indústria Metalúrgica - RS",
          content: "Financiamos R$ 2 milhões em equipamentos CNC. Taxa de 0.89% ao mês e 24 meses de carência. Impossível encontrar isso em banco comum!",
          rating: 5
        },
        {
          name: "Ana Cristina",
          role: "Gerente, Agroindústria - MT",
          content: "Instalamos usina solar na fazenda com financiamento BNDES. Em 4 anos o próprio equipamento se paga. Excelente investimento!",
          rating: 5
        },
        {
          name: "Grupo Construtora Horizonte",
          role: "Construção Civil - PR",
          content: "A assessoria da CredFort foi fundamental. Aprovaram nosso projeto de R$ 5 milhões em tempo recorde. Parceiros de verdade!",
          rating: 5
        }
      ]}
      faqs={[
        {
          question: "Minha empresa pode acessar o BNDES?",
          answer: "Empresas de todos os portes podem acessar, desde MEI até grandes corporações. Cada linha tem seus requisitos específicos e nós te ajudamos a encontrar a melhor."
        },
        {
          question: "Quais equipamentos podem ser financiados?",
          answer: "Equipamentos nacionais credenciados no BNDES. Você pode consultar no site do BNDES ou nossa equipe verifica para você gratuitamente."
        },
        {
          question: "Qual a taxa de juros?",
          answer: "Varia conforme a linha e o porte da empresa. Pode partir de TLP (Taxa de Longo Prazo) + spread, ficando muito abaixo do mercado."
        },
        {
          question: "Quanto tempo para aprovar?",
          answer: "Depende da complexidade do projeto. Operações automáticas (até R$ 20 milhões) são mais rápidas, em torno de 30 dias."
        },
        {
          question: "Preciso de garantias?",
          answer: "Sim, normalmente são exigidas garantias como aval dos sócios, garantias reais ou o próprio bem financiado. Analisamos cada caso."
        }
      ]}
    />
  );
};

export default CreditoBNDES;
