import React, { useEffect, useLayoutEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import useMediaQuery from "../../hooks/useMediaQuery";
import styles from "./AdminAccess.module.scss";

const AdminAccess: React.FC<{}> = () => {
  const navigate = useNavigate();

  const [userAvailable, setUserAvailable] = useState(
    localStorage.getItem("user")
  );
  const [open, setOpen] = useState(true);
  const isTablet = useMediaQuery("(max-width: 768px)");
  useEffect(() => {
    isTablet && setOpen(false);
    !isTablet && setOpen(true);
  }, [isTablet]);
  useEffect(() => {
    userAvailable && navigate("/users");
    !userAvailable && navigate("/login");
  }, []);
  if (!userAvailable) return null;
  return (
    <div>
      <Header />
      <div className={styles.layoutContainer}>
        <div className={styles.sidebarLayout}>
          <Sidebar open={open} close={(val) => setOpen(val)} />
        </div>
        <div className={styles.layoutPageContainer}>
          <div
            className={`${styles.contentLayout} ${
              !open ? styles.fullwidth : undefined
            }`}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAccess;
