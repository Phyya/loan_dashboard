import React from "react";
import Icon from "../../Icon/Icon";
import Typography from "../../Typography/Typography";
import styles from "./FlexItem.module.scss";

interface ButtonProps {
  title: boolean;
  text: string;
  icon: string;
  onClick?: () => void;
}

const HorizontalFlexWithIcon: React.FC<ButtonProps> = (props) => {
  const { text, icon, onClick } = props;

  return (
    <div className={styles.flexWithIcon} onClick={() => onClick && onClick()}>
      <Icon src={icon} />
      <Typography title element="h5" text={text} />
    </div>
  );
};

export default HorizontalFlexWithIcon;
