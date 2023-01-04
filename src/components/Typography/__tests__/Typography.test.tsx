import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Typography from "../Typography";
import styles from "../Typography.module.scss";

describe("Typographies", () => {
  it("renders a typography element with the correct text and style", () => {
    const text = "Test Text";
    const element = "p";
    const variant = "danger";
    const active = true;
    const onClick = jest.fn();
    const { getByText } = render(
      <Typography
        text={text}
        element={element}
        variant={variant}
        active={active}
        onClick={onClick}
      />
    );

    expect(getByText(text)).toHaveClass(
      `${variant} ${active ? styles.active : ""} ${styles.clickable}`
    );
  });
  it("renders a typography element with the default style when the variant is not recognized", () => {
    const text = "Test Text";
    const element = "p";
    const variant = undefined;
    const active = true;
    const onClick = jest.fn();

    const { getByText } = render(
      <Typography
        text={text}
        element={element}
        variant={variant}
        active={active}
        onClick={onClick}
      />
    );

    expect(getByText(text)).toHaveClass(
      `${active ? styles.active : ""} ${styles.clickable}`
    );
  });
});
