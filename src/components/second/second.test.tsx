import Second from "./second";
import { render, screen } from "@testing-library/react";

describe("Second", () => {
  test("renders correctly", () => {
    render(<Second />);
    const nameEl = screen.getByRole("textbox");
    expect(nameEl).toBeInTheDocument();
    const jobLocation = screen.getByRole("combobox");
    expect(jobLocation).toBeInTheDocument();
  });
  test();
});
