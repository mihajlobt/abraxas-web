import React from 'react';

class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    scrollReset(view){
        window.scrollTo(0,0);
        this.props.history.replace("/" + view);
    }

    render() {
        return (
            <div className="footer">
                <div className="social-icons">
                    <a href="https://www.facebook.com/abraxastech/" className="icon facebook-icon"></a>
                    <a href="https://twitter.com/Abraxas_Tech" className="icon twitter-icon"></a>
                    <a href="https://www.linkedin.com/company/abraxas-technology/" className="icon linked-in-icon"></a>
                </div>
                <div className="footer-terms">
                    <div>© 2018 ABRAXAS TECHNOLOGY.</div>
                    <a className="footer-link" onClick={this.scrollReset.bind(this, "terms")} >Terms & Conditions</a>
                    <a className="footer-link" onClick={this.scrollReset.bind(this, "privacypolicy")} > Privacy Policy </a>
                </div>
            </div>
        )
    }
}


export default Footer;