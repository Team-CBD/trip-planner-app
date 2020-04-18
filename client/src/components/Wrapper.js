import React from 'react';
import "../styles/Wrapper.css";
//import Darkmode from 'darkmode-js';

// new Darkmode().showWidget();

// var options = {
//   bottom: '16px', // default: '32px'
//   right: '16px', // default: '32px'
//   left: '32px', // default: 'unset'
//   time: '0.5s', // default: '0.3s'
//   mixColor: '#c9c9c9', // default: '#fff'
//   backgroundColor: '#fff',  // default: '#fff'
//   buttonColorDark: '#100f2c',  // default: '#100f2c'
//   buttonColorLight: '#fff', // default: '#fff'

//   autoMatchOsTheme: true // default: true
// }



function Wrapper({ children }) {
  return (
      <div className="wrapper">
        { children }
      </div>
  );
}

export default Wrapper;
