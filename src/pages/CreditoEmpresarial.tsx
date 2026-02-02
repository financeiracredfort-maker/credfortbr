import React from 'react';
import { Building2, TrendingUp, Clock, Shield, Briefcase, BarChart3 } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const CreditoEmpresarial = () => {
  return (
    <ServicePageTemplate
      serviceName="Crédito Empresarial"
      headline="Capital de giro para sua empresa"
      subheadline="crescer sem parar"
      heroDescription="Crédito para empresas de todos os portes. Capital de giro, antecipação de recebíveis, financiamento de equipamentos e muito mais. Taxas competitivas e aprovação rápida."
      minValue="R$ 10.000"
      maxValue="R$ 5.000.000"
      taxaMin="1.49%"
      prazoMax="60 meses"
      urgencyText="🚀 Capital de giro liberado em até 48h!"
      ctaText="Solicitar Capital de Giro"
      benefits={[
        {
          icon: <TrendingUp className="w-7 h-7 text-primary" />,
          title: "Capital de Giro Rápido",
          description: "Dinheiro na conta em até 48 horas para você aproveitar oportunidades e manter seu negócio funcionando."
        },
        {
          icon: <BarChart3 className="w-7 h-7 text-primary" />,
          title: "Antecipação de Recebíveis",
          description: "Antecipe suas vendas no cartão, boletos e duplicatas. Receba hoje o que vendeu para o futuro."
        },
        {
          icon: <Building2 className="w-7 h-7 text-primary" />,
          title: "Todos os Portes",
          description: "MEI, ME, EPP, Médias e Grandes empresas. Temos soluções para cada momento do seu negócio."
        },
        {
          icon: <Shield className="w-7 h-7 text-primary" />,
          title: "Sem Garantia Real",
          description: "Capital de giro sem necessidade de hipotecar imóveis ou dar seu carro como garantia."
        },
        {
          icon: <Briefcase className="w-7 h-7 text-primary" />,
          title: "Financiamento de Equipamentos",
          description: "Compre máquinas, veículos e equipamentos parcelando em até 60 meses."
        },
        {
          icon: <Clock className="w-7 h-7 text-primary" />,
          title: "Análise Simplificada",
          description: "Documentação básica e análise rápida. Nada de burocracia bancária tradicional."
        }
      ]}
      features={[
        "Capital de giro",
        "Antecipação de recebíveis",
        "Financiamento de equipamentos",
        "Crédito para estoque",
        "Linhas para MEI e ME",
        "Crédito para franquias",
        "Financiamento de veículos comerciais",
        "Carência de até 90 dias"
      ]}
      testimonials={[
        {
          name: "Ricardo Menezes",
          role: "CEO, Indústria Têxtil - SP",
          content: "Conseguimos R$ 800 mil para comprar novos maquinários. A taxa foi melhor que qualquer banco tradicional.",
          rating: 5
        },
        {
          name: "Mariana Lopes",
          role: "Proprietária, Loja de Roupas - RJ",
          content: "A antecipação de recebíveis salvou meu negócio. Recebo em 24h o que vendi no cartão. Fluxo de caixa sempre positivo!",
          rating: 5
        },
        {
          name: "Carlos Eduardo",
          role: "Sócio, Transportadora - MG",
          content: "Financiei 5 caminhões em condições excelentes. Parcelas cabem no faturamento dos próprios veículos.",
          rating: 5
        }
      ]}
      faqs={[
        {
          question: "Qual o tempo mínimo de empresa?",
          answer: "A partir de 6 meses de faturamento para a maioria dos produtos. Para alguns casos, empresas novas também são atendidas."
        },
        {
          question: "Quais documentos são necessários?",
          answer: "Contrato social, documentos dos sócios, comprovante de faturamento (extratos, notas fiscais) e declaração de faturamento."
        },
        {
          question: "MEI pode contratar?",
          answer: "Sim! Temos linhas específicas para MEI com valores de R$ 5.000 a R$ 50.000 e aprovação simplificada."
        },
        {
          question: "Como funciona a antecipação de recebíveis?",
          answer: "Você vende e antecipa o recebimento. Vendeu hoje no cartão para receber em 30 dias? Antecipamos e você recebe amanhã."
        },
        {
          question: "Empresa negativada pode contratar?",
          answer: "Depende do produto. Para antecipação de recebíveis, por exemplo, a garantia são as próprias vendas, então sim."
        }
      ]}
    />
  );
};

export default CreditoEmpresarial;
