import React from 'react';
import Landing from './Landing';
import About from './About';
import Contact from './Contact';
import ReactGA from 'react-ga';
import {Helmet} from 'react-helmet';




class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        window.scrollTo(0,0);
        this.scrollToComponent();

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