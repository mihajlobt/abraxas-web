import React from 'react';

class Contact extends React.Component {

    render() {
        return (
            <div className="contact-form"  id="contact">
                <div className="contact-header">
                <h1>Contact Us!</h1>
                </div>
                <div className="contact-section">
                    <div className="left-contact">
                        <h2> HEADQUARTERS</h2>
                        <div className="contact-headquarters">

                        <p> Abraxas Technology</p>
                        <p> 4009 Banister Lane, Suite 430 </p>
                        <p> Austin, TX 78704</p>
                        </div>
                        <h3>MAIN</h3>
                        <div className="contact-main">
                        <p>(512) 525-8154</p>
                        <p> info@abraxastechnology.com  </p>
                        </div>

                    </div>
                    <div className="right-contact">
                <form action="mailto:info@abraxastechnology.com" method="post" encType="text/plain" data-request="http://abraxastechnology.com/cf-api/CF5a01bb5a565d0">
                    <div className="form-row">
                        <div className="form-column">
                            <div className="form-section">
                                <label htmlFor="name">Name</label>
                                <input id="name" required />
                            </div>
                            <div className="form-section">
                                <label htmlFor="phone">Phone</label>
                                <input required id="phone" />
                            </div>
                        </div>
                        <div className="form-column">
                            <div className="form-section">
                                <label htmlFor="location">Email Address</label>
                                <input required id="email" type="email" />
                            </div>
                            <div className="form-section">
                                <label htmlFor="type">I am a</label>
                                <select defaultChecked={'OWNER'}>
                                    <option>OWNER</option>
                                    <option>ADVERTISER</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-column">
                        <div className="form-section">
                            <label htmlFor="location">Location</label>
                            <input required id="location"/>
                        </div>
                        <div required className="form-section">
                            <label htmlFor="message">Message</label>
                            <textarea id="message"></textarea>
                        </div>
                    </div>
                    <button className="submit-message" type="submit">Submit</button>
                </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default Contact;