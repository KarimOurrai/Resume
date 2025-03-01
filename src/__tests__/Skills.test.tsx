import React from 'react';
import { render, screen } from '@testing-library/react';
import Skills from '../pages/Skills';
import { describe, expect, jest, test } from '@jest/globals';

jest.mock("next-themes", () => ({
  useTheme: () => ({ theme: "light" })
}));

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key  // echo translation key
  })
}));

describe("Skills Component", () => {
  test("renders skills title and categories", () => {
    render(<Skills />);
    // Verify skills title
    expect(screen.getByText(/skills\.title/)).toBeDefined();
    
    // Use getAllByText for multiple category elements, and verify their count is > 0.
    const categoryElements = screen.getAllByText(/skills\.categories\..+/);
    expect(categoryElements.length).toBeGreaterThan(0);
    // Optionally, assert the specific expected number (e.g., 3 categories)
    // expect(categoryElements.length).toBe(3);
  });
});
