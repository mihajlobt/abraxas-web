import React from 'react';

class Pricing extends React.Component {

    render() {
        return (
            <div className="pricing-packages"  id="pricing">
                <h1>Pricing & Packages</h1>
                <div className="package-tiles">
                    <div className="package-container">
                        <h2>Retail Owner</h2>
                        <span>Contact Us For ABRAXAS Ally Pricing</span>
                        <span>Measure trafic and store front conversion</span>
                        <span>Passively collect customer analytics to increase conversion</span>
                        <span>Access to ABRAXAS HQ online analytics platform</span>
                    </div>
                    <div className="package-container">
                        <h2>Billboard Owner</h2>
                        <span>Contact Us For ABRAXAS Scout Pricing</span>
                        <span>Accurately measure impressions, frequency and exposure time.</span>
                        <span>Passively collect viewer analytics and correlate them to in-store and online conversion</span>
                        <span>Access to ABRAXAS HQ online analytics platform</span>
                    </div>
                    <div className="package-container">
                        <h2>Event Planner</h2>
                        <span>Contact Us For ABRAXAS Scout Pricing</span>
                        <span>Measure traffic and event sponsor conversion</span>
                        <span>Passively collect event-goer analytics and correlate them to sponsor conversion</span>
                        <span>Access to ABRAXAS HQ online analytics platform</span>
                    </div>
                    <div className="package-container">
                        <h2>Media Buyer</h2>
                        <span>Contact Us For ABRAXAS Scout Pricing</span>
                        <span>Access to real-time data, analytics to find the best media</span>
                        <span>Gain access to national advertising data to make your media spend more effective.</span>
                        <span>Access to ABRAXAS HQ or data integration into customer system.</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pricing;