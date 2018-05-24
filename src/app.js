import './scss/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';


import PostPreview1 from './components/Blog/Posts/PostPreview1';
import PostPreview2 from './components/Blog/Posts/PostPreview2';
import PostPreview3 from './components/Blog/Posts/PostPreview3';
import PostPreview4 from './components/Blog/Posts/PostPreview4';
import PostPreview5 from './components/Blog/Posts/PostPreview5';
import PostPreview6 from './components/Blog/Posts/PostPreview6';
import PostPreview7 from './components/Blog/Posts/PostPreview7';
import PostPreview8 from './components/Blog/Posts/PostPreview8';
import PostPreview9 from './components/Blog/Posts/PostPreview9';
import PostPreview10 from './components/Blog/Posts/PostPreview10';
import PostPreview11 from './components/Blog/Posts/PostPreview11';
import PostPreview12 from './components/Blog/Posts/PostPreview12';
import PostPreview13 from './components/Blog/Posts/PostPreview13';
import PostPreview14 from './components/Blog/Posts/PostPreview14';
import PostPreview15 from './components/Blog/Posts/PostPreview15';
import PostPreview16 from './components/Blog/Posts/PostPreview16';
import PostPreview17 from './components/Blog/Posts/PostPreview17';
import PostPreview18 from './components/Blog/Posts/PostPreview18';
import PostPreview19 from './components/Blog/Posts/PostPreview19';
import PostPreview20 from './components/Blog/Posts/PostPreview20';
import PostPreview21 from './components/Blog/Posts/PostPreview21';
import PostPreview22 from './components/Blog/Posts/PostPreview22';
import PostPreview23 from './components/Blog/Posts/PostPreview23';
import PostPreview24 from './components/Blog/Posts/PostPreview24';
import PostPreview25 from './components/Blog/Posts/PostPreview25';
import PostPreview26 from './components/Blog/Posts/PostPreview26';
import PostPreview27 from './components/Blog/Posts/PostPreview27';
import PostPreview28 from './components/Blog/Posts/PostPreview28';
import PostPreview29 from './components/Blog/Posts/PostPreview29';
import PostPreview30 from './components/Blog/Posts/PostPreview30';
import PostPreview31 from './components/Blog/Posts/PostPreview31';
import PostPreview32 from './components/Blog/Posts/PostPreview32';
import PostPreview33 from './components/Blog/Posts/PostPreview33';
import PostPreview34 from './components/Blog/Posts/PostPreview34';
import PostPreview35 from './components/Blog/Posts/PostPreview35';
import PostPreview36 from './components/Blog/Posts/PostPreview36';
import PostPreview37 from './components/Blog/Posts/PostPreview37';

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TermsAndConditions from "./components/TermsAndConditions";

const renderApplication = () => {
  ReactDOM.render(
      <Router>
          <div>
              <Route path="*" component={Header}></Route>
              <div className="main-container">
                  <Route exact path="/" component={Home}></Route>
                  <Route path="/blog" component={Blog}></Route>
                  <Switch className="blog-posts">
                      <Route path="/post-789" component={PostPreview1} />
                      <Route path="/post-785" component={PostPreview2} />
                      <Route path="/post-775" component={PostPreview3} />
                      <Route path="/post-754" component={PostPreview4} />
                      <Route path="/post-749" component={PostPreview5} />
                      <Route path="/post-744" component={PostPreview6} />
                      <Route path="/post-733" component={PostPreview7} />
                      <Route path="/post-716" component={PostPreview8} />
                      <Route path="/post-685" component={PostPreview9} />
                      <Route path="/post-698" component={PostPreview10} />
                      <Route path="/post-670" component={PostPreview11} />
                      <Route path="/post-679" component={PostPreview12} />
                      <Route path="/post-628" component={PostPreview13} />
                      <Route path="/post-638" component={PostPreview14} />
                      <Route path="/post-609" component={PostPreview15} />
                      <Route path="/post-619" component={PostPreview16} />
                      <Route path="/post-591" component={PostPreview17} />
                      <Route path="/post-596" component={PostPreview18} />
                      <Route path="/post-566" component={PostPreview19} />
                      <Route path="/post-585" component={PostPreview20} />
                      <Route path="/post-573" component={PostPreview21} />
                      <Route path="/post-560" component={PostPreview22} />
                      <Route path="/post-557" component={PostPreview23} />
                      <Route path="/post-550" component={PostPreview24} />
                      <Route path="/post-539" component={PostPreview25} />
                      <Route path="/post-422" component={PostPreview26} />
                      <Route path="/post-409" component={PostPreview27} />
                      <Route path="/post-393" component={PostPreview28} />
                      <Route path="/post-371" component={PostPreview29} />
                      <Route path="/post-364" component={PostPreview30} />
                      <Route path="/post-361" component={PostPreview31} />
                      <Route path="/post-345" component={PostPreview32} />
                      <Route path="/post-325" component={PostPreview33} />
                      <Route path="/post-318" component={PostPreview34} />
                      <Route path="/post-312" component={PostPreview35} />
                      <Route path="/post-304" component={PostPreview36} />
                      <Route path="/post-1" component={PostPreview37} />
                  </Switch>
                  <Route path="/login" component={Login}></Route>
                  <Route path="/terms" component={TermsAndConditions}></Route>
                  <Footer/>
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
