import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Typography from "../../../../components/Typography/Typography";
import styles from "../../Users.module.scss";
type summaryInfoObject = {
  firstname?: string;
  lastname?: string;
  accountNumber?: string;
  accountBalance?: string;
  avatar: string;
};
interface UserTabProps {
  activeTab: number;
  setActiveTab: (val: number) => void;
  summaryInfo: summaryInfoObject;
}

const tabs = [
  {
    text: "General Information",
    tab: 1,
  },
  {
    text: "Documents",
    tab: 2,
  },
  {
    text: "Bank Details",
    tab: 3,
  },
  {
    text: "Loans",
    tab: 4,
  },
  {
    text: "Savings",
    tab: 5,
  },
  {
    text: "App and System",
    tab: 6,
  },
];

const UserTabs: React.FC<UserTabProps> = (props) => {
  const {
    activeTab,
    setActiveTab,
    summaryInfo: { firstname, lastname, accountBalance, accountNumber, avatar },
  } = props;
  return (
    <div className={styles.usersDetailsTabsContainer}>
      <div className={styles.usersDetailsHorizontalFlex}>
        <div
          className={`${styles.usersDetailsHorizontalFlex} ${styles.usersDetailsHorizontalFlexCollapse}`}
        >
          <div
            className={`${styles.usersDetailsHorizontalFlex} ${styles.usersDetailsHorizontalFlexBottom}`}
          >
            <div className={`${styles.bordered}`}>
              <div
                className={`${styles.usersDetailsHorizontalFlex} ${styles.gap}`}
              >
                <img src={avatar} alt="user avatar" />
                <div>
                  <Typography
                    title
                    element="h5"
                    text={`${firstname} ${lastname}`}
                  />
                  <Typography
                    element="p"
                    text={accountNumber ? accountNumber : ""}
                  />
                </div>
              </div>
            </div>
            <div className={`${styles.bordered} ${styles.noBordered}`}>
              <Typography element="p" text="User's Tier" />

              <div className={styles.usersDetailsStar}>
                <AiFillStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
            </div>
          </div>
          <div className={styles.usersDetailsColumnFlex}>
            <Typography element="p" text={`\u20A6${accountBalance}`} />
            <Typography element="p" text="9912345678/Providus Bank" />
          </div>
        </div>
      </div>
      <div className={styles.usersDetailsTablist}>
        <div>
          {tabs.map((tab) => (
            <Typography
              key={tab.tab}
              element="p"
              text={tab.text}
              onClick={() => setActiveTab(tab.tab)}
              variant={activeTab === tab.tab ? "primary" : undefined}
              active={activeTab === tab.tab}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserTabs;
