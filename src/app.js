import './scss/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer';

import {BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import TermsAndConditions from "./components/TermsAndConditions";


const renderApplication = () => {
  ReactDOM.render(
      <HashRouter>
          <div>
              <Route path="*" component={Header}/>
              <Route exact path="/" component={Home}/>

              <Switch>
                  <Route exact path="/home" component={Home}/>

                  <Route path="/blog" component={Blog}/>

                  <Route path="/login" component={Login}/>
                  <Route path="/terms" component={TermsAndConditions}/>

              </Switch>
              <Route path="*" component={Footer}/>

          </div>

      </HashRouter> ,
    document.querySelector('#root')
  );
};

renderApplication(Home);

if (module.hot) {
  module.hot.accept("./components/Home", () => {
    renderApplication();
  });
}
