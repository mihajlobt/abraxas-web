import './scss/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer';

import Posts from './components/Blog/Posts';
import Post from './components/Blog/Post';

import {BrowserRouter as Router, Route, Switch, HashRouter} from 'react-router-dom';
import TermsAndConditions from "./components/TermsAndConditions";
import Pricing from "./components/Pricing";
import Technology from "./components/Technology";


const renderApplication = () => {

    const blogRoutes = new Posts().item;

    let blogRoutesMap = blogRoutes.reverse().map((item, index) => {
        return (
            <Route key={index} path={"/" + item.wpPostName} render={ props => <Post item={item} />}/>
        )
    });

    ReactDOM.render(
        <HashRouter>
            <div className="main-component-wrapper">
                <Route path="*" component={Header}/>
                <Route exact path="/" component={Home}/>

                <Switch>
                    <Route exact path="/home" component={Home}/>

                    <Route path="/blog" component={Blog}/>
                    <Route path="/pricing" component={Pricing}/>
                    <Route path="/technology" component={Technology}/>

                    <Route path="/login" component={Login}/>
                    <Route path="/terms" component={TermsAndConditions}/>
                    {blogRoutesMap}
                </Switch>
                <Route path="*" component={Footer}/>

            </div>

        </HashRouter>,
        document.querySelector('#root')
    );
};

renderApplication(Home);

if (module.hot) {
    module.hot.accept("./components/Home", () => {
        renderApplication();
    });
}
