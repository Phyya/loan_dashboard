import React from "react";
import NoResults from "../../../../components/UI/NoResults/NoResult";
import styles from "../../Users.module.scss";

type IProps = {
  message?: string;
  applyMargin?: boolean;
};

const ExtraTab: React.FC<IProps> = (props) => {
  const { message, applyMargin } = props;
  return (
    <div className={applyMargin ? styles.extraTabContainer : ""}>
      <NoResults message={message ? message : "Not Available Yet"} />
    </div>
  );
};

export default ExtraTab;
