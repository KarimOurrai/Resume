module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { isolatedModules: true }]
  },
  setupFiles: ['<rootDir>/jest.setup.js'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)', 
    '**/?(*.)+(spec|test).[tj]s?(x)'
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^react-i18next$': '<rootDir>/src/__mocks__/react-i18next.js',
    '^i18next$': '<rootDir>/src/__mocks__/i18next.js',
    '^src/i18n/i18n$': '<rootDir>/src/__mocks__/i18n.ts'
  },
  collectCoverage: false, 
};
