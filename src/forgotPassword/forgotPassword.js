import React, { useState} from "react";
import "./forgotPassword.css";
import FormInput from "../loginPage/formInput.js";
import { Link } from "react-router-dom";

const ForgotPassword = () => {

  const [values, setValues] = useState({
    email: ""
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: " ",
      errorMessageEmail: "It should be a valid email address!",
      label: "Email",
      required: true,
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (

      <div className="loginPage">

        <Link to='/' className="logoHome">Multi Link</Link>

        <div className="forgotPasswordForm">
            <form onSubmit={handleSubmit}>
              <h1 className="forgot">Забули пароль?</h1>
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
              <button className="reset">Cкинути пароль</button>

              <div className="returnHome">

                <p className="byAccident">Тут випадково?</p>
                <Link to='/' className="backToHome">Повернутись</Link>

              </div>
              
            </form>

        </div>

      </div>

  );
};


export default ForgotPassword;
