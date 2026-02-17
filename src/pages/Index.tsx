import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustBadges from '@/components/TrustBadges';
import HowItWorksSection from '@/components/HowItWorksSection';
import SimulatorSection from '@/components/SimulatorSection';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import { trackPageConversion } from '@/lib/analytics';

const Index = () => {
  useEffect(() => {
    trackPageConversion();
  }, []);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <ExitIntentPopup />
      <HeroSection />
      <TrustBadges />
      <HowItWorksSection />
      <SimulatorSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
