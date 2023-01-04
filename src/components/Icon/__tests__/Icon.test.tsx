import React from "react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Icon from "../Icon";

describe("Sidebar", () => {
  afterEach(cleanup);
  it("renders the Icon component", () => {
    const iconUrl = "https://example.com/icon.png";
    const { container } = render(<Icon src={iconUrl} />);
    expect(container).toContainHTML(`<img src="${iconUrl}" alt = "icon">`);
  });
  it("returns null if no icon prop is passed", () => {
    const iconUrl = "";
    const { container } = render(<Icon src={iconUrl} />);
    expect(container).not.toContainHTML(`<img src="${iconUrl}" alt = "icon">`);
  });
});
