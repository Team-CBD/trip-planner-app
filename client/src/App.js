import React, { Component } from "react";
import "./App.css";
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import "./styles/style.css";



import {
  BrowserRouter as Router
} from "react-router-dom";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          
        <Router>
          <Wrapper>
            <Header />
            <div id="maincontent">
              <Main />
            </div>
            <Footer />
          </Wrapper>
        </Router>
      </div>
    </div>
    );
  }
}

export default App;
