import React, { useState} from "react";
import "./registerPage.css";
import FormInput from "../loginPage/formInput.js";
import { Link } from "react-router-dom";

const RegisterPage = () => {

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessageUsername:
          "Username should be 3-16 characters and shouldn't include any special character!",
      // label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessageEmail: "It should be a valid email address!",
      // label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessagePassword:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      // label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessagePassword2: "Passwords don't match!",
      // label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (

      <div className="loginPage">

        <Link to='/' className="homeRegister">Multi Link</Link>

        <div className="registerForm">
            <form onSubmit={handleSubmit}>
              <h1>Реєстрація</h1>
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}

              
            <div className="rem">
              <input className="checkBox" type="checkbox"/>
              <p className="agree">Я згоден отримувати новини</p>
            </div>

            <div className="rem2">
              <input className="checkBox2" type="checkbox"/>
              <p className="terms">Правила та умови</p>
            </div>

              <button className="register">Зареєструватись</button>

              <div className="aboutAcc">

                <p className="haveAcc">Вже є аккаунт?</p>
                <Link to='/login' className="loginAcc">Увійдіть тут</Link>

              </div>
              
            </form>

        </div>

      </div>

  );
};


export default RegisterPage;

