import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
      command: "js" | "config" | "event",
      targetId: string | Date,
      config?: Record<string, unknown> | GTagEvent
    ) => void;
  }
}

const GoogleAnalytics = () => {
  const location = useLocation();
  const measurementId = import.meta?.env?.VITE_GA_MEASUREMENT_ID;

  useEffect(() => {
    if (typeof window.gtag !== "undefined" && measurementId) {
      window.gtag("config", measurementId, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location, measurementId]);

  return null;
};

export function GoogleAnalyticsWrapper() {
  let isRouterAvailable = true;

  try {
    // This is okay because it's at the top level of the component
    useLocation();
  } catch {
    isRouterAvailable = false;
  }

  if (!isRouterAvailable) {
    return null;
  }

  return <GoogleAnalytics />;
}

export default GoogleAnalytics;
