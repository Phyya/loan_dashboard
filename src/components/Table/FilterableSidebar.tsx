import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import InputField from "../InputField/InputField";
import styles from "./Table.module.scss";

type Options = Record<string, any>;

type FilterProps = {
  orgName: string;
  email: string;
  username: string;
  status: string;
  phoneNumber: string;
  date: string;
};
type Props = {
  organizations: string[];
  statuses: string[];
  close: () => void;
  open: boolean;
  filterByParam: (val: FilterProps) => void;
};

const FilterableSidebar: React.FC<Props> = (props) => {
  const { open, close, organizations, statuses, filterByParam } = props;
  const [state, setState] = useState({
    orgName: organizations[0],
    email: "",
    username: "",
    date: "",
    phoneNumber: "",
    status: statuses[0],
  });

  const handleOptionChange = (value: string, field: string) => {
    setState((prev) => ({ ...prev, [field]: value }));
  };
  useEffect(() => {
    document
      .getElementById("filterable")
      ?.scrollIntoView({ behavior: "auto", block: "center" });
  }, []);

  return (
    <>
      <div className={styles.overlay} onClick={close} />
      <div className={styles.tableFilterBox}>
        <div id="filterable">
          <Dropdown
            onChange={(val) => handleOptionChange(val, "orgName")}
            options={organizations}
            bordered
            label="Organization"
          />
        </div>
        <div>
          <InputField
            value={state.username}
            placeholder="Username"
            label="Username"
            onChange={(e) =>
              setState((prev) => ({ ...prev, username: e.target.value }))
            }
          />
        </div>
        <div>
          <InputField
            value={state.email}
            placeholder="Email"
            label="Email"
            onChange={(e) =>
              setState((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>
        <div>
          <InputField
            value={state.date}
            placeholder="Date"
            label="Date"
            type="date"
            onChange={(e) =>
              setState((prev) => ({ ...prev, date: e.target.value }))
            }
          />
        </div>
        <div>
          <InputField
            value={state.phoneNumber}
            placeholder="Phone Number"
            label="Phone Number"
            onChange={(e) =>
              setState((prev) => ({ ...prev, phoneNumber: e.target.value }))
            }
          />
        </div>
        <div>
          <Dropdown
            options={statuses}
            onChange={(val) => handleOptionChange(val, "status")}
            label="Status"
            bordered
          />
        </div>
        <div className={styles.filterAction}>
          <Button variant="secondary" text="Reset" onClick={() => {}} />
          <Button
            text="Filter"
            onClick={() => {
              filterByParam(state);
            }}
          />
        </div>
      </div>
    </>
  );
};
export default FilterableSidebar;
