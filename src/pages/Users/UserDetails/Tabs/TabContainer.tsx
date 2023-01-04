import React from "react";
import GeneralInfo from "./GeneralInfo";
import ExtraTab from "./ExtraTab";

interface UserTabProps {
  activeTab: number;
  userInfo: any;
}

const Tabs: React.FC<UserTabProps> = (props) => {
  const { activeTab, userInfo } = props;
  return (
    <>{activeTab === 1 ? <GeneralInfo userInfo={userInfo} /> : <ExtraTab />}</>
  );
};

export default Tabs;
