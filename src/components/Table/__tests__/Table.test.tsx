import React from "react";
import { MemoryRouter } from "react-router";
import {
  render,
  fireEvent,
  waitFor,
  cleanup,
  getByTestId,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import SortableTable from "../Table";

describe("Sidebar", () => {
  afterEach(cleanup);
  it("should paginate table correctly", async () => {
    const { getByText } = render(
      <MemoryRouter>
        <SortableTable data={new Array(100).fill({})} />
      </MemoryRouter>
    );

    const page2Link = getByText("2");
    expect(page2Link).toBeInTheDocument();
    fireEvent.click(page2Link);

    await waitFor(() => {
      expect(getByText("10")).toBeInTheDocument();
    });
  });
  it("handles a MAX_PAGES_TO_DISPLAY value less than the total number of pages", () => {
    const data = [
      { orgName: "Oando" },
      { orgName: "McKinsey" },
      { orgName: "PWC" },
      { orgName: "Lendsqr" },
      { orgName: "Deloitte" },
      { orgName: "KPMG" },
      { orgName: "Agbado" },
      { orgName: "Bloomberg" },
      { orgName: "Dangote" },
      { orgName: "Tesla" },
      { orgName: "Apple" },
    ];
    const { getByTestId, queryByText } = render(
      <MemoryRouter>
        <SortableTable data={data} />
      </MemoryRouter>
    );
    expect(queryByText("Oando")).toBeInTheDocument();
    expect(queryByText("McKinsey")).toBeInTheDocument();
    expect(queryByText("PWC")).toBeInTheDocument();
    expect(queryByText("Tesla")).not.toBeInTheDocument();
    expect(queryByText("Apple")).not.toBeInTheDocument();

    fireEvent.click(getByTestId("Next"));
    expect(queryByText("Oando")).not.toBeInTheDocument();
    expect(queryByText("McKinsey")).not.toBeInTheDocument();
    expect(queryByText("PWC")).not.toBeInTheDocument();
    expect(queryByText("Tesla")).toBeInTheDocument();
    expect(queryByText("Apple")).toBeInTheDocument();
  });
});
