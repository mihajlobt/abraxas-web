import React from 'react';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isSmallDisplay: null,
            menu: false,
            componentIntoView: null,
            items: [
                {name: "home", path: "home"},
                {name: "technology", path: "product", isOpened: false, subItems: [
                        {name: "product", path: "product"},
                        {name: "packages", path: "packages", isOpened: false, subItems: [
                                {name: "Advertisers/Media Buyers", path: "advertisers-media-buyers"},
                                {name: "Billboard Owners", path: "billboard-owners"},
                                {name: "Event Planners", path: "event-planners"},
                                {name: "Small Business Owners", path: "small-business-owners"},
                                {name: "Smart Cities", path: "smart-cities"}
                        ]}
                    ]},
                {name: "about", path: "about"},
                {name: "careers", path: "careers"},
                {name: "contact", path: "contact"},
                {name: "blog", path: "blog"},
                {name: "login", path: "login"}
            ]
        }
    }

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

    handleMenu = event => {
        const {value: view} = event.target;

        this.state.componentIntoView = view;

        if (view !== "technology" && view !== "packages") {
            this.state.menu = !this.state.menu;
        }

        this.setState(this.state);

    };

    scrollToComponent = e => {
        const view = e.target.value;
        if (view !== "login" && view !== "blog" && view !== "terms" && view !== "technology"  && view!=="careers" && view !== "packages" && view !== "product" && view !== "pricing" && view !== "advertisers-media-buyers" && view!== "billboard-owners" && view!== "event-planners" && view !== "small-business-owners" && view!== "smart-cities") {
            this.state.componentIntoView = view;
            e.preventDefault();
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

    handleHover = (item, index) => {
        item.isOpened = !item.isOpened;
        this.setState(this.state);
    };


    render() {

        let menuItems = this.state.items.map((item, index) => {
            let className = this.isSmallDisplay() ? item.name + " menu-item small" : item.name + " menu-item";

            if (item.name === "blog" || item.name === "login" || item.name === "pricing" || item.name === "careers") {
                return (
                    <a onClick={this.scrollToComponent} className={className} key={index}>
                        <button value={item.path}>{item.name}</button>
                    </a>
                )
            } else if(item.name === "technology"){
                const { subItems } = this.state.items[index];


                let subMenu = subItems.map((subItem, subIndex)=>{
                    if (subItem.name === "packages") {
                        let packagesMenu = subItem.subItems.map((packageSubItem, packageItemIndex)=>{
                            return (
                                <a onClick={this.scrollToComponent} className={className + ' sub-menu-item package-item'} key={packageItemIndex}>
                                    <button value={packageSubItem.path}>{packageSubItem.name}</button>
                                </a>
                            )
                        });

                        let wrappedPackagesMenu = (<div onMouseLeave={this.handleHover.bind(this, subItem, subIndex)}>{packagesMenu}</div>);
                        return (
                            <div onClick={this.handleHover.bind(this, subItem, subIndex)} onMouseEnter={!this.isSmallDisplay() ? this.handleHover.bind(this, subItem, subIndex) : null}  className={className + ' sub-menu-item'} key={subIndex}>
                                <a onClick={this.scrollToComponent} >
                                    <button value={subItem.path}>{subItem.name} -></button>
                                </a>
                                {subItem.isOpened ? wrappedPackagesMenu : null}
                            </div>
                        )
                    } else {
                        return (
                            <a onClick={this.scrollToComponent} className={className + ' sub-menu-item'} key={subIndex}>
                                <button value={subItem.path}>{subItem.name}</button>
                            </a>
                        )
                    }
                });

                let wrappedSubMenu = (<div onMouseLeave={this.handleHover.bind(this, item, index)} className={this.isSmallDisplay() ? 'sub-menu sub-menu-opened sub-menu-small' : 'sub-menu sub-menu-opened'}>{subMenu}</div>);

                return (
                    <div onClick={this.scrollToComponent} onMouseEnter={!this.isSmallDisplay() ? this.handleHover.bind(this, item, index) : null} className={className} key={index}>
                        <button value={item.name}>{item.name}</button>
                        {item.isOpened ? wrappedSubMenu : null}
                    </div>
                )

            } else {

                return (
                    <a href={item.name} onClick={this.scrollToComponent} className={className}
                       key={index}>
                        <button value={item.name}>{item.name}</button>
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