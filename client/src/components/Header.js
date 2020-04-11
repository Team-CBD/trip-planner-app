import React from 'react';
import "../styles/Header.css";
import Nav from './NavBar.js';
import logo from "../../src/logo.svg";
import Facebook from './Facebook';

function Header () {
    return (
      <div className="header1">
       <img src={logo} className="App-logo" alt="logo" />
        <Nav />
        <Facebook />
      </div>
    )
  }

export default Header;
