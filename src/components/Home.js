import React from 'react';
import Landing from './Landing';
import Technology from './Technology';
import About from './About';
import Contact from './Contact';
import Pricing from "./Pricing";


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
                <Landing ref="home"/>
                <About ref="about"/>
                <Contact ref="contact"/>
            </div>
        )
    }
}


export default Home;