const { expect } = require('@jest/globals');
global.expect = expect;

// Mock import.meta
global.import = {};
global.import.meta = {
  env: {
    VITE_GA_MEASUREMENT_ID: 'mock-ga-id',
    MODE: 'test'
  }
};
