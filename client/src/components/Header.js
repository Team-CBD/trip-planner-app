import React from 'react';
import "../styles/Header.css";
import Nav from './NavBar.js';
import logo from "../../src/logo.svg";

function Header () {
    return (
      <div className="header1 sticky neu">
       <img src={logo} className="App-logo" alt="logo" />
        <Nav />
      </div>
    )
  }

export default Header;
