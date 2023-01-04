import React from "react";
import styles from "./Dropdown.module.scss";
import Typography from "../Typography/Typography";

interface Props {
  options: string[];
  style?: React.CSSProperties;
  label?: string;
  bordered?: boolean;
  onChange: (value: any) => void;
}

const Dropdown: React.FC<Props> = (props) => {
  const { options, onChange, style, label, bordered } = props;
  const [selectedOption, setSelectedOption] = React.useState(options[0]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    onChange(event.target.value);
  };

  return (
    <>
      <div className={styles.label}>
        {label && <Typography text={label ? label : ""} element="h4" />}
      </div>
      <div
        className={`${styles.dropdown} ${bordered ? styles.bordered : ""}`}
        style={style}
        data-testid="dropdown"
      >
        <select
          value={selectedOption}
          onChange={handleChange}
          data-testid="select"
        >
          {options.map((option, index) => (
            <option key={`${option}-${index}`} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Dropdown;
