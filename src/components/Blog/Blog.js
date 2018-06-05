import React from 'react';
import {Link} from 'react-router-dom';
import Posts from './Posts';

class Blog extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let postPreviews = new Posts;

        let previews  = postPreviews.item.reverse().map((item, index) => {
            return (
                <a className="post-wrapper" key={index} href={"/#/" + item.wpPostName}>
                    <article className="post-preview">
                        <div className="flex-space-between">
                            <span className="post-title">{item.title}</span>
                            <div className="post-author">
                                <span>{item.dcCreator}</span>
                                <span>{item.pubDate.substr(0, 16)}</span>
                            </div>
                        </div>
                        <div className="post-content" dangerouslySetInnerHTML={{ __html: item.contentEncoded.replace(/\n/g, '<br />')}}></div>
                    </article>
                </a>
            )
        });

        return (

            <div className="blog-posts">
                <div className="posts-list">
                    {previews}
                </div>
            </div>
        )
    }

}

export default Blog;


