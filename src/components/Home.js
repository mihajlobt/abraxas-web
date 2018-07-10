import React from 'react';
import Landing from './Landing';
import About from './About';
import Contact from './Contact';
import ReactGA from 'react-ga';
import {Helmet} from 'react-helmet';

export const initGA = () => {
    console.log('GA init')
    ReactGA.initialize('UA-109461543-1')
}

export const logPageView = () => {
    ReactGA.set({page : window.location.pathname})
    ReactGA.pageview(window.location.pathname)
}


class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        window.scrollTo(0,0);
        this.scrollToComponent();
            initGA();
            logPageView();

    }

    componentDidUpdate(){

        this.scrollToComponent();
    }

    scrollToComponent(){
        const component = this.props.location.hash;

        if (component.length !== 0) {
            const componentDOM = document.querySelector(component);
            window.scroll({
                top: componentDOM.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    }

    render() {
        return (
            <div className="homepage" id="home">
                <Helmet >
                    <title>
                        Home
                    </title>
                </Helmet>
                <Landing ref="home"/>
                <About ref="about"/>
                <Contact ref="contact"/>
            </div>
        )
    }
}


export default Home;