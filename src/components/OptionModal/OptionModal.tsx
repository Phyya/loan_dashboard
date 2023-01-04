import React, { useState } from "react";
import styles from "./Option.module.scss";

type Options = Record<string, any>;

type Props = {
  options: Options;
  style?: React.CSSProperties;
  close: () => void;
  open: boolean;
  onOptionsChange: (options: Options) => void;
};

const OptionsModal: React.FC<Props> = ({
  options,
  open,
  onOptionsChange,
  close,
  style,
}) => {
  if (!open) return null;
  return (
    <>
      <div className={styles.overlay} onClick={close} data-testid="overlay" />
      <div className={styles.optionsModal} style={style}>
        {options.map((option: any, index: number) => {
          return <React.Fragment key={index}>{option}</React.Fragment>;
        })}
      </div>
    </>
  );
};
export default OptionsModal;
