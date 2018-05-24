import React from 'react';



class BackToTop extends React.Component {

    constructor(props){
        super(props)
    }

    scrollToTop = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    render(){
        return(
            <button onClick={this.scrollToTop()} className="scroll-btn">
                <div className="scroll-to-top"> </div>
            </button>
        )
    }
}

export default BackToTop;