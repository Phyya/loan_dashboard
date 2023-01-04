import React from "react";
import {
  render,
  fireEvent,
  screen,
  getByPlaceholderText,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FilterableSidebar from "../FilterableSidebar";
import { act } from "react-dom/test-utils";

describe("FilterSidebar", () => {
  it("FilterableSidebar component", () => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
    const organizations = ["Organization 1", "Organization 2"];
    const statuses = ["Active", "Inactive"];
    const closeMock = jest.fn();
    const filterByParamMock = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <FilterableSidebar
        organizations={organizations}
        statuses={statuses}
        close={closeMock}
        open={true}
        filterByParam={filterByParamMock}
      />
    );

    expect(getByText("Organization")).toBeInTheDocument();
    expect(getByText("Username")).toBeInTheDocument();
    expect(getByText("Email")).toBeInTheDocument();
    expect(getByText("Date")).toBeInTheDocument();
    expect(getByText("Phone Number")).toBeInTheDocument();
    expect(getByText("Status")).toBeInTheDocument();

    fireEvent.change(getByPlaceholderText("Username"), {
      target: { value: "test username" },
    });
    fireEvent.change(getByPlaceholderText("Email"), {
      target: { value: "test@email.com" },
    });
    fireEvent.change(getByPlaceholderText("Date"), {
      target: { value: "2022-01-01" },
    });
    fireEvent.change(getByPlaceholderText("Phone Number"), {
      target: { value: "123-456-7890" },
    });

    expect(getByPlaceholderText("Username")).toHaveValue("test username");
    expect(getByPlaceholderText("Email")).toHaveValue("test@email.com");
    expect(getByPlaceholderText("Date")).toHaveValue("2022-01-01");
    expect(getByPlaceholderText("Phone Number")).toHaveValue("123-456-7890");

    fireEvent.click(getByText("Filter"));

    expect(filterByParamMock).toHaveBeenCalledWith({
      email: "test@email.com",
      username: "test username",
      date: "2022-01-01",
      phoneNumber: "123-456-7890",
      status: "Active",
      orgName: "Organization 1",
    });
  });
});
