import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import OptionsModal from "../OptionModal";

describe("OptionsModal", () => {
  const options = [<p>Option 1</p>, <p>Option 2</p>];

  const onOptionsChange = jest.fn();
  const close = jest.fn();

  it("renders the options", () => {
    const { getByText } = render(
      <OptionsModal
        options={options}
        open
        onOptionsChange={onOptionsChange}
        close={close}
      />
    );
    expect(getByText("Option 1")).toBeInTheDocument();
    expect(getByText("Option 2")).toBeInTheDocument();
  });

  it("calls the close function when the overlay is clicked", () => {
    const { getByTestId } = render(
      <OptionsModal
        options={options}
        open
        onOptionsChange={onOptionsChange}
        close={close}
      />
    );
    fireEvent.click(getByTestId("overlay"));
    expect(close).toHaveBeenCalledTimes(1);
  });
  it("does not render the modal when open is false", () => {
    const options = {
      option1: true,
      option2: false,
    };
    const close = jest.fn();

    const { container } = render(
      <OptionsModal
        options={options}
        open={false}
        close={close}
        onOptionsChange={onOptionsChange}
      />
    );
    expect(container.firstChild).toBeNull();
  });
});
