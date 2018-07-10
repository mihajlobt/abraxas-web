import React from 'react';
import Posts from './Posts';
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



class Blog extends React.Component {
    constructor(props) {
        super(props);
        let posts = new Posts();
        let images = posts.item.reverse().map((item, index)=>{
            return {image: item.image}
        });
        this.state = {
            images
        }
    }
    componentDidMount(){
        initGA();
        logPageView();
    }

    pushLocalHistory = view => {
        this.props.history.push("/" + view);
        window.scrollTo(0,0)
    };

    render() {

        let postPreviews = new Posts;

        let previews  = postPreviews.item.reverse().map((item, index) => {
            return (
                <a className="post-wrapper" onClick={this.pushLocalHistory.bind(this, item.wpPostName)} key={index}>
                    <Helmet>
                    <title>
                       Blog
                    </title>
                    </Helmet>
                    <article className="post-preview">
                        <div className="flex-space-between">
                            <span className="post-title">{item.title}</span>
                            <div className='post-image-container'>

                            <img src={this.state.images[index].image} className='post-image'/>
                            </div>
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


