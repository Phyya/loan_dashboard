import React from "react";
import { ImSpinner } from "react-icons/im";
import styles from "./Overlay.module.scss";

interface LoadingOverlayProps {
  visible: boolean;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = (props) => {
  const { visible } = props;
  return (
    <div>
      {visible && (
        <div className={styles.loadingOverlay} data-testid="loading-overlay">
          <ImSpinner className={styles.spinner} />
        </div>
      )}
    </div>
  );
};

export default LoadingOverlay;
