import React from "react";
import { RxCaretRight, RxCaretLeft } from "react-icons/rx";
import briefcase from "../../assets/icons/briefcase.svg";
import downcaret from "../../assets/icons/downcaret.svg";
import home from "../../assets/icons/home.svg";
import { sidebarlinks } from "../../data";
import Icon from "../Icon/Icon";
import Typography from "../Typography/Typography";
import IconLink from "./IconLink";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
  open: boolean;
  close: (val: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const { open, close } = props;

  return (
    <div className={`${styles.sidebar} ${open ? styles.pulled : undefined}`}>
      <div
        className={styles.puller}
        onClick={() => close(!open)}
        data-testid="puller"
      >
        {open ? (
          <RxCaretLeft data-testid="puller-left" />
        ) : (
          <RxCaretRight data-testid="puller-right" />
        )}
      </div>
      <div className={styles.sidebarDefaultText}>
        <Icon src={briefcase} />
        <Typography text={"Switch Organization"} element="p" />
        <div className={styles.downCaret}>
          <Icon src={downcaret} />
        </div>
      </div>
      <div className={styles.sidebarDashboardLink}>
        <div className={styles.sidebarDefaultText}>
          <Icon src={home} />
          <Typography text={"Dashboard"} element="p" />
        </div>
      </div>

      {sidebarlinks.map((section) => (
        <div dat-testid="sidebar-section-title">
          {section.map((ss, index) => (
            <div
              className={styles.sidebarSectionTitles}
              key={`${ss.section}-${index}`}
            >
              <Typography text={ss.section} element="h6" />
              <ul>
                {ss.links.map((item, index) => (
                  <IconLink item={item} key={`${item.name}-${index}`} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
