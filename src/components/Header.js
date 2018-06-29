import React from 'react';
import {BrowserRouter as Link} from 'react-router-dom'

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
                "about",
                "careers",
                "contact",
                "blog",
                "login",
            ],
            subMenuItems : [
                "product",
                "packages"
            ],
            subSecondMenuItems :[
                {
                    pathName:"advertisers-media-buyers",
                    linkName : "Advertisers / Media Buyers"
                },
                {
                    pathName:"billboard-owners",
                    linkName : "Billboard Owners"
                },
                {
                    pathName:"event-planners",
                    linkName : "Event Planners"
                },
                {
                    pathName:"small-business-owners",
                    linkName : "Small Business Owners"
                },
                {
                    pathName:"smart-cities",
                    linkName : "Smart Cities"
                }
                ],
            subMenuOpened : false,
            subSecondMenuOpened:false,
        }
    }

    handleHover = () => {
        this.setState({ subMenuOpened : true });
    };
    handleSubHover = () => {
        this.setState({ subSecondMenuOpened: true });
    };

    handleLeave = () => {
        this.setState({ subMenuOpened : false });
    };

    handleSubLeave = () => {
        this.setState({ subSecondMenuOpened: false });
    };
    isSmallDisplay = () => {
        return window.innerWidth <= 768;
    };

    componentDidMount = () => {
        this.state.isSmallDisplay = this.isSmallDisplay();
        window.addEventListener("resize", (e) => {
            if (this.isSmallDisplay() !== this.state.isSmallDisplay) {
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
        if (view !== "login" && view !== "blog" && view !== "terms" && view !== "technology"  && view!=="careers" && view !== "packages" && view !== "product" && view !== "advertisers-media-buyers" && view!== "billboard-owners" && view!== "event-planners" && view !== "small-business-owners" && view!== "smart-cities") {
            this.state.componentIntoView = view;
            e.preventDefault();
            /*this.props.history.replace("/");

            this.setState(this.state, ()=>{
                let componentDOM = document.getElementById(view);

                window.scroll({
                    top: componentDOM.offsetTop - 80,
                    behavior: 'smooth'
                });

            });*/
            this.props.history.replace("/#" + view);


        } else {
            window.scrollTo(0, 0);
            this.props.history.replace("/" + view);
        }
    };

    scrollToTop = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };


    render() {

        let subMenu = this.state.subMenuItems.map((item,index)=> {
            let className = this.isSmallDisplay() ? item + " menu-item small" : item + " menu-item";
            if( item === "packages"){
                    return (
                        <div onMouseLeave={this.handleSubLeave}>
                            <a  onMouseEnter={this.handleSubHover} onClick={this.scrollToComponent} className={className} key={index}>
                                <button value={item}>{item}</button>
                            </a>
                            {this.state.subSecondMenuOpened && wrappedSecondSubMenu}
                        </div>
                    )
            } else {
                return(
                    <a onClick={this.scrollToComponent} onMouseEnter={this.handleSubHover} className={className} key={index}>
                        <button value={item}>{item}</button>
                    </a>
                )
            }
            });

        let subSecondMenu = this.state.subSecondMenuItems.map((item,index)=> {
            let className = this.isSmallDisplay() ? item.pathName + " menu-item small" : item.pathName + " menu-item";
            return(
                <a onClick={this.scrollToComponent} className={className} key={index}>
                    <button value={item.pathName}>{item.linkName}</button>
                </a>
            )
        });

        let wrappedSubMenu = (
            <div className="sub-menu">
                {subMenu}
            </div>
        );

        let wrappedSecondSubMenu = (
            <div>
                {subSecondMenu}
            </div>
        );

        let menuItems = this.state.items.map((item, index) => {
            let className = this.isSmallDisplay() ? item + " menu-item small" : item + " menu-item";

            if (item === "blog" || item === "login" || item === "pricing" || item === "careers") {
                return (
                    <a onClick={this.scrollToComponent} className={className} key={index}>
                        <button value={item}>{item}</button>
                    </a>
                )
            } else if(item === "technology"){
                return (
                    <div onMouseLeave={this.handleLeave}>
                        <a onMouseEnter={this.handleHover} className={className} key={index}>
                            <button value={item}>{item}</button>
                        </a>
                        {this.state.subMenuOpened && wrappedSubMenu}
                    </div>
                )

            } else {

                return (
                    <a href={item} onClick={this.scrollToComponent} className={className}
                       key={index}>
                        <button value={item}>{item}</button>
                    </a>
                )
            }
        });

        let burgerMenu = (<div onClick={this.handleMenu}
                               className={!this.state.menu ? "nav-icon1 main-menu-burger closed" : "nav-icon1 open main-menu-burger opened"}>
            <span></span>
            <span></span>
            <span></span>
        </div>);


        return (
            <div className="header-wrapper">
                <button value={'home'} href={"/home"} onClick={this.scrollToComponent} className="logo-image"></button>
                <div className="main-menu">
                    {!this.isSmallDisplay() ? menuItems : null}
                </div>
                {burgerMenu}
                <div onClick={this.handleMenu}
                     className={this.state.menu ? "burger-items opened" : "burger-items closed"}>
                    {this.isSmallDisplay() ? menuItems : null}
                </div>
                <button onClick={this.scrollToTop} className="scroll-btn">
                    <div className="scroll-to-top"></div>
                </button>
            </div>
        )
    }
}


export default Header;