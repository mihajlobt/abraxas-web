import React from 'react';

class Post extends React.Component {

    constructor(props){
        super(props)
    }

    render(){

        const item = this.props.item;

        const post = this.props.item.contentEncoded;

        return(
            <div className="main-container">
                <div className="post-article">
                    <div>
                        <h1>{item.title}</h1>
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