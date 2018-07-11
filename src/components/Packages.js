import React from 'react';

import advertisermediabuyers from '../images/Advertiser_Media Buyer.jpg';
import billboard from '../images/Billboard Owners.jpg';
import eventplanner from '../images/EventPlanner.jpg';
import smallbusiness from '../images/SmallBusinessOwner.jpg';
import smartcities from '../images/SmartCities.jpg';
import {Helmet} from 'react-helmet';
import ReactGA from 'react-ga';



class Packages extends React.Component{

    constructor(props){
        super(props);
    }



    scrollToAdvertisers = e => {
        e.preventDefault();
        window.scrollTo(0, 0);
        this.props.history.replace("/advertisers-media-buyers");
    };

    scrollToBillboardOwners = e => {
        e.preventDefault();
        window.scrollTo(0, 0);
        this.props.history.replace("/billboard-owners");
    };

    scrollToEventPlanners = e => {
        e.preventDefault();
        window.scrollTo(0, 0);
        this.props.history.replace("/event-planners");
    };

    scrollToRetailers = e => {
        e.preventDefault();
        window.scrollTo(0, 0);
        this.props.history.replace("/retailers");
    };

    scrollToSmartCities = e => {
        e.preventDefault();
        window.scrollTo(0, 0);
        this.props.history.replace("/smart-cities");
    };

    render(){

        return (
            <div className="packages-main">
                <Helmet>
                    <title>
                        Packages
                    </title>
                </Helmet>
           <div className="packages-scout">
               <h1>Packages</h1>
                <div className="packages-section-images">

                <div className="packages-column">
                    <div className="packages-container">
                        <img src={advertisermediabuyers}  className="packages-image"  />

                            <div className="overlay-packages" onClick={this.scrollToAdvertisers}>
                                <div className="packages-watermark" > Advertisers / Media Buyers</div>
                            </div>
                    </div>
                    <div className="packages-container">
                        <img src={eventplanner} className="packages-image"  />
                        <div className="overlay-packages" onClick={this.scrollToEventPlanners}>
                            <div className="packages-watermark">Event Planners</div>
                        </div>
                    </div>
                </div>

                <div className="packages-column">
                    <div className="packages-container">
                        <img src={billboard}  className="packages-image"  />
                            <div className="overlay-packages" onClick={this.scrollToBillboardOwners}>
                                <div className="packages-watermark">Billboard Owners</div>
                            </div>
                    </div>
                </div>



                <div className="packages-column">

                    <div className="packages-container">
                        <img src={smallbusiness} className="packages-image" />
                        <div className="overlay-packages" onClick={this.scrollToRetailers}>
                                <div className="packages-watermark">Retailers</div>
                            </div>
                    </div>


                    <div className="packages-container">
                        <img src={smartcities} className="packages-image"  />
                        <div className="overlay-packages" onClick={this.scrollToSmartCities}>
                                <div className="packages-watermark">Smart Cities</div>
                            </div>
                    </div>
                </div>

                 </div>
           </div>
            </div>
        )


    }



}

export default Packages;