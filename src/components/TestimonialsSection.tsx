import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Eduardo",
    role: "Empresário",
    location: "São Paulo, SP",
    text: "Precisava de capital de giro urgente e a CredFort resolveu em menos de 24 horas. Taxa muito melhor que o banco tradicional. Recomendo demais!",
    rating: 5
  },
  {
    name: "Maria Fernanda",
    role: "Autônoma",
    location: "Curitiba, PR",
    text: "Achei que seria difícil conseguir crédito como autônoma, mas o atendimento foi excepcional. Tudo pelo WhatsApp, sem burocracia nenhuma.",
    rating: 5
  },
  {
    name: "Roberto Almeida",
    role: "Comerciante",
    location: "Rio de Janeiro, RJ",
    text: "Já fiz 3 operações com a CredFort. Sempre com as melhores condições e um atendimento nota 10. Viraram meu parceiro de negócios.",
    rating: 5
  },
  {
    name: "Ana Paula",
    role: "Dentista",
    location: "Belo Horizonte, MG",
    text: "Financiei equipamentos para minha clínica com taxas muito competitivas. O processo todo foi super rápido e transparente.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que nossos <span className="gradient-text">clientes dizem</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Mais de 12.000 brasileiros já transformaram suas finanças com a CredFort
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-glass p-8 relative">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>
              
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">{testimonial.name[0]}</span>
                </div>
                <div>
                  <p className="text-foreground font-bold">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role} • {testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: "12.000+", label: "Clientes Atendidos" },
            { value: "R$ 500M+", label: "Em Crédito Liberado" },
            { value: "4.9/5", label: "Avaliação Média" },
            { value: "24h", label: "Tempo de Liberação" }
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 card-glass">
              <p className="text-3xl md:text-4xl font-black gradient-text mb-2">{stat.value}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
