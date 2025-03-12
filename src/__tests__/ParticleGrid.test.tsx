import React from "react";
import { render } from "@testing-library/react";
import ParticleGrid from "../components/ParticleGrid";
import { test, expect } from "@jest/globals";

test("renders ParticleGrid canvas element", () => {
  const { container } = render(<ParticleGrid />);
  const canvas = container.querySelector("canvas");
  expect(canvas).toBeDefined();
});
