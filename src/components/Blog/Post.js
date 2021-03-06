import React from 'react';
import MetaTags from 'react-meta-tags';
import {Helmet} from 'react-helmet';
import ReactGA from 'react-ga';




class Post extends React.Component {

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