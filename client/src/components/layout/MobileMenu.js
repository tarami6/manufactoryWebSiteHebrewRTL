import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Logo from '../../assets/img/largeLogo.png';
import Hamburger from 'react-icons/lib/md/menu';
import Close from 'react-icons/lib/md/close';

const MenuButton = (props) => {

    return (
        <button className="MenuBtn"
                onMouseDown={props.func}><Hamburger className="HamburgerIcon"/></button>
    );
}

const  Menu = (props) =>  {
        let visibility = "hide";

        if (props.menuVisibility) {
            visibility = "show";
        }

        return (
            <div id="flyoutMenu"
                 onMouseDown={props.handleMouseDown}
                 className={visibility}>
                <div className="CloseIconHolder">
                    <Close className="CloseIcon"/>
                </div>
                    <Link to="/" className="LinkTextMobile">HOME</Link>
                    <Link to="/services" className="LinkTextMobile">SERVICES</Link>
                    <Link to="/products" className="LinkTextMobile">PRODUCTS</Link>
                    <Link to="/about" className="LinkTextMobile">ABOUT</Link>
                    <Link to="/contact" className="LinkTextMobile">CONTACT</Link>
            </div>
        );
}

class MobileMenu extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            visible: false
        };

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    handleMouseDown(e) {
        this.toggleMenu();

        console.log("clicked");
        e.stopPropagation();
    }

    toggleMenu() {
        this.setState(
            {
                visible: !this.state.visible
            }
        );
    }

    render() {
        return (
            <div className="MenuHolder">


                <div className="MobileMenuLogoHolder">
                    <img src={Logo} className="MobilelLogo" alt=""/>
                </div>
                <MenuButton func={this.handleMouseDown}/>
                <Menu handleMouseDown={this.handleMouseDown}
                      menuVisibility={this.state.visible}/>
            </div>
        );
    }
}

export default MobileMenu;
