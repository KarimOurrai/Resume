import React from 'react';
import { render, screen } from '@testing-library/react';
import { test , expect, jest} from '@jest/globals';
import App from '../App';

jest.mock('../components/GoogleAnalytics', () => {
  return {
    __esModule: true,
    default: () => null
  };
});

test('renders About button', () => {
  render(<App />);
  const aboutButton = screen.getByText(/about/i);
  expect(aboutButton).toBeDefined();
});

