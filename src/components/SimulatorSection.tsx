import React, { useState } from 'react';
import { TrendingUp, CheckCircle2, MessageCircle, Shield, Zap } from 'lucide-react';

const WHATSAPP_NUMBER = '5541956766654';

const SimulatorSection = () => {
  const [amount, setAmount] = useState(50000);
  const [months, setMonths] = useState(24);

  const interestRate = 0.0129;
  const monthlyInstallment = (amount * (interestRate * Math.pow(1 + interestRate, months))) / (Math.pow(1 + interestRate, months) - 1);

  const handleWhatsApp = () => {
    const message = `Olá! Fiz uma simulação na CredFort:
- Valor: R$ ${amount.toLocaleString('pt-BR')}
- Prazo: ${months} meses
- Parcela estimada: R$ ${monthlyInstallment.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}

Gostaria de prosseguir com a contratação!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="simulador" className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6 uppercase tracking-widest">
              <TrendingUp className="w-3 h-3" /> Simulador Inteligente
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Simule agora e descubra sua <span className="gradient-text">melhor condição</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Use nosso simulador para ter uma estimativa das parcelas. Sem compromisso, sem consulta ao SPC/Serasa nesta etapa.
            </p>

            <ul className="space-y-4">
              {[
                'Taxas a partir de 1.29% ao mês',
                'Sem consulta inicial ao SPC/Serasa',
                'Aprovação em menos de 5 minutos',
                'Dinheiro na conta em até 24 horas',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Simulator Card */}
          <div className="card-glass p-8 md:p-10 shadow-[var(--shadow-card)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -z-10" />
            
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
                <TrendingUp className="text-primary" /> Simule seu Crédito
              </h3>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Shield className="w-3 h-3" /> Seguro
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Valor do Crédito</label>
                  <span className="text-2xl font-black text-primary">R$ {amount.toLocaleString('pt-BR')}</span>
                </div>
                <input 
                  type="range" 
                  min="5000" 
                  max="500000" 
                  step="5000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>R$ 5.000</span>
                  <span>R$ 500.000</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Prazo de Pagamento</label>
                  <span className="text-2xl font-black text-foreground">{months} meses</span>
                </div>
                <input 
                  type="range" 
                  min="12" 
                  max="120" 
                  step="12"
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>12 meses</span>
                  <span>120 meses</span>
                </div>
              </div>

              <div className="bg-background/50 rounded-2xl p-6 border border-border">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-muted-foreground text-xs uppercase font-bold mb-1">Parcela Estimada</p>
                    <p className="text-2xl font-black text-foreground">
                      R$ {monthlyInstallment.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-foreground text-xs uppercase font-bold mb-1">Taxa Mensal</p>
                    <p className="text-lg font-bold text-success">A partir de 1.29%</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={handleWhatsApp}
                className="w-full btn-primary group"
              >
                <MessageCircle className="w-5 h-5" />
                GARANTIR MINHA TAXA ESPECIAL
                <Zap className="w-4 h-4" />
              </button>
              
              <p className="text-center text-xs text-muted-foreground">
                *Sujeito a análise de crédito. Processamento 100% criptografado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimulatorSection;
