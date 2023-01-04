import React from "react";
import styles from "./Typography.module.scss";

interface TypographyProps {
  text: string;
  title?: boolean;
  variant?: keyof typeof styles;
  active?: boolean;
  onClick?: () => void;
  element: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Typography: React.FC<TypographyProps> = (props) => {
  const { text, element, title, variant, active, onClick } = props;

  return React.createElement(
    element,
    {
      className: ` ${title ? styles.primaryTitle : ""} ${
        variant ? styles[variant] : ""
      } ${active ? styles.active : ""} ${onClick ? styles.clickable : ""}`,
      onClick: () => onClick && onClick(),
    },
    text
  );
};

export default Typography;
