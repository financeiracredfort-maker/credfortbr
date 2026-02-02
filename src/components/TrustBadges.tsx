import React from 'react';
import { Lock, ShieldCheck, CheckCircle2, Award } from 'lucide-react';

const TrustBadges = () => {
  return (
    <div className="bg-background py-10 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16">
        <div className="trust-badge">
          <Lock className="w-5 h-5" /> SSL SECURE
        </div>
        <div className="trust-badge">
          <ShieldCheck className="w-5 h-5" /> LGPD COMPLIANT
        </div>
        <div className="trust-badge">
          <CheckCircle2 className="w-5 h-5" /> BACEN CERTIFIED
        </div>
        <div className="trust-badge">
          <Award className="w-5 h-5" /> ISO 27001
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
