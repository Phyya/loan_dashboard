import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { SlOptionsVertical } from "react-icons/sl";
import Button from "../../../components/Button/Button";
import Typography from "../../../components/Typography/Typography";
import OptionsModal from "../../../components/OptionModal/OptionModal";
import HorizontalFlexWithIcon from "../../../components/UI/FlexItem/HorizontalFlexWithIcon";
import blacklist from "../../../assets/icons/blacklist.svg";
import activate from "../../../assets/icons/activate_user.svg";
import { getUsersById } from "../../../services/users";
import UserTabs from "./Tabs/TabList";
import Tabs from "./Tabs/TabContainer";
import styles from "../Users.module.scss";

const UsersDetails: React.FC<{}> = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [userInfo, setUserInfo] = useState<any>();
  const [openOptions, setOpenOptions] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const fetchDetails = async () => {
      let res = await getUsersById(location.state?.id);
      setUserInfo(res.data);
    };
    fetchDetails();
  }, [location.state?.id]);
  if (!userInfo) return null;
  return (
    <div className={styles.usersDetailsContainer}>
      <div className={styles.userDetailsBack}>
        <Link to="/users" state={{ currentPage: location.state?.currentPage }}>
          <HiOutlineArrowNarrowLeft />
        </Link>
        <Typography element="p" text="Back to Users" />
      </div>
      <div className={styles.userDetailsActionContainer}>
        <Typography element="h3" text="User Details" />
        <div className={styles.userDetailsAction}>
          <Button text="BLACKLIST USER" variant="danger" onClick={() => {}} />
          <Button text="ACTIVATE USER" variant="primary" onClick={() => {}} />
        </div>
        <div className={styles.userDetailsActionMenu}>
          <SlOptionsVertical onClick={() => setOpenOptions(true)} />
          <OptionsModal
            style={{ top: "15px", right: 0 }}
            open={openOptions}
            close={() => setOpenOptions(false)}
            options={[
              <HorizontalFlexWithIcon
                text="Blacklist"
                title
                icon={blacklist}
                onClick={() => {}}
              />,
              <HorizontalFlexWithIcon
                text="Activate"
                title
                icon={activate}
                onClick={() => {}}
              />,
            ]}
            onOptionsChange={() => {}}
          />
        </div>
      </div>
      <UserTabs
        activeTab={activeTab}
        setActiveTab={(val) => setActiveTab(val)}
        summaryInfo={{
          firstname: userInfo?.profile?.firstName,
          lastname: userInfo?.profile?.lastName,
          accountNumber: userInfo?.accountNumber,
          accountBalance: userInfo?.accountBalance,
          avatar: userInfo?.profile.avatar,
        }}
      />
      <Tabs activeTab={activeTab} userInfo={userInfo} />
    </div>
  );
};

export default UsersDetails;
