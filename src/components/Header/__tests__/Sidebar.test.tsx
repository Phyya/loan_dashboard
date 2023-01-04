import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import Sidebar from "../Sidebar";

describe("Sidebar", () => {
  afterEach(cleanup);
  it("renders the SideNavbar component", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Sidebar open={false} close={() => {}} logout={() => {}} />
      </MemoryRouter>
    );
    expect(getByTestId("side-navbar")).toBeInTheDocument();
  });
});
