import Plausible from 'plausible-tracker';

const isProduction = typeof window !== 'undefined' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';

const plausible = Plausible({
  domain: 'muthuajay.github.io',
  trackLocalhost: false,
});

export const trackPageview = () => {
  if (!isProduction) return;
  plausible.trackPageview();
};

export const trackEvent = (eventName: string, props?: Record<string, string | number | boolean>) => {
  if (!isProduction) return;
  plausible.trackEvent(eventName, { props });
};