import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type GTagEvent = {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: string | number | undefined; 
};

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
    gtag: (
      command: 'js' | 'config' | 'event',
      targetId: string | Date,
      config?: Record<string, unknown> | GTagEvent
    ) => void;
  }
}

export default function GoogleAnalytics() {
  let location;
  try {
    location = useLocation();
  } catch {
    // Return null if not in router context
    return null;
  }
  
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', measurementId, {
        page_path: location.pathname + location.search
      });
    }
  }, [location, measurementId]);

  return null;
}
