import React from 'react';
import {Helmet} from 'react-helmet';
import ReactGA from 'react-ga';



class SmartCities extends React.Component{
    constructor(props){
        super(props);
    }


    scrollToContact = e => {
        e.preventDefault();
        this.props.history.replace("/#contact");
    };

    render() {
        return (
            <div className="packages-main">
                <Helmet>
                <title>
                    Smart Cities
                </title>
                </Helmet>
            <div id="smart-cities" className="packages-scout">
                <div className="packages-scout-text">
                    <h2>Smart Cities</h2>

                    <h3 className="packages-headers" >Our Services</h3>
                    <span>
                       ABRAXAS TECHNOLOGY is helping smart city initiatives with patent-pending technology that provides the ability
                        to understand visitors and residents’ movements throughout a city. Law enforcement will benefit with more information
                        in the event of a crime and cities will have more data to decrease congestion and increase pedestrian safety.


                        </span>


                    <h3 className="packages-headers">How It Works </h3>
                    <span>
                        Through our patent-pending Scout device and proprietary technology, ABRAXAS provides real-time visibility,
                        engagement, and resident and visitor data for smart city stakeholders. We offer installation services and provide
                        access into our network of devices that is already collecting smart city data across American cities.



                    </span>

                    <h3 className="packages-headers">Key Features</h3>
                    <span>
                        <ul>
                            <li>
                                Capture of MAC addresses; easily accessible data for law enforcement in the event of a crime.
                            </li>
                            <li>
                                Track crowd growth and alert authorities.
                            </li>
                            <li>
                               Measure automobile and foot traffic in real time.
                            </li>
                            <li>
                                Easy installation. No capital expenditure. No supplemental apps required.
                            </li>
                        </ul>
                    </span>

                    <h3 className="packages-headers">Benefits for Smart City Initiatives</h3>
                    <span>
                        <ul>
                            <li>
                               	Access to real-time data and analytics to ease traffic congestion and increase pedestrian safety

                            </li>
                            <li>
                              	Access to ABRAXAS's proprietary data for law enforcement.
                            </li>
                            <li>
                               	Correlate visitor engagements with city attractions.
                            </li>
                            <li>
                                Insight into your city through ABRAXAS HQ online analytics platform or through an API to your own system.
                            </li>
                        </ul>
                    </span>
                    <button href="/#contact" onClick={this.scrollToContact} className="demo-btn">Request a Demo</button>


                    <div className="packages-illustration"></div>

                </div>

            </div>
            </div>

        )
    }
}

export default SmartCities;