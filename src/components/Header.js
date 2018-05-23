import React from 'react';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isSmallDisplay: null,
            menu: false,
            menuUnderline: null,
            componentIntoView: null,
            items: [
                "home",
                "technology",
                "pricing",
                "about",
                "contact",
                "blog",
                "login",
            ],
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

    scrollToComponent = e => {
        const view = e.target.value;
        let componentDOM = document.getElementById(view);
        this.state.componentIntoView = view;
        if (view && componentDOM) {
            e.preventDefault();
            window.scroll({
                top: componentDOM.offsetTop - 80,
                behavior: 'smooth'
            });
            this.props.history.push("/#" + view);
            this.setState(this.state);

        } else {
            return false
        }
    };

    render() {
        let menuItems = this.state.items.map((item, index) => {
            let className = this.isSmallDisplay() ? item + " menu-item small" : item + " menu-item";
            if (item === "blog" || item === "login") {
                return (
                    <a href={'/' + item} onClick={this.scrollToComponent} key={index} className={className} >
                        <button value={item}>{item}</button>
                    </a>
                )
            } else {
                return (
                    <a href={'/#' + item} onClick={this.scrollToComponent} className={className}
                       key={index}>
                        <button value={item}>{item}</button>
                    </a>
                )
            }
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