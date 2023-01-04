import React from "react";
import Typography from "../../Typography/Typography";
import styles from "./FlexItem.module.scss";

interface ButtonProps {
  title: string;
  text: string;
}

const ColumnFlex: React.FC<ButtonProps> = (props) => {
  const { text, title } = props;

  return (
    <div className={styles.columnFlex}>
      <Typography element="p" text={title} />
      <Typography element="h5" text={text} />
    </div>
  );
};

export default ColumnFlex;
