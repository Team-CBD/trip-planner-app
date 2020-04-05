import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
    );
  }
}

export default App;
