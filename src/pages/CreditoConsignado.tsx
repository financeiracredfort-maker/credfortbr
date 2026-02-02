import React from 'react';
import { Briefcase, Clock, Shield, Percent, FileCheck, Banknote } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import heroImage from '@/assets/hero-consignado.jpg';

const CreditoConsignado = () => {
  return (
    <ServicePageTemplate
      serviceName="Crédito Consignado"
      headline="As menores taxas do mercado para"
      subheadline="aposentados e servidores"
      heroDescription="Você que é aposentado, pensionista ou servidor público merece as melhores condições. Crédito consignado com taxas a partir de 1.29% ao mês, desconto direto em folha e aprovação facilitada."
      heroImage={heroImage}
      minValue="R$ 500"
      maxValue="R$ 500.000"
      taxaMin="1.29%"
      prazoMax="120 meses"
      urgencyText="💰 Menores taxas para servidores e aposentados!"
      ctaText="Simular Meu Consignado"
      benefits={[
        {
          icon: <Percent className="w-7 h-7 text-primary" />,
          title: "Menor Taxa do Mercado",
          description: "Taxas a partir de 1.29% ao mês, muito abaixo dos bancos tradicionais. Economia real no seu bolso."
        },
        {
          icon: <Banknote className="w-7 h-7 text-primary" />,
          title: "Desconto em Folha",
          description: "Parcelas descontadas automaticamente do seu salário ou benefício. Sem preocupação com boletos."
        },
        {
          icon: <Clock className="w-7 h-7 text-primary" />,
          title: "Prazo de até 120 meses",
          description: "Parcele em até 10 anos e pague parcelas que cabem tranquilamente no seu orçamento."
        },
        {
          icon: <Shield className="w-7 h-7 text-primary" />,
          title: "Sem Consulta SPC/Serasa",
          description: "Mesmo negativado você pode contratar. O desconto em folha é a sua garantia."
        },
        {
          icon: <FileCheck className="w-7 h-7 text-primary" />,
          title: "Portabilidade de Dívidas",
          description: "Traga seu consignado de outro banco e reduza suas parcelas. Fazemos toda a burocracia por você."
        },
        {
          icon: <Briefcase className="w-7 h-7 text-primary" />,
          title: "Para Todas as Categorias",
          description: "Servidores federais, estaduais, municipais, aposentados e pensionistas do INSS."
        }
      ]}
      features={[
        "Servidores públicos federais",
        "Servidores estaduais e municipais",
        "Aposentados INSS",
        "Pensionistas INSS",
        "Militares das Forças Armadas",
        "Funcionários CLT (empresas conveniadas)",
        "Portabilidade com redução de parcela",
        "Refinanciamento com troco"
      ]}
      testimonials={[
        {
          name: "Antônio Ferreira",
          role: "Servidor Federal, Brasília",
          content: "Fiz a portabilidade do meu consignado e economizei R$ 300 por mês! Não sabia que estava pagando tão caro no outro banco.",
          rating: 5
        },
        {
          name: "Dona Francisca",
          role: "Aposentada INSS, Rio de Janeiro",
          content: "Mesmo com nome sujo consegui o crédito. Me ajudaram a limpar meu nome e ainda sobrou dinheiro. Deus abençoe vocês!",
          rating: 5
        },
        {
          name: "Capitão Rodrigues",
          role: "Militar, Fortaleza",
          content: "Atendimento excelente e taxa realmente baixa. Comparei com vários bancos e a CredFort teve a melhor oferta.",
          rating: 5
        }
      ]}
      faqs={[
        {
          question: "Quem pode contratar o consignado?",
          answer: "Servidores públicos (federais, estaduais, municipais), militares, aposentados e pensionistas do INSS, e funcionários CLT de empresas conveniadas."
        },
        {
          question: "Qual a margem consignável?",
          answer: "Você pode comprometer até 35% do seu salário/benefício com consignado (30% para empréstimo + 5% para cartão consignado)."
        },
        {
          question: "Posso fazer portabilidade?",
          answer: "Sim! Trazendo seu consignado de outro banco, você pode reduzir sua parcela ou pegar dinheiro extra mantendo a mesma parcela."
        },
        {
          question: "Estou negativado, posso contratar?",
          answer: "Sim! O consignado não exige consulta ao SPC/Serasa. O desconto em folha é a garantia do pagamento."
        },
        {
          question: "Quanto tempo para liberar?",
          answer: "Após assinatura digital do contrato, o dinheiro é liberado em 24 a 48 horas úteis, dependendo do convênio."
        }
      ]}
    />
  );
};

export default CreditoConsignado;
