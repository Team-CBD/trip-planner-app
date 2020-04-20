import React, { Component } from "react";
import "./App.css";
//import API from './utils/api';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import "./styles/style.css";
import { Provider } from 'react-redux';
import store from './store';
//import { loadUser } from './actions/authActions';


import { BrowserRouter as Router } from "react-router-dom";


class App extends Component {
  // componentDidMount() {
  //   store.dispatch(loadUser());
  // }

  render() {
    return (
      <Provider store={store}>
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
    </Provider>
    );
  }
}

export default App;
