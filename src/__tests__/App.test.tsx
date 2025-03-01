import React from 'react';
import { render, screen } from '@testing-library/react';
import { test , expect} from '@jest/globals';
import App from '../App';

test('renders About button', () => {
  render(<App />);
  const aboutButton = screen.getByText(/about/i);
  expect(aboutButton).toBeDefined();
});
// Removed the custom expect function as it's already provided by jest.
// You can safely remove this placeholder.
// You can safely remove the placeholder function.


