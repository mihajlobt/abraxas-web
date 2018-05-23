import React from 'react';

class Contact extends React.Component {

    render() {
        return (
            <div className="contact-form"  id="contact">
                <h1>Contact Us!</h1>
                <form>
                    <div className="form-row">
                        <div className="form-column">
                            <div className="form-section">
                                <label htmlFor="name">Name</label>
                                <input id="name" />
                            </div>
                            <div className="form-section">
                                <label htmlFor="phone">Phone</label>
                                <input id="phone" />
                            </div>
                        </div>
                        <div className="form-column">
                            <div className="form-section">
                                <label htmlFor="location">Email Address</label>
                                <input id="email" type="email" />
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
                            <input id="location"/>
                        </div>
                        <div className="form-section">
                            <label htmlFor="message">Message</label>
                            <textarea id="message"></textarea>
                        </div>
                    </div>
                    <button className="submit-message" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}


export default Contact;