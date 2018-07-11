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
import createHistory from 'history/createBrowserHistory';
import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyPolicy from './components/PrivacyPolicy';
import Pricing from "./components/Pricing";
import Technology from "./components/Technology";
import Careers from "./components/Careers";
import SaaSTermsConditions from "./components/SaaSTermsConditions";

import Product from "./components/Product";
import Packages from "./components/Packages";
import EventPlanners from "./components/EventPlanners";
import SmartCities from "./components/SmartCities";
import AdvertisersMediaBuyers from "./components/AdvertisersMediaBuyers";
import BillboardOwners from "./components/BillboardOwners";
import Retailers from "./components/Retailers";
import ReactGA from 'react-ga';

ReactGA.initialize('UA-109461543-1');


const renderApplication = () => {

    const blogRoutes = new Posts().item;

    let blogRoutesMap = blogRoutes.reverse().map((item, index) => {
        return (
            <Route key={index} path={"/" + item.wpPostName} render={ props => <Post item={item} />}/>
        )
    });

    const history = createHistory()
    history.listen((location,action) => {
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname);
        }
    );



    ReactDOM.render(
        <HashRouter history={history}>
            <div className="main-component-wrapper">
                <Route path="*" component={Header}/>
                <Route exact path="/" component={Home}/>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route path="/blog" component={Blog}/>
                    <Route path="/pricing" component={Pricing}/>
                    <Route path="/technology" component={Technology}/>

                    <Route path="/login" component={Login}/>
                    <Route path="/terms" component={TermsAndConditions}/>
                    <Route path="/privacypolicy" component={PrivacyPolicy}/>
                    <Route path ="/careers" component={Careers}/>
                    <Route path = "/SaaSTerms_Conditions" component={SaaSTermsConditions}/>
                    <Route path ="/product" component={Product}/>
                    <Route path ="/packages" component={Packages} />
                    <Route path ="/advertisers-media-buyers" component={AdvertisersMediaBuyers} />
                    <Route path ="/billboard-owners" component={BillboardOwners} />
                    <Route path ="/event-planners" component ={EventPlanners} />
                    <Route path = "/retailers" component={Retailers}/>
                    <Route path ="/smart-cities" component={SmartCities} />
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
