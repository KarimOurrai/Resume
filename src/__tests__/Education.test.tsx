import React from 'react';
import { render, screen } from '@testing-library/react';
import Education from '../pages/Education';
import { describe, expect, jest, test } from '@jest/globals';

jest.mock("next-themes", () => ({
  useTheme: () => ({ theme: "light" })
}));

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key  // simple echo to test translation keys
  })
}));

describe("Education Component", () => {
  test("renders education title and items", () => {
    render(<Education />);
    // Check that the education title is rendered based on the translation key.
    expect(screen.getByText(/education\.title/)).toBeDefined();
    
    // Use getAllByText to verify that multiple education items are rendered.
    const degreeElements = screen.getAllByText(/education\.degrees\..*\.degree/);
    expect(degreeElements.length).toBeGreaterThan(0);
    // Optionally, expect the exact number of education items if known (e.g., 3)
    // expect(degreeElements.length).toBe(3);
  });
});
