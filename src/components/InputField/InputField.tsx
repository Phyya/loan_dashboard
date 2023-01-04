import React, { useState } from "react";
import Typography from "../Typography/Typography";
import styles from "./InputField.module.scss";

interface InputFieldProps {
  value: string;
  defaultValue?: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name?: string;
  label?: string;
  search?: boolean;
  required?: boolean;
  errorMessage?: string;
}
const InputField: React.FC<InputFieldProps> = ({
  value,
  defaultValue,
  placeholder,
  onChange,
  type = "text",
  errorMessage,
  required,
  name,
  search,
  label,
  ...props
}) => {
  const [inputType, setInputType] = useState(type);
  const [error, setError] = useState(false);
  return (
    <>
      <label className={styles.label}>
        <Typography text={label ? label : ""} element="h4" />
      </label>
      <div
        className={`${styles.inputFieldContainer} ${
          error ? styles.error : undefined
        } ${search ? styles.search : undefined}`}
        data-testid="input-error"
      >
        <input
          className={`${styles.inputfield} ${
            search ? styles.search : undefined
          } `}
          type={inputType}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
          onBlur={!value && required ? () => setError(true) : undefined}
          onFocus={() => setError(false)}
          name={name}
          {...props}
        />
        {type == "password" && (
          <Typography
            text={inputType == "password" ? "SHOW" : "HIDE"}
            onClick={() =>
              setInputType(inputType == "text" ? "password" : "text")
            }
            element="p"
            variant="primary"
          />
        )}{" "}
        {error && (
          <div data-testid="input-error-text">
            <Typography
              element="p"
              variant="danger"
              text={errorMessage ? errorMessage : ""}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default InputField;
