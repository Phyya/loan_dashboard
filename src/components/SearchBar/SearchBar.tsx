import { FC, useState } from "react";
import searchicon from "../../assets/icons/search.svg";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import styles from "./SearchBar.module.scss";

interface SearchBarProps {
  placeholder: string;
  data: any[];
  column?: boolean;
}

const SearchBar: FC<SearchBarProps> = (props) => {
  const { placeholder, column, data } = props;
  const [searchVal, setSearchVal] = useState("");
  const handleSearch = () => {
    if (!searchVal) return;
    console.log("searchVal", searchVal);
  };
  return (
    <div className={column ? styles.searchbarColumn : styles.searchbar}>
      <InputField
        type="email"
        placeholder={placeholder}
        value={searchVal}
        search={column ? false : true}
        onChange={(event) => setSearchVal(event.target.value)}
      />
      {column ? (
        <div className={styles.searchbarColumnBtn}>
          <Button text={"Search"} onClick={handleSearch} />
        </div>
      ) : (
        <div className={styles.searchbarBtn}>
          <Button
            text={searchicon}
            onClick={() => handleSearch()}
            icon
            noRadius
            style={{
              borderTopRightRadius: "8px",
              borderBottomRightRadius: "8px",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
