import React from 'react';
import { render } from "@testing-library/react";
import Home from "./index";

describe("Home", () => {
  it("renders the home page", () => {
    const { container } = render(<Home />);
    expect(container.querySelector("div")).toBeDefined();
  });
});
