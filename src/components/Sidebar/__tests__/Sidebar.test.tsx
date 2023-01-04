import { MemoryRouter } from "react-router";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Sidebar from "../Sidebar";

describe("Sidebar", () => {
  afterEach(cleanup);
  it("toggles the open state when the puller is clicked", async () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Sidebar open={false} close={jest.fn()} />
      </MemoryRouter>
    );
    const rightArr = getByTestId("puller-right");
    expect(rightArr).toBeInTheDocument();
  });
  it("does not render the sidebarSectionTitles element when open is false", () => {
    const { queryByTestId } = render(
      <MemoryRouter>
        <Sidebar open={false} close={jest.fn()} />
      </MemoryRouter>
    );
    const sidebarSectionTitlesElement = queryByTestId("sidebar-section-titles");
    expect(sidebarSectionTitlesElement).toBeNull();
  });
});
