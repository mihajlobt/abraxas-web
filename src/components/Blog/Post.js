import React from 'react';
import MetaTags from 'react-meta-tags';
import {Helmet} from 'react-helmet';
import ReactGA from 'react-ga';

export const initGA = () => {
    console.log('GA init')
    ReactGA.initialize('UA-109461543-1')
}

export const logPageView = () => {
    ReactGA.set({page : window.location.pathname})
    ReactGA.pageview(window.location.pathname)
}


class Post extends React.Component {
    componentDidMount(){
        initGA();
        logPageView();
    }
    constructor(props){
        super(props)
    }

    render(){

        const item = this.props.item;

        const post = this.props.item.contentEncoded;

        return(
            <div className="main-container">
                <Helmet>
                <title>{item.title}</title>
                </Helmet>
                <div className="post-article">
                    <div>
                        <h1>{item.title}</h1>
                        <img src={item.image} />
                        <div className="post-author">
                            <span>{item.dcCreator}</span>
                            <span>{item.pubDate.substr(0, 16)}</span>
                        </div>
                    </div>
                    <article dangerouslySetInnerHTML={{__html: post}}></article>
                </div>
            </div>
        )
    }
}

export default Post;