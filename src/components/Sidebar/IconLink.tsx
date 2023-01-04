import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../Icon/Icon";
import Typography from "../Typography/Typography";
import styles from "./Sidebar.module.scss";
interface IconObject {
  name: string;
  icon: string;
  to: string;
}

interface IconLinkProps {
  item: IconObject;
}

const IconLink: React.FC<IconLinkProps> = (props) => {
  const {
    item: { name, icon, to },
  } = props;
  return (
    <div className={styles.iconlink}>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? styles.active : undefined)}
      >
        <Icon src={icon} />
        <Typography text={name} element="p" />
      </NavLink>
    </div>
  );
};

export default IconLink;
