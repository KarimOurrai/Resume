import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "../pages/Contact";
import { describe, expect, jest, test } from "@jest/globals";

jest.mock("next-themes", () => ({
  useTheme: () => ({ theme: "light" }),
}));

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key, // echo translation key
  }),
}));

describe("Contact Component", () => {
  test("renders contact title and email link", () => {
    render(<Contact />);
    // Verify title rendered using translation key
    expect(screen.getByText(/contact\.title/)).toBeDefined();
    // Verify email translation key and the email address are present
    expect(screen.getByText(/contact\.email/)).toBeDefined();
    expect(screen.getByText(/karim\.ourrai@gmail\.com/i)).toBeDefined();
  });
});
