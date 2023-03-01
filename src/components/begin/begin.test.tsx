import { render, screen } from "@testing-library/react";
import Begin from "./begin";

describe("Begin", () => {
  test("Test begin component", () => {
    render(<Begin />);
    const textElement = screen.getByText(/Begin/i);
    expect(textElement).toBeInTheDocument();
  }, 3000);

  describe("Nested tests", () => {
    // nested test blocks
    test("Begin test with props", () => {
      render(<Begin name="lorem" />);
      const textElement = screen.getByText(/Begin lorem/i);
      expect(textElement).toBeInTheDocument();
    });
  });

  describe.only("Nested tests", () => {
    // nested test blocks
    // failed test
    test("Begin test with props", () => {
      render(<Begin name="lorem" />);
      const textElement = screen.getByText(/Begin lorem/i);
      expect(textElement).toBeInTheDocument();
    });
  });
});

describe.skip("Skipped test block", () => {
  test("Test name", () => {
    render(<Begin />);
    const expectedValue = screen.getByText("Skipped test");
    expect(expectedValue).toBeInTheDocument();
  });
});
