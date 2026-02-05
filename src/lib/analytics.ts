// Google Analytics / Tag Manager Tracking Utilities

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Event types for tracking
export type ConversionEvent = 
  | 'whatsapp_click'
  | 'cta_click'
  | 'simulator_submit'
  | 'exit_intent_conversion'
  | 'hero_cta_click'
  | 'service_page_cta';

interface TrackEventParams {
  event: ConversionEvent;
  category: string;
  label?: string;
  value?: number;
  service_type?: string;
  page_location?: string;
}

// Track custom events
export const trackEvent = ({ 
  event, 
  category, 
  label, 
  value,
  service_type,
  page_location 
}: TrackEventParams) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event, {
      event_category: category,
      event_label: label,
      value: value,
      service_type: service_type,
      page_location: page_location || window.location.pathname,
    });
    
    // Also push to dataLayer for GTM
    window.dataLayer?.push({
      event: event,
      eventCategory: category,
      eventLabel: label,
      eventValue: value,
      serviceType: service_type,
      pageLocation: page_location || window.location.pathname,
    });

    console.log(`[Analytics] Event tracked: ${event}`, { category, label, value, service_type });
  }
};

// Track WhatsApp conversions
export const trackWhatsAppClick = (source: string, serviceType?: string) => {
  trackEvent({
    event: 'whatsapp_click',
    category: 'Conversion',
    label: source,
    service_type: serviceType,
  });

  // Google Ads conversion tracking
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'AW-626951375/whatsapp_conversion',
      event_category: 'WhatsApp',
      event_label: source,
    });
  }
};

// Track CTA clicks
export const trackCTAClick = (ctaName: string, location: string, serviceType?: string) => {
  trackEvent({
    event: 'cta_click',
    category: 'CTA',
    label: `${ctaName} - ${location}`,
    service_type: serviceType,
  });
};

// Track simulator submissions
export const trackSimulatorSubmit = (amount: number, months: number) => {
  trackEvent({
    event: 'simulator_submit',
    category: 'Engagement',
    label: `R$${amount} - ${months} meses`,
    value: amount,
  });

  // Google Ads conversion for high-value leads
  if (window.gtag && amount >= 50000) {
    window.gtag('event', 'conversion', {
      send_to: 'AW-626951375/simulator_high_value',
      value: amount,
      currency: 'BRL',
    });
  }
};

// Track exit intent popup conversions
export const trackExitIntentConversion = (action: 'shown' | 'converted' | 'dismissed') => {
  trackEvent({
    event: 'exit_intent_conversion',
    category: 'Exit Intent',
    label: action,
  });
};

// Track page views for SPA
export const trackPageView = (pagePath: string, pageTitle: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'AW-626951375', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
};
