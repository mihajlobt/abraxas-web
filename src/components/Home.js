import React from 'react';
import Landing from './Landing';
import Technology from './Technology';
import Pricing from './Pricing';
import About from './About';
import Contact from './Contact';


class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="homepage" id="home">
                <Landing ref="home"/>
                <Technology ref="technology"/>
                <Pricing ref="pricing"/>
                <About ref="about"/>
                <Contact ref="contact"/>
            </div>
        )
    }
}


export default Home;