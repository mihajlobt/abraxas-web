import React from 'react';
import {Helmet} from 'react-helmet';
import ReactGA from 'react-ga';



class Retailers extends React.Component{
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
                        Retailers
                    </title>
                </Helmet>
            <div id="small-business-owners" className="packages-scout">
                <div className="packages-scout-text">
                    <h2>Retailers</h2>

                    <h3 className="packages-headers" >Our Services</h3>
                    <span>
                       In our highly competitive economy, owners are always looking for an edge. Once they nail down the quality of their products and services,
                        the next step is using data to run their business at the highest margins possible.ABRAXAS Technology partners with small businesses to achieve their
                        highest possible margins by helping them understand their customers and know which marketing campaigns are bringing people into their brick & mortar stores.
                        An ABRAXAS device also has the added benefit of providing a level of security that can assist police in identifying the perpetrators of criminal activity on the property.


                        </span>


                    <h3 className="packages-headers">How It Works </h3>
                    <span>
                        The ABRAXAS product is a small plug and play device that can be connected to any
                        normal household outlet and syncs with WiFi.

                        We offer installation services for both billboard and retail locations.



                    </span>

                    <h3 className="packages-headers">Key Features</h3>
                    <span>
                        <ul>
                            <li>
                                Accurately measure customer visits, return frequencies, and duration of stay.
                            </li>
                            <li>
                              	Conduct A/B testing with real-time data.
                            </li>
                            <li>
                                Measure foot traffic and sponsor conversions.
                            </li>
                            <li>
                                Easy installation. No capital expenditure. No supplemental apps required.
                            </li>
                        </ul>
                    </span>

                    <h3 className="packages-headers">Benefits for Retailers</h3>
                    <span>
                        <ul>
                            <li>
                               	Detect average return frequency of customers.

                            </li>
                            <li>
                              	Know how long people are staying in your store or restaurant.
                            </li>
                            <li>
                               	Determine the effectiveness of recent OOH advertising campaigns.
                            </li>
                            <li>
                                Access to security data that helps police identify criminals who commit crimes on your property
                            </li>
                        </ul>
                    </span>


                    <button href="/#contact" onClick={this.scrollToContact} className="demo-btn">Request a Demo</button>
                    <div className="business-illustration"></div>

                </div>

            </div>
            </div>

        )
    }
}

export default Retailers;