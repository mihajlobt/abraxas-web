import React from 'react'

class Blog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isButtonClicked: false
        }
    }

    buttonClick = (e) => {
        let state = this.state;
        state.isButtonClicked = !this.state.isButtonClicked;
        this.setState(state, ()=>{
            console.log(state.isButtonClicked)
        })
    };




    render() {
        return (
            <div>
                <button onClick={this.buttonClick}>primer</button>
            </div>
        )
    }
}

export default Blog;


