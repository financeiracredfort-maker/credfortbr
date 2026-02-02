import React from 'react';
import { Gift, Calendar, Clock, Shield, Wallet, PartyPopper } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const AniversarioFGTS = () => {
  return (
    <ServicePageTemplate
      serviceName="Antecipação Saque-Aniversário FGTS"
      headline="Antecipe até 12 anos do seu"
      subheadline="saque-aniversário FGTS"
      heroDescription="Receba agora o dinheiro que seria liberado apenas no mês do seu aniversário. Sem parcelas mensais! O desconto é feito diretamente do seu FGTS anualmente."
      minValue="R$ 300"
      maxValue="R$ 50.000"
      taxaMin="1.49%"
      prazoMax="12 anos"
      urgencyText="🎂 Antecipe até 12 anos do seu FGTS!"
      ctaText="Antecipar Meu FGTS"
      benefits={[
        {
          icon: <Gift className="w-7 h-7 text-primary" />,
          title: "Dinheiro Agora",
          description: "Receba hoje o valor que você só receberia nos próximos anos. Antecipe até 12 parcelas de uma vez."
        },
        {
          icon: <Calendar className="w-7 h-7 text-primary" />,
          title: "Sem Parcelas Mensais",
          description: "Nada de boletos! O desconto é feito automaticamente do seu FGTS no mês do seu aniversário."
        },
        {
          icon: <Clock className="w-7 h-7 text-primary" />,
          title: "Liberação em 24h",
          description: "Processo 100% digital. Após aprovação, dinheiro na conta em até 24 horas."
        },
        {
          icon: <Shield className="w-7 h-7 text-primary" />,
          title: "Não Afeta Seu Orçamento",
          description: "Como o desconto é no FGTS, sua renda mensal fica intacta. Sem comprometer seu salário."
        },
        {
          icon: <Wallet className="w-7 h-7 text-primary" />,
          title: "Aceita Negativados",
          description: "Como a garantia é o próprio FGTS, não consultamos SPC/Serasa. Todos podem contratar."
        },
        {
          icon: <PartyPopper className="w-7 h-7 text-primary" />,
          title: "Simples e Rápido",
          description: "Basta ter aderido ao Saque-Aniversário no app FGTS e autorizar a consulta. Fazemos o resto."
        }
      ]}
      features={[
        "Antecipação de até 12 anos",
        "Sem parcelas mensais",
        "Desconto direto no FGTS",
        "Aceita negativados",
        "100% digital",
        "Liberação em 24 horas",
        "Sem comprometer salário",
        "Contratação pelo celular"
      ]}
      testimonials={[
        {
          name: "Marcos Vinícius",
          role: "Motorista, São Paulo",
          content: "Antecipei 10 anos do meu FGTS e recebi R$ 8.000. Usei para quitar dívidas e ainda sobrou. Melhor decisão!",
          rating: 5
        },
        {
          name: "Juliana Alves",
          role: "Vendedora, Campinas",
          content: "Estava negativada e mesmo assim consegui! O dinheiro caiu no mesmo dia. Atendimento nota 10.",
          rating: 5
        },
        {
          name: "Pedro Henrique",
          role: "Operador Industrial, Joinville",
          content: "Não sabia que podia fazer isso. Antecipei R$ 12.000 e não preciso pagar nada todo mês. Muito bom!",
          rating: 5
        }
      ]}
      faqs={[
        {
          question: "Como funciona a antecipação?",
          answer: "Você recebe agora o valor que seria liberado no mês do seu aniversário pelos próximos anos. O desconto é feito automaticamente do FGTS, sem boletos."
        },
        {
          question: "Preciso ter aderido ao Saque-Aniversário?",
          answer: "Sim! Você precisa ter optado pelo Saque-Aniversário no app FGTS. Se ainda não aderiu, podemos te orientar como fazer."
        },
        {
          question: "Posso antecipar mesmo negativado?",
          answer: "Sim! Como a garantia é o próprio FGTS, não fazemos consulta ao SPC/Serasa. Qualquer pessoa com saldo pode contratar."
        },
        {
          question: "E se eu for demitido?",
          answer: "Você recebe normalmente a multa de 40% e parte do saldo. O valor antecipado é descontado do que seria liberado."
        },
        {
          question: "Quanto posso antecipar?",
          answer: "Depende do seu saldo FGTS e tempo de contribuição. Fazemos uma simulação gratuita para você saber exatamente."
        }
      ]}
    />
  );
};

export default AniversarioFGTS;
