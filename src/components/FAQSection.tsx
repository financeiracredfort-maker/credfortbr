import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "Quais documentos são necessários para solicitar crédito?",
    answer: "Para pessoa física: RG, CPF, comprovante de residência e comprovante de renda. Para pessoa jurídica: contrato social, CNPJ, documentos dos sócios e últimos 3 meses de faturamento."
  },
  {
    question: "Quanto tempo leva para o dinheiro cair na minha conta?",
    answer: "Após a aprovação do crédito, o dinheiro é depositado em até 24 horas úteis na conta bancária informada. Em alguns casos, pode ser ainda mais rápido."
  },
  {
    question: "Vocês consultam o SPC/Serasa?",
    answer: "A consulta ao SPC/Serasa é feita apenas após você aceitar a proposta de crédito. Na simulação inicial, não fazemos nenhuma consulta que afete seu score."
  },
  {
    question: "Qual é a taxa de juros?",
    answer: "Nossas taxas começam a partir de 1.29% ao mês, podendo variar de acordo com o perfil do cliente, valor solicitado e prazo de pagamento. Oferecemos sempre as melhores condições do mercado."
  },
  {
    question: "Posso quitar o crédito antecipadamente?",
    answer: "Sim! Você pode quitar seu crédito a qualquer momento, com desconto proporcional nos juros. Não cobramos nenhuma taxa extra por quitação antecipada."
  },
  {
    question: "A CredFort é confiável?",
    answer: "Sim! Somos um correspondente bancário autorizado pelo Banco Central (BACEN), seguimos todas as normas da LGPD e possuímos certificação de segurança SSL. Já atendemos mais de 12.000 clientes em todo o Brasil."
  }
];

const FAQSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
          }
        }
      );

      const items = accordionRef.current?.querySelectorAll('[data-faq-item]');
      if (items) {
        gsap.fromTo(items,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
              trigger: accordionRef.current,
              start: 'top 80%',
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="faq" ref={sectionRef} className="section-padding">
      <div className="max-w-3xl mx-auto">
        <div ref={headerRef} className="text-center mb-12 opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Dúvidas <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tire suas dúvidas sobre nossos serviços de crédito
          </p>
        </div>

        <div ref={accordionRef}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                data-faq-item
                className="card-glass px-6 border-border data-[state=open]:border-primary/40 opacity-0"
              >
                <AccordionTrigger className="text-foreground font-semibold text-left hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
