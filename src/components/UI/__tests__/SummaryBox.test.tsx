import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SummaryBox from "../SummaryBox/SummaryBox";

describe("Typographies", () => {
  it("renders the summary box with the correct title and figure", () => {
    const summary = {
      icon: "some-icon.png",
      title: "Some Title",
      figure: "123",
    };

    const { getByText } = render(<SummaryBox summary={summary} />);

    expect(getByText(summary.title)).toBeInTheDocument();
    expect(getByText(summary.figure)).toBeInTheDocument();
  });
  it("does not render the summary box when the summary object is not provided", () => {
    // Arrange
    const summary = {};

    // Act
    const { queryByText } = render(<SummaryBox summary={summary as any} />);

    // Assert
    expect(queryByText("Some Title")).toBeNull();
    expect(queryByText("123")).toBeNull();
  });
});
