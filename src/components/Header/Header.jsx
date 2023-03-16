import LOGOdark from "../../assets/Logos/LOGOdark.png";

import { FaRegUserCircle, FaPenNib, FaInfoCircle , FaSun , FaMoon} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Header() {


  const[test,setTest] = useState("dark");

  return (
    <>
      <header className="header-container">
        <Link to="/">
          <span className="header--logo-container">
            <img id="header--logo" src={LOGOdark} alt="logo" />
            PcComparator
          </span>
        </Link>

        <div className="header--right-btn-container">

        <NavLink to="/login" className={({ isActive }) => (isActive ? "active-link" : null)}> 
          <span className="header--login-container">
            Login&nbsp;
            <FaRegUserCircle />
          </span>
        </NavLink>

          <span>&nbsp;|&nbsp;</span>

          <NavLink to="/register" className={({ isActive }) => (isActive ? "active-link" : null)}> 
          <span className="header--register-container">
            Register&nbsp;
            <FaPenNib />
          </span>
          </NavLink>

          <span>&nbsp;|&nbsp;</span>

          <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : null)}> 
          <span className="header--about-container">
            About&nbsp;
            <FaInfoCircle />
          </span>
          </NavLink>

          <span>&nbsp;|&nbsp;</span>

        { 
        test === "dark"  &&
          <span className="header--theme-container" onClick={()=>setTest("light")}>            
            <span className=""><FaSun /></span>
            <span>/</span>
            <span className="active-link"><FaMoon /></span>
          </span>
        }
        { 
        test === "light"  &&
          <span className="header--theme-container" onClick={()=>setTest("dark")}>
            <span className="active-link"><FaSun /></span>
            <span>/</span>
            <span className=""><FaMoon /></span>
          </span>
        }

        {test === "dark" && (
          <style>
            {`
              :root {
                --primary--txt: white;
                --primary--bg : black;
                --secondary--bg : #282A3A;
                --tertiary--bg : #09090F;
                --other--primary--bg: #735F32;
                --other--secondary--bg: #FFDAB9;
              
                --primary--btn : #195FA3;
                --secondary--btn : #4290dd;
              }
            `}
          </style>
        )}

        {test === "light" && (
          <style>
            {`
              :root {
                --primary--txt: black;
                --primary--bg : white;
                --secondary--bg : #495579;
                --tertiary--bg : #AAAABB;
                --other--primary--bg: #C69749;
                --other--secondary--bg: #FF8C00 ;
              
              
                --primary--btn : #4290dd;
                --secondary--btn : #195FA3;
              }
            `}
          </style>
        )}

        </div>
      </header>
    </>
  );
}

export default Header;
