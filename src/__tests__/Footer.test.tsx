/// <reference types="jest" />
import { describe, expect, jest, test } from "@jest/globals";
import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

// Mock useTheme from next-themes
jest.mock("next-themes", () => ({
  useTheme: () => ({ theme: "light" }),
}));

// Mock useTranslation from react-i18next
jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key, // simple echo to test translation keys
  }),
}));

describe("Footer Component", () => {
  test("renders the footer with the current year and correct text", () => {
    render(<Footer />);
    // Check for the current year in the document
    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(currentYear))).toBeDefined();
    // Check for static text from the component
    expect(screen.getByText(/Karim Ourrai/)).toBeDefined();
    // Check for the translation key output (since our mock t returns the key)
    expect(screen.getByText(/footer\.rights/)).toBeDefined();
  });
});
