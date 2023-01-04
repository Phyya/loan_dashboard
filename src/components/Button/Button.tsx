import React from "react";
import { ImSpinner } from "react-icons/im";
import styles from "./Button.module.scss";

interface IButtonProps {
  text: string;
  icon?: boolean;
  variant?: keyof typeof styles;
  noRadius?: boolean;
  loading?: boolean;
  onClick: () => void;
  style?: object;
}

const Button: React.FC<IButtonProps> = (props) => {
  const { text, onClick, icon, noRadius, style, variant, loading } = props;
  return (
    <button
      onClick={onClick}
      style={{ ...style }}
      className={`${variant ? styles[variant] : styles.solidButton} ${
        noRadius ? undefined : styles.btnRadius
      }`}
    >
      {icon ? <img src={text} alt="search icon" /> : text}
      {loading && <ImSpinner className={styles.spinner} />}
    </button>
  );
};

export default Button;
