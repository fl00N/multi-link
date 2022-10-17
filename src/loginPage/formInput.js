import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessageUsername, errorMessageEmail, errorMessagePassword, errorMessagePassword2, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span className="errorMessageEmail">{errorMessageEmail}</span>
      <span className="errorMessagePassword">{errorMessagePassword}</span>
      <span className="errorMessageUsername">{errorMessageUsername}</span>
      <span className="errorMessagePassword2">{errorMessagePassword2}</span>
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;