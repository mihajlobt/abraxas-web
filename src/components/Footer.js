import React from 'react';

class Footer extends React.Component {

    render() {
        return (
            <div className="footer">
                <div className="social-icons">
                    <div className="icon facebook-icon"></div>
                    <div className="icon twitter-icon"></div>
                    <div className="icon linked-in-icon"></div>
                </div>
                <div className="footer-terms">
                    <div>© 2018 ABRAXAS TECHNOLOGY.</div>
                    <a href="/terms">Terms & Conditions</a>
                </div>
            </div>
        )
    }
}


export default Footer;