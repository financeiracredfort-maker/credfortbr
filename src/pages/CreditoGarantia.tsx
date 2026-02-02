import React from 'react';
import { Home, Car, Clock, Shield, Percent, TrendingDown } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const CreditoGarantia = () => {
  return (
    <ServicePageTemplate
      serviceName="Crédito com Garantia"
      headline="Use seu imóvel ou veículo para conseguir"
      subheadline="as menores taxas"
      heroDescription="Crédito com garantia de imóvel ou veículo. Taxas até 3x menores que o crédito pessoal tradicional. Ideal para quem precisa de valores maiores com parcelas menores."
      minValue="R$ 30.000"
      maxValue="R$ 3.000.000"
      taxaMin="0.89%"
      prazoMax="240 meses"
      urgencyText="🏠 Taxas a partir de 0.89% a.m. com garantia!"
      ctaText="Simular com Meu Bem"
      benefits={[
        {
          icon: <Percent className="w-7 h-7 text-primary" />,
          title: "Taxas até 3x Menores",
          description: "Com a garantia do seu bem, conseguimos oferecer taxas muito mais baixas que qualquer empréstimo pessoal."
        },
        {
          icon: <Home className="w-7 h-7 text-primary" />,
          title: "Até 60% do Valor do Imóvel",
          description: "Liberamos até 60% do valor de avaliação do seu imóvel. Para veículos, até 90% da tabela FIPE."
        },
        {
          icon: <Clock className="w-7 h-7 text-primary" />,
          title: "Prazo de até 20 anos",
          description: "Parcele em até 240 meses e tenha parcelas que cabem confortavelmente no seu orçamento."
        },
        {
          icon: <Shield className="w-7 h-7 text-primary" />,
          title: "Você Continua Usando",
          description: "Seu imóvel ou veículo fica apenas como garantia. Você continua morando ou usando normalmente."
        },
        {
          icon: <TrendingDown className="w-7 h-7 text-primary" />,
          title: "Ideal para Quitar Dívidas",
          description: "Troque várias dívidas caras por uma única parcela com juros muito menores."
        },
        {
          icon: <Car className="w-7 h-7 text-primary" />,
          title: "Veículos a partir de 2015",
          description: "Aceitamos carros, motos, caminhões e máquinas agrícolas como garantia."
        }
      ]}
      features={[
        "Imóveis residenciais e comerciais",
        "Veículos a partir de 2015",
        "Você continua usando o bem",
        "Prazo de até 240 meses",
        "Liberação em até 15 dias",
        "Sem comprovação de renda para alguns casos",
        "Aceita negativados",
        "Quitação de dívidas incluída"
      ]}
      testimonials={[
        {
          name: "Roberto Mendes",
          role: "Empresário, São Paulo",
          content: "Coloquei meu apartamento como garantia e consegui R$ 400 mil para expandir minha empresa. A taxa foi absurdamente baixa!",
          rating: 5
        },
        {
          name: "Patrícia Lima",
          role: "Advogada, Curitiba",
          content: "Troquei 5 cartões de crédito por uma única parcela usando meu carro. Economizo R$ 1.500 por mês!",
          rating: 5
        },
        {
          name: "Dr. Fernando Costa",
          role: "Médico, Belo Horizonte",
          content: "Precisava de capital para abrir minha clínica. Com a garantia do imóvel, consegui condições impensáveis em banco tradicional.",
          rating: 5
        }
      ]}
      faqs={[
        {
          question: "Quais bens são aceitos como garantia?",
          answer: "Imóveis residenciais, comerciais, terrenos urbanos, apartamentos, casas. Veículos: carros, motos, caminhões e máquinas agrícolas a partir de 2015."
        },
        {
          question: "Posso continuar usando meu bem?",
          answer: "Sim! Você continua morando no imóvel ou usando seu veículo normalmente. O bem fica apenas alienado como garantia."
        },
        {
          question: "Qual o valor máximo liberado?",
          answer: "Para imóveis: até 60% do valor de avaliação. Para veículos: até 90% da tabela FIPE. Valores de R$ 30 mil a R$ 3 milhões."
        },
        {
          question: "Aceita imóvel financiado?",
          answer: "Sim, desde que o saldo devedor seja quitado com parte do crédito liberado. Fazemos toda a operação."
        },
        {
          question: "Quanto tempo para liberar?",
          answer: "Para veículos: 3 a 7 dias úteis. Para imóveis: 10 a 20 dias úteis (inclui avaliação e cartório)."
        }
      ]}
    />
  );
};

export default CreditoGarantia;
