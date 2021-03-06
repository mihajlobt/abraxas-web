import React from 'react';
import Footer from './Footer'
import {Helmet} from 'react-helmet';
import ReactGA from 'react-ga';



class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Helmet >
                    <title>
                        Login
                    </title>
                </Helmet>
                <div className="login-page">
                    <h1>Abraxas HQ</h1>
                    <div className="abraxas-hq-image">
                    </div>
                    <div className="login-text">
                        ABRAXAS HQ is Coming Soon! Our web-based dashboard helps users accurately determine the most valuable advertising locations and times of day, and measure advertisement effectiveness by correlating views with consumer behavior.
                    </div>
                </div>
            </div>

        )
    }
}

export default Login;