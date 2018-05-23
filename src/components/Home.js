import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Landing from './Landing';
import Technology from './Technology';
import Pricing from './Pricing';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import underscore from 'underscore';
import Blog from './Blog';



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            views: [
                "home",
                "technology",
                "pricing",
                "about",
                "contact",
                "blog",
                "login",
            ],
            menuUnderline: null,
            startingScrollPosition: null,
            componentIntoView: null,

        }
    }

  /*  scrollToComponent = view => {
        let component = this.refs[view];
        let componentDOM = ReactDOM.findDOMNode(component);
        this.state.componentIntoView = view;
        if (view && componentDOM) {
            //componentDOM.scrollIntoView({behavior: "smooth", block: "start"});
            window.scroll({
                top: componentDOM.offsetTop - 80,
                behavior: 'smooth'
            });

            this.setState(this.state);

        } else {
            return false
        }
    };

    componentDidMount = () => {
        window.addEventListener("scroll", this.detectScroll, false);
    };

    detectElement = (el) => {
        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;

        while(el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
        }

        return (
            top < (window.pageYOffset + window.innerHeight) &&
            left < (window.pageXOffset + window.innerWidth) &&
            (top + height) > window.pageYOffset &&
            (left + width) > window.pageXOffset
        );
    };

    detectScroll = underscore.debounce(event => {

        let state = this.state;



        for (let i=0; i<Object.keys(state.views).length;i++) {
            let viewPosition = Object.keys(state.views)[i];
            let view = state.views[viewPosition];
            let domElement = ReactDOM.findDOMNode(this.refs[view]);
            if (domElement && this.detectElement(domElement)) {
                state.componentIntoView = view;
                this.setState(state);
            }
        }
    }, 50);
*/
    render() {
        return (
            <div className="homepage" id="home">
                {/*<button className="scroll-btn" onClick={this.scrollToComponent.bind(this, "home")}>
                    <div className="scroll-to-top"> </div>
                </button>*/}
                <Landing ref="home"/>
                <Technology ref="technology"/>
                <Pricing ref="pricing"/>
                <About ref="about"/>
                <Contact ref="contact"/>
                <Footer/>
            </div>
        )
    }
}


export default Home;