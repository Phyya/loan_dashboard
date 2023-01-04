import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dropdown from "../Dropdown";
import styles from "../Dropdown.module.scss";

describe("Dropdown component", () => {
  it("renders the options prop as options in the select element", () => {
    const options = ["Option 1", "Option 2", "Option 3"];
    const { getByText } = render(
      <Dropdown options={options} onChange={() => {}} />
    );
    options.forEach((option) => {
      expect(getByText(option)).toBeInTheDocument();
    });
  });
  it("applies the bordered class to the dropdown element when the bordered prop is set", () => {
    const { getByTestId } = render(
      <Dropdown options={["Option 1"]} onChange={() => {}} bordered />
    );
    const dropdown = getByTestId("dropdown");
    expect(dropdown).toHaveClass(styles.bordered);
  });
  it("renders the label prop as a Typography component", () => {
    const label = "Dropdown Label";
    const { getByText } = render(
      <Dropdown options={["Option 1"]} onChange={() => {}} label={label} />
    );
    expect(getByText(label)).toBeInTheDocument();
  });
  it("updates the selectedOption state when the select element's value changes", () => {
    const options = ["Option 1", "Option 2", "Option 3"];
    const { getByTestId } = render(
      <Dropdown options={options} onChange={() => {}} />
    );
    const select = getByTestId("select") as HTMLSelectElement;
    fireEvent.change(select, { target: { value: "Option 2" } });
    expect(select.value).toBe("Option 2");
  });
});
