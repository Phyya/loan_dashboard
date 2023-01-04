import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LoadingOverlay from "../Overlay/LoadingOverlay";

describe("Loading Overlays", () => {
  it("renders the loading overlay when visible", () => {
    const visible = true;

    const { getByTestId } = render(<LoadingOverlay visible={visible} />);

    expect(getByTestId("loading-overlay")).toBeInTheDocument();
  });

  test("does not render the loading overlay when not visible", () => {
    const visible = false;

    const { queryByTestId } = render(<LoadingOverlay visible={visible} />);

    expect(queryByTestId("loading-overlay")).toBeNull();
  });
});
