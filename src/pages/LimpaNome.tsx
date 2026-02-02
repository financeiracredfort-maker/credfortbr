import React from 'react';
import { Eraser, CheckCircle2, Clock, Shield, CreditCard, TrendingUp } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const LimpaNome = () => {
  return (
    <ServicePageTemplate
      serviceName="Limpa Nome"
      headline="Saia do vermelho e recupere seu"
      subheadline="crédito no mercado"
      heroDescription="Negociamos suas dívidas com descontos de até 90%. Limpe seu nome, recupere seu crédito e volte a realizar seus sonhos. Atendimento personalizado e sigiloso."
      minValue="R$ 100"
      maxValue="R$ 500.000"
      taxaMin="0%"
      prazoMax="120 meses"
      urgencyText="✨ Descontos de até 90% nas suas dívidas!"
      ctaText="Limpar Meu Nome"
      benefits={[
        {
          icon: <Eraser className="w-7 h-7 text-primary" />,
          title: "Descontos de até 90%",
          description: "Negociamos diretamente com os credores para conseguir os maiores descontos possíveis nas suas dívidas."
        },
        {
          icon: <CheckCircle2 className="w-7 h-7 text-primary" />,
          title: "Nome Limpo em 5 Dias",
          description: "Após o pagamento, seu nome é retirado dos órgãos de proteção em até 5 dias úteis."
        },
        {
          icon: <Shield className="w-7 h-7 text-primary" />,
          title: "Sigilo Total",
          description: "Tratamos sua situação com total confidencialidade. Ninguém precisa saber dos seus problemas financeiros."
        },
        {
          icon: <CreditCard className="w-7 h-7 text-primary" />,
          title: "Todas as Dívidas",
          description: "Negociamos com bancos, financeiras, cartões de crédito, lojas, telefonia e muito mais."
        },
        {
          icon: <Clock className="w-7 h-7 text-primary" />,
          title: "Parcele a Negociação",
          description: "Não tem o valor à vista? Parcelamos o acordo em até 24x para caber no seu bolso."
        },
        {
          icon: <TrendingUp className="w-7 h-7 text-primary" />,
          title: "Volte a Ter Crédito",
          description: "Com o nome limpo, você volta a ter acesso a financiamentos, cartões e empréstimos."
        }
      ]}
      features={[
        "Negociação com todos os credores",
        "Descontos de até 90%",
        "Parcelamento do acordo",
        "Atendimento sigiloso",
        "Análise gratuita de dívidas",
        "Acompanhamento até o fim",
        "Orientação financeira",
        "Nome limpo em até 5 dias"
      ]}
      testimonials={[
        {
          name: "Fernanda Costa",
          role: "Empresária, São Paulo",
          content: "Tinha R$ 45.000 em dívidas. Conseguiram negociar por R$ 8.000! Parcelei em 12x e hoje meu nome está limpo.",
          rating: 5
        },
        {
          name: "José Roberto",
          role: "Caminhoneiro, Goiânia",
          content: "Achava que nunca ia sair do vermelho. Em 3 meses quitei tudo com 70% de desconto. Obrigado CredFort!",
          rating: 5
        },
        {
          name: "Luciana Martins",
          role: "Enfermeira, Salvador",
          content: "Atendimento humano e sem julgamento. Me ajudaram a organizar tudo e negociaram condições incríveis.",
          rating: 5
        }
      ]}
      faqs={[
        {
          question: "Quanto custa o serviço?",
          answer: "A análise é gratuita! Cobramos apenas uma pequena taxa de sucesso após a negociação ser concluída e você concordar com as condições."
        },
        {
          question: "Vocês negociam com quais empresas?",
          answer: "Negociamos com bancos, financeiras, cartões de crédito, lojas, telefonia, energia, água, condomínio e muito mais."
        },
        {
          question: "Quanto tempo para limpar meu nome?",
          answer: "Após o pagamento (à vista ou primeira parcela do acordo), seu nome é retirado dos órgãos de proteção em até 5 dias úteis."
        },
        {
          question: "E se eu não tiver dinheiro para pagar?",
          answer: "Negociamos parcelamentos. Também podemos usar a antecipação do FGTS ou outros produtos para quitar suas dívidas."
        },
        {
          question: "Dívidas prescritas também são negociadas?",
          answer: "Sim! Mesmo dívidas antigas podem ser negociadas com ótimos descontos para você regularizar sua situação."
        }
      ]}
    />
  );
};

export default LimpaNome;
