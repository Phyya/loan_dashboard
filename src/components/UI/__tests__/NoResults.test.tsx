import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NoResults from "../NoResults/NoResult";

describe("Not Available or No Resu;ts", () => {
  it("renders the no results message and image", () => {
    const message = "No results found";

    const { getByText, getByAltText } = render(<NoResults message={message} />);

    expect(getByText(message)).toBeInTheDocument();
    expect(getByAltText("no results")).toBeInTheDocument();
  });
});
