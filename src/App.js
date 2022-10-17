import './App.css';
import Main from './main/main.js'
import LoginPage from './loginPage/loginPage.js'
import RegisterPage from './registerPage/registerPage.js'
import ForgotPassword from './forgotPassword/forgotPassword.js'
import { Routes, Route } from "react-router-dom";
import React, { useState } from 'react';

function App() {

  return (
    <div className="App">

      <Routes>

          <Route path='/login' element={<LoginPage />}/>
          <Route path='/register' element={<RegisterPage />}/>
          <Route path='/forgotpassword' element={<ForgotPassword />}/>
          <Route path='*' element={<Main />}/>

      </Routes>

    </div>
  );
}

export default App;
