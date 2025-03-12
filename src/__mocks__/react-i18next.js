module.exports = {
  useTranslation: () => ({
    t: (key) => key,
    i18n: {
      changeLanguage: () => new Promise((resolve) => resolve()),
      dir: () => "ltr",
    },
  }),
  Trans: ({ children }) => children,
  withTranslation: () => (Component) => Component,
  // Add any additional mock implementations if required.
};
