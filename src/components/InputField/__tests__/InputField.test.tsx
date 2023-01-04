import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import InputField from "../InputField";
import { debug } from "console";

describe("Button component", () => {
  it("renders input field with value and onChange props", () => {
    const mockOnChange = jest.fn();
    const { getByDisplayValue } = render(
      <InputField value="my old name" onChange={mockOnChange} placeholder="" />
    );
    const inputElement = getByDisplayValue(/my old name/i);
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, { target: { value: "my new name" } });
    expect(mockOnChange).toHaveBeenCalled();
  });
  it("renders error message when required field is passed", () => {
    const { getByText, getByPlaceholderText } = render(
      <InputField
        errorMessage="This is an error message"
        placeholder="Enter your email"
        required={true}
        onChange={() => {}}
        value=""
      />
    );
    const inputElement = getByPlaceholderText(/enter your email/i);
    fireEvent.blur(inputElement);
    const errorMessageElement = getByText(/This is an error message/i);
    expect(errorMessageElement).toBeInTheDocument();
  });
  it("doesn't render the errorMessage when required field is not passed", () => {
    const { getByPlaceholderText, queryByText } = render(
      <InputField
        errorMessage="This is an error message"
        placeholder="Enter your email"
        onChange={() => {}}
        value=""
      />
    );
    const inputElement = getByPlaceholderText(/enter your email/i);
    fireEvent.change(inputElement, { target: { value: "test@example.com" } });
    fireEvent.blur(inputElement);
    const errorMessageElement = queryByText(/this field is required/i);
    expect(errorMessageElement).toBeNull();
  });
});
