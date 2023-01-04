import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ColumnFlex from "../FlexItem/ColumnFlex";

describe("Typographies", () => {
  it("renders the title and text provided in the props", () => {
    const title = "Some Title";
    const text = "Some Text";

    const { getByText } = render(<ColumnFlex title={title} text={text} />);

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(text)).toBeInTheDocument();
  });
});
