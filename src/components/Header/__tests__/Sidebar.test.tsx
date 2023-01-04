import React from "react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, cleanup } from "@testing-library/react";
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

  //   it("calls the logout function when the logout link is clicked", () => {
  //     const logoutMock = jest.fn();
  //     jest
  //       .spyOn(useNavigate, "useNavigate")
  //       .mockImplementation(() => logoutMock);
  //     const { getByText } = render(
  //       <Sidebar open={true} close={() => {}} logout={logoutMock} />
  //     );
  //     fireEvent.click(getByText("Log Out"));
  //     expect(navigate).toHaveBeenCalledWith("/some/url");
  //   });
});
