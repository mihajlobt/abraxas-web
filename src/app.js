import './scss/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import Blog from './components/Blog';

import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TermsAndConditions from "./components/TermsAndConditions";

const renderApplication = () => {
  ReactDOM.render(
      <Router>
          <div>
              <Route path="*" component={Header}></Route>
              <div className="main-container">
                  <Route exact path="/" component={Home}></Route>
                  <Route path="/blog" component={Blog}></Route>
                  <Route path="/login" component={Login}></Route>
                  <Route path="/terms" component={TermsAndConditions}></Route>
              </div>
          </div>
      </Router> ,
    document.querySelector('#root')
  );
};

renderApplication(Home);

if (module.hot) {
  module.hot.accept("./components/Home", () => {
    renderApplication();
  });
}
