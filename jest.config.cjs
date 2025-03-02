module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { 
      isolatedModules: true,
      useESM: true
    }]
  },
  setupFiles: ['<rootDir>/jest.setup.globals.js'],
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js',
    '@testing-library/jest-dom'
  ],
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)', 
    '**/?(*.)+(spec|test).[tj]s?(x)'
  ],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^react-i18next$': '<rootDir>/src/__mocks__/react-i18next.js',
    '^i18next$': '<rootDir>/src/__mocks__/i18next.js',
    '^src/i18n/i18n$': '<rootDir>/src/__mocks__/i18n.ts',
    '^@/env$': '<rootDir>/src/__mocks__/envMock.ts',
    '^(\\.{1,2}/.*)\\.js$': '$1',
    '^./components/GoogleAnalytics$': '<rootDir>/src/__mocks__/GoogleAnalytics.tsx',
  },
  collectCoverage: false,
  transformIgnorePatterns: [
    'node_modules/(?!(react-dnd|dnd-core|@react-dnd|react-dnd-html5-backend)/)',
    '\\.pnp\\.[^\\/]+$'
  ]
};
