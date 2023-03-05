import Second from "./second";
import { render, screen } from "@testing-library/react";

describe("Second", () => {
  test("renders correctly", () => {
    render(<Second />);
    const nameEl = screen.getByRole("textbox", {
      name: "Name",
    });
    // github
    // wdwd
    expect(nameEl).toBeInTheDocument();

    const labelText = screen.getByLabelText("Name");
    expect(labelText).toBeInTheDocument();

    const jobLocation = screen.getByRole("combobox");
    expect(jobLocation).toBeInTheDocument();

    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const pageLittleHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(pageLittleHeading).toBeInTheDocument();

    const textField = screen.getByRole("textbox", {
      name: "Surname",
    });
    expect(textField).toBeInTheDocument();
  });
});
