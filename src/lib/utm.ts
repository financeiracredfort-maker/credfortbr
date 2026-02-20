// UTM Parameter Capture & Storage
// Captures UTM params from URL on first visit and persists in sessionStorage

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  fbclid?: string;
}

const UTM_KEYS: (keyof UTMParams)[] = [
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'
];

const STORAGE_KEY = 'credfort_utm';

/** Capture UTM params from current URL and store them */
export const captureUTMParams = (): UTMParams => {
  const params = new URLSearchParams(window.location.search);
  const utm: UTMParams = {};
  let hasAny = false;

  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) {
      utm[key] = value;
      hasAny = true;
    }
  }

  // Only overwrite if new UTM params are present (preserve first-touch)
  if (hasAny) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utm));
    console.log('[UTM] Params captured:', utm);
  }

  return getUTMParams();
};

/** Retrieve stored UTM params */
export const getUTMParams = (): UTMParams => {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

/** Format UTM data as a readable string to append to WhatsApp messages */
export const getUTMWhatsAppSuffix = (): string => {
  const utm = getUTMParams();
  const parts: string[] = [];

  if (utm.utm_source) parts.push(`Origem: ${utm.utm_source}`);
  if (utm.utm_medium) parts.push(`Mídia: ${utm.utm_medium}`);
  if (utm.utm_campaign) parts.push(`Campanha: ${utm.utm_campaign}`);
  if (utm.utm_term) parts.push(`Termo: ${utm.utm_term}`);
  if (utm.utm_content) parts.push(`Conteúdo: ${utm.utm_content}`);
  if (utm.gclid) parts.push(`Google Ads: sim`);
  if (utm.fbclid) parts.push(`Meta Ads: sim`);

  if (parts.length === 0) return '';

  return `\n\n📊 [Dados da campanha]\n${parts.join('\n')}`;
};

/** Build a WhatsApp URL with UTM data appended to the message */
export const buildWhatsAppURL = (number: string, message: string): string => {
  const fullMessage = message + getUTMWhatsAppSuffix();
  return `https://wa.me/${number}?text=${encodeURIComponent(fullMessage)}`;
};
