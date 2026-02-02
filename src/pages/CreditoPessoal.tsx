import React from 'react';
import { Wallet, Clock, Shield, Zap, FileCheck, Users } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const CreditoPessoal = () => {
  return (
    <ServicePageTemplate
      serviceName="Crédito Pessoal"
      headline="Dinheiro na conta para realizar"
      subheadline="seus sonhos"
      heroDescription="Crédito pessoal rápido e sem burocracia. Aprovação em minutos, dinheiro na conta em até 24 horas. Taxas a partir de 1.29% ao mês para você conquistar seus objetivos."
      minValue="R$ 1.000"
      maxValue="R$ 100.000"
      taxaMin="1.29%"
      prazoMax="60 meses"
      urgencyText="🔥 Taxas promocionais por tempo limitado!"
      ctaText="Solicitar Meu Crédito"
      benefits={[
        {
          icon: <Clock className="w-7 h-7 text-primary" />,
          title: "Aprovação em Minutos",
          description: "Análise de crédito rápida e totalmente digital. Sem filas, sem papelada, sem complicação."
        },
        {
          icon: <Wallet className="w-7 h-7 text-primary" />,
          title: "Dinheiro na Conta em 24h",
          description: "Após aprovação, o dinheiro cai direto na sua conta em até 24 horas úteis."
        },
        {
          icon: <Shield className="w-7 h-7 text-primary" />,
          title: "100% Seguro",
          description: "Seus dados protegidos com criptografia bancária. Somos regulamentados pelo Banco Central."
        },
        {
          icon: <Zap className="w-7 h-7 text-primary" />,
          title: "Sem Consulta ao SPC/Serasa",
          description: "Análise de crédito inteligente que considera seu perfil completo, não apenas o score."
        },
        {
          icon: <FileCheck className="w-7 h-7 text-primary" />,
          title: "Parcelas que Cabem no Bolso",
          description: "Simule diferentes cenários e escolha a parcela ideal para seu orçamento mensal."
        },
        {
          icon: <Users className="w-7 h-7 text-primary" />,
          title: "Atendimento Personalizado",
          description: "Consultores especializados para te ajudar em cada etapa do processo."
        }
      ]}
      features={[
        "Sem necessidade de garantia",
        "Contratação 100% online",
        "Documentação simplificada",
        "Taxas personalizadas",
        "Primeira parcela em até 60 dias",
        "Portabilidade de dívidas",
        "Sem taxa de abertura",
        "Parcelas fixas"
      ]}
      testimonials={[
        {
          name: "Carlos Silva",
          role: "Autônomo, São Paulo",
          content: "Consegui R$ 15.000 para reformar minha casa. O processo foi muito rápido, em menos de 2 horas já tinha o dinheiro na conta!",
          rating: 5
        },
        {
          name: "Maria Santos",
          role: "Professora, Curitiba",
          content: "As parcelas cabem certinho no meu orçamento. A taxa foi muito menor que nos bancos tradicionais. Recomendo!",
          rating: 5
        },
        {
          name: "João Oliveira",
          role: "Comerciante, Belo Horizonte",
          content: "Atendimento excelente! Me ajudaram a encontrar a melhor opção para minha situação. Muito satisfeito.",
          rating: 5
        }
      ]}
      faqs={[
        {
          question: "Quais documentos são necessários?",
          answer: "Apenas RG, CPF, comprovante de residência e comprovante de renda. Todo o processo é digital, você envia as fotos pelo celular."
        },
        {
          question: "Qual o valor mínimo e máximo?",
          answer: "Você pode solicitar de R$ 1.000 até R$ 100.000, dependendo da sua análise de crédito e capacidade de pagamento."
        },
        {
          question: "Em quanto tempo recebo o dinheiro?",
          answer: "Após a aprovação e assinatura do contrato digital, o dinheiro é depositado em até 24 horas úteis na sua conta."
        },
        {
          question: "Posso antecipar parcelas?",
          answer: "Sim! Você pode antecipar parcelas a qualquer momento e ainda ganha desconto nos juros. Sem multas ou taxas extras."
        },
        {
          question: "Preciso ter score alto?",
          answer: "Não necessariamente. Nossa análise considera diversos fatores além do score, como sua renda e histórico de pagamentos."
        }
      ]}
    />
  );
};

export default CreditoPessoal;
