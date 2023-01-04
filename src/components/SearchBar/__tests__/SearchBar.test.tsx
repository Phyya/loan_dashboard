import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchBar from "../SearchBar";

describe("SearchBar", () => {
  it("renders the input field and search button", () => {
    const placeholder = "Enter email address";
    const { getByPlaceholderText } = render(
      <SearchBar placeholder={placeholder} data={[]} />
    );
    expect(getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  it("displays the search icon instead of text in the search button", () => {
    const placeholder = "Enter email address";
    const { getByPlaceholderText, getByAltText } = render(
      <SearchBar placeholder={placeholder} data={[]} />
    );
    expect(getByPlaceholderText(placeholder)).toBeInTheDocument();
    expect(getByAltText("search icon")).toBeInTheDocument();
  });
});
