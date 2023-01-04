import { MemoryRouter, Routes, Route } from "react-router-dom";
import {
  render,
  screen,
  fireEvent,
  cleanup,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ExtraPage from "../../../pages/ExtraPage/ExtraPage";
import Header from "../Header";
import styles from "../Header.module.scss";
import { act } from "react-dom/test-utils";
describe("Header", () => {
  afterEach(cleanup);
  it("closes the sidebar when the close icon is clicked", () => {
    const { getByTestId, debug } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const sidebar = getByTestId("side-navbar");
    const menuButton = getByTestId("menu-button");
    const closeButton = getByTestId("close-button");

    fireEvent.click(menuButton);
    expect(sidebar).toBeVisible();

    fireEvent.click(closeButton);
    expect(sidebar).toHaveClass(styles.sidebar);
  });
  it("should navigate to the correct routes", async () => {
    render(
      <MemoryRouter>
        <Header />
        <Routes>
          <Route path="/docs" element={<ExtraPage />} />
        </Routes>
      </MemoryRouter>
    );
    const docsLinks = screen.getAllByText("Docs");
    act(() => {
      docsLinks[0].click();
    });

    await waitFor(() =>
      expect(screen.getByText("Not Available Yet")).toBeInTheDocument()
    );
  });
});
