import React from 'react';
import Header from './Header';
import Landing from './Landing';
import Technology from './Technology';
import Pricing from './Pricing';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => (
    <div className="home-wrapper">
        <Header/>
        <Landing/>
        <Technology/>
        <Pricing/>
        <About/>
        <Contact/>
        <Footer/>
    </div>
);


export default Home;