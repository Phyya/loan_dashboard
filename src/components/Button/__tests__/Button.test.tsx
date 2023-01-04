import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../Button";
import styles from "../Button.module.scss";

describe("Button component", () => {
  it("renders the correct text and style", () => {
    const { getByText } = render(
      <Button
        text="Click me"
        variant="primary"
        style={{ width: "100px" }}
        onClick={() => {}}
      />
    );
    const button = getByText("Click me");
    expect(button).toHaveClass(styles.primary);
    expect(button).toHaveStyle("width: 100px");
  });
  it("calls the onClick prop when clicked", () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button text="Click me" onClick={onClick} />);
    const button = getByText("Click me");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
  it("renders an icon if the icon prop is set", () => {
    const iconUrl = "https://example.com/icon.png";
    const { container } = render(
      <Button text={iconUrl} icon onClick={() => {}} />
    );
    const button = container.firstChild;
    expect(button).toContainHTML(`<img src="${iconUrl}" alt = "search icon>`);
  });

  //   it("renders with the transparent background if the variant prop is set", () => {
  //     const { getByText, debug } = render(
  //       <Button text="Click nafisat" variant="primary" noRadius onClick={() => {}} />
  //     );
  //     const button = getByText("Click nafisat");
  //     debug(button);
  //     expect(button).toHaveClass(styles.primary);
  //     expect(button).toHaveStyle("background-color: transparent");
  //   });

  it("handles the negative scenario", () => {
    const { getByText } = render(
      <Button
        text="Click me"
        onClick={() => {}}
        icon={false}
        noRadius={false}
      />
    );
    const button = getByText("Click me");
    expect(button).toHaveClass(styles.solidButton);
    expect(button).toHaveClass(styles.btnRadius);
  });
});
