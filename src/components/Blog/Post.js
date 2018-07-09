import React from 'react';
import MetaTags from 'react-meta-tags';


class Post extends React.Component {

    constructor(props){
        super(props)
    }

    render(){

        const item = this.props.item;

        const post = this.props.item.contentEncoded;

        return(
            <div className="main-container">
                <MetaTags>
                    <title>{item.title}</title>
                    <meta property="og:title" content={item.title} />
                    <meta property="og:description" content="Abraxas Technology" />
                    <meta property="og:site_name" content="Abraxas Technology" />

                </MetaTags>
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