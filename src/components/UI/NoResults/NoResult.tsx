import React from "react";
import Typography from "../../Typography/Typography";
import unavailable from "../../../assets/images/unavailable.svg";
import styles from "./NoResults.module.scss";

interface NoResultsProps {
  message: string;
}

const NoResults: React.FC<NoResultsProps> = (props) => {
  const { message } = props;
  return (
    <div className={styles.noResults}>
      <img src={unavailable} alt="no results" />
      <Typography element="h5" text={message} />
    </div>
  );
};

export default NoResults;
