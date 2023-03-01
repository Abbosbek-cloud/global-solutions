import { render, screen } from "@testing-library/react";
import Begin from "./begin";

describe("Begin", () => {
  test("Test begin component", () => {
    render(<Begin />);
    const textElement = screen.getByText(/Begin/i);
    expect(textElement).toBeInTheDocument();
  }, 3000);

  test("Begin test with props", () => {
    render(<Begin name="lorem" />);
    const textElement = screen.getByText(/Begin lorem/i);
    expect(textElement).toBeInTheDocument();
  });
});
