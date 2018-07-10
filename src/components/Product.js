import React from 'react';
import {Helmet} from 'react-helmet';
import ReactGA from 'react-ga';

export const initGA = () => {
    console.log('GA init')
    ReactGA.initialize('UA-109461543-1')
}

export const logPageView = () => {
    ReactGA.set({page : window.location.pathname})
    ReactGA.pageview(window.location.pathname)
}

class Product extends React.Component {

    constructor(props){
        super(props);
    }
    componentDidMount(){
        initGA();
        logPageView();
    }

    scrollToContact = e => {
        e.preventDefault();
        this.props.history.replace("/#contact");
    };

    render() {
        return (
            <div className="technology-main"  id="technology">
                <Helmet>
                    <title>
                        Product
                    </title>
                </Helmet>
                <div className="technology-scout">
                    <div className="technology-scout-text">
                        <h1>What is ABRAXAS Technology?</h1>
                        <h2>ABRAXAS Scout</h2>
                        <span>ABRAXAS Scout passively collects and aggregates each digital signature
                            passing within the vicinity of the sign,  allowing advertisers to see how
                            many people viewed the advertisement and when.
                        </span>
                        <div className="technology-illustration"></div>

                        <h2 className="abraxas-hq">ABRAXAS HQ</h2>
                        <span>ABRAXAS HQ, our web-based dashboard, helps users accurately determine the most
                        valuable advertising locations and times of day, and measure advertisement
                        effectiveness by correlating views with consumer behavior.
                    </span>
                    </div>

                </div>
                <h1 className="technology-text">
                    ABRAXAS Technology creates value for advertising stakeholders
                    by providing real-time visibility, engagement and customer behavior metrics.
                </h1>
                <div className="technology-images">
                    <div className="image-circle customer-focus">
                    </div>
                    <div className="image-circle data-driven">
                    </div>
                    <div className="image-circle real-time">
                    </div>
                    <div className="image-circle service-oriented">
                    </div>
                    <div className="image-circle technology-forward">
                    </div>
                </div>
                <div className="technology-list">
                    <div className="technology-points">
                        <h1>Owners</h1>
                        <div className="checked-section">
                            <div className="checked-icon">
                            </div>
                            <h2>Calculate value across your outdoor advertising portfolio</h2>
                        </div>
                        <div className="checked-section">
                            <div className="checked-icon">
                            </div>
                            <h2>Provide visibility to your customers through easy-to-use online dashboards</h2>
                        </div>
                    </div>
                    <div className="technology-points">
                        <h1>Advertisers</h1>
                        <div className="checked-section">
                            <div className="checked-icon">
                            </div>
                            <h2>Correlate ad engagements with in-store or online traffic</h2>
                        </div>
                    </div>
                </div>
                <div className="technology-roi">
                    <h1>Interested in measuring your advertising ROI?</h1>
                    <span>Learn how ABRAXAS Technology can bring unprecedented insight to your advertising</span>
                    <button href="/#contact" onClick={this.scrollToContact}>contact us</button>
                </div>

            </div>
        )
    }
}


export default Product;