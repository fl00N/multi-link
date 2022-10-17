import React, { useState} from "react";
import "./loginPage.css";
import FormInput from "./formInput.js";
import { Link } from "react-router-dom";

const LoginPage = () => {

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessageEmail: "It should be a valid email address!",
      // label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      // label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
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

        <Link to='/' className="homeLogin">Multi Link</Link>

        <div className="app">
            <form onSubmit={handleSubmit}>
              <h1>Вхід</h1>
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}

            <div className="rem3">
              <input className="checkBox" type="checkbox"/>
              <p className="rememberMe">Запам'ятати пароль</p>
            </div>

              <button className="logIn">Увійти</button>
              <Link to='/forgotpassword' className="forgotPassword">Забули пароль?</Link>

              <div className="aboutNewAcc">

                <p className="dontHaveAcc">У вас ще немає облікового запису?</p>
                <Link to='/register' className="createNewAcc">Створити акаунт</Link>

              </div>
              
            </form>

        </div>

      </div>

  );
};


export default LoginPage;

