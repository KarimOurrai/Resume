module.exports = {
  use: function() { return this; },
  init: jest.fn(),
  changeLanguage: jest.fn(() => Promise.resolve()),
  dir: () => 'ltr',
  t: (key) => key,
  language: 'en'
};
