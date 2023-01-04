import { FC } from "react";
import Typography from "../../Typography/Typography";
import styles from "./SummaryBox.module.scss";

interface PropsObject {
  icon: string;
  title: string;
  figure: string;
}
interface SummaryBoxProps {
  summary: PropsObject;
}

const SummaryBox: FC<SummaryBoxProps> = (props) => {
  const {
    summary: { icon, title, figure },
  } = props;
  return (
    <div className={styles.summaryBox}>
      <img src={icon} alt="summary icon" />
      <Typography element="p" text={title} />
      <Typography element="h2" text={figure} />
    </div>
  );
};

export default SummaryBox;
