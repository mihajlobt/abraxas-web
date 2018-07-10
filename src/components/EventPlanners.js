import React from 'react';
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

class EventPlanners extends React.Component{

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
            <div className="packages-main">
                <Helmet >
                    <title>
                        Event Planners
                    </title>
                </Helmet>
            <div id="event-planners" className="packages-scout">
                <div className="packages-scout-text">
                    <h2>Event Planners</h2>

                    <h3 className="packages-headers" >Figure Out Your Event ROI</h3>
                    <span>
                       Companies spend millions on tradeshows, conferences, and live events without a reliable method of calculating the event's ROI. ABRAXAS Technology provides
                        data analytics into customer behavior and conversions for event marketers. With our patent-pending product at an event, event planners and managers
                        can provide their clients with specific ROI metrics related to a show or performance. With those metrics, clients and business owners can know and
                        show their investors and boards how many event attendees converted into customers.
                        It's time to stop sponsoring and throwing events without data

                        </span>


                    <h3 className="packages-headers">How It Works </h3>
                    <span>
                        The ABRAXAS product is a small plug and play device that can be connected to any normal household outlet and syncs with WiFi.

                        We offer installation services for billboards, retail locations, and event venues.


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

                    <h3 className="packages-headers">Benefits for Event Planners</h3>
                    <span>
                        <ul>
                            <li>
                               	Increase value of conference space; upsell space to renters with key metrics into customer behavior and conversions.

                            </li>
                            <li>
                              	Insight into how frequently people attend your venue and how long they stay.
                            </li>
                            <li>
                               	Insight into which performers draw and propel the most crowds.
                            </li>
                            <li>
                                Access to ABRAXAS HQ online analytics platform.
                            </li>
                        </ul>
                    </span>
                    <button href="/#contact" onClick={this.scrollToContact} className="demo-btn">Request a Demo</button>


                    <div className="event-illustration"></div>

                </div>

            </div>
            </div>

        )
    }
}

export default EventPlanners;