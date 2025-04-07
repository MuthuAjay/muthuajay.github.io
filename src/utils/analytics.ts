import Plausible from 'plausible-tracker';

const plausible = Plausible({
  domain: 'muthuajay.com',
  trackLocalhost: true,
});

export const trackPageview = () => {
  plausible.trackPageview();
};

export const trackEvent = (eventName: string, props?: Record<string, string | number | boolean>) => {
  plausible.trackEvent(eventName, { props });
};