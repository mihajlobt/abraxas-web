import React from 'react';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isSmallDisplay: null,
            menu: false
        }
    }

    isSmallDisplay = () =>{
        return window.innerWidth <= 768;
    };

    componentDidMount = () => {
        this.state.isSmallDisplay = this.isSmallDisplay();
        window.addEventListener("resize", (e)=>{
            if(this.isSmallDisplay() !== this.state.isSmallDisplay){
                this.state.isSmallDisplay = this.isSmallDisplay();
                this.setState(this.state);
                console.log('set');
            }
        })
    };

    handleMenu = () => {
        this.state.menu = !this.state.menu;
        this.setState(this.state);

    };


    render() {
        let menuItems = this.props.components.map((item, index) => {
            let className = this.isSmallDisplay() ? item + " menu-item small" : item + " menu-item";
            return (
                <div onClick={this.props.scrollToComponent.bind(this, item, index)} className={className}
                     key={index}>
                    <button className={this.props.componentIntoView === item ? "selected-component" : ""}>{item}</button>
                </div>
            )
        });

        let burgerMenu = (<div onClick={this.handleMenu} className={!this.state.menu ? "nav-icon1 main-menu-burger closed" : "nav-icon1 open main-menu-burger opened"}>
                <span></span>
                <span></span>
                <span></span>
            </div>);


        return (
            <div className="header-wrapper">
                <div className="logo-image"> </div>
                <div className="main-menu">
                    {!this.isSmallDisplay() ? menuItems : null}
                </div>
                {burgerMenu}
                <div onClick={this.handleMenu} className={this.state.menu ? "burger-items opened" : "burger-items closed"}>
                    {this.isSmallDisplay() ? menuItems : null}
                </div>
            </div>
        )
    }
}


export default Header;