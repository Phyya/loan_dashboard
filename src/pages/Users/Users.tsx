import React, { useEffect, useState } from "react";
import Typography from "../../components/Typography/Typography";
import styles from "./Users.module.scss";

import SummaryBox from "../../components/UI/SummaryBox/SummaryBox";
import Table from "../../components/Table/Table";
import { getUsers } from "../../services/users";
import LoadingOverlay from "../../components/UI/Overlay/LoadingOverlay";
import { statuses, summaryData } from "../../data";

type User = Record<string, unknown>;
const Users: React.FC<{}> = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchDetails = async () => {
      let res = await getUsers();
      let mapped = res.data?.map((user: User) => ({
        ...user,
        status: statuses[Math.floor(Math.random() * statuses.length)],
      }));
      setUsers(mapped);
    };
    fetchDetails();
  }, []);

  return (
    <div className={styles.usersContainer} data-testid="users-container">
      {!users.length ? (
        <LoadingOverlay visible={!users.length} />
      ) : (
        <>
          <Typography element="h1" text="Users" title />
          <div className={styles.usersSummaryContainer}>
            {summaryData.map((user) => (
              <SummaryBox summary={user} />
            ))}
          </div>

          <Table data={users} />
        </>
      )}
    </div>
  );
};

export default Users;
