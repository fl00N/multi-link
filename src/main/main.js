import React, { useState, useEffect, useRef } from "react";
import './main.css'
import phone from './phone.png'
import { Link } from "react-router-dom"
import iphone from './iphone.png'
import { default as menu } from './menu.png'

const Main = () => {

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 870) {
      setColor(true)
    } else {
      setColor (false)
    }
  }

  window.addEventListener('scroll', changeColor)

  return (

    <div className="main">

      <div className="navbarContainer">

        <a className={color ? "blackHome" : "home"} href="/">Multi Link</a>

        <div>

            <Link to='/login' className={color ? "pinkLogin" : "login"}>Увійти</Link>
            <Link to='/register' className={color ? "pinkReg" : "registration"} >Зареєструйтесь безкоштовно!</Link>

        <div className='menu-container' ref={menuRef}>

          <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
            <img className={color ? "blackImgDropDown" : "imgDropDown"} src={menu}></img>
          </div>

          <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`} >
            <ul>
              <li className = 'dropdownItem'>
                <Link to='/login' className={color ? "pinkLoginDropDown" : "loginDropDown"}> Увійти </Link>
                <Link to='/register' className={color ? "pinkRegDropDown" : "registrationDropDown"}> Зареєструватись </Link>
              </li>
            </ul>
          </div>

        </div>
      
        </div>

      </div>

      <div className="firstPageContainer">

        <div>

          <p className="oneLink">Одне посилання</p>
          <p className="forAll">для всіх соцмереж</p>

          <p className="combine">Об'єднуйте весь вміст в одне посилання</p>
          <p className="share">Красиво поділіться декількома посиланнями одночасно та відстежуйте їх ефективність.</p>

          <Link to='/register' className='firstPage-registration' href="">Зареєструйтесь безкоштовно!</Link>

        </div>

        <img className="phone" src={phone} alt='phone' />

      </div>

      <div className="secondPageContainer">

        <img className="iphone" src={iphone} alt='iphone' />

        <div className="secondPageContent">

          <p className="content">Весь ваш вміст в одному посиланні.</p>
          <p className="place">Розмістіть його будь-де</p>

          <p className="shareAll">Діліться своїми соціальними мережами, веб-сайтом, магазином, відео, музикою, подкастом, подіями та іншим, де завгодно!</p>

          <Link to='/register' className='secondPage-registration' href="">Почати безкоштовно!</Link>

        </div>


      </div>

    </div>


  );
};

export default Main;