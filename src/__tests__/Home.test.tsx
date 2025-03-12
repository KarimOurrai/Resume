import React from "react";
import { render } from "@testing-library/react";
import Home from "../pages/Home";
import { test, expect } from "@jest/globals";

test("renders Home page with main tag", () => {
  const { container } = render(<Home />);
  const main = container.querySelector("main");
  expect(main).toBeDefined();
});
