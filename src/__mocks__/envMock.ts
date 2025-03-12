declare global {
  interface Window {
    env: typeof env;
  }
}

export const env = {
  VITE_GA_MEASUREMENT_ID: "mock-ga-id",
};

if (typeof window !== "undefined") {
  window.env = env;
}

export default {
  env,
  mode: "test",
};
