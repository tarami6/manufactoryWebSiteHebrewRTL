import React, {Component} from 'react';
import Logo from '../../assets/img/largeLogo.png';

class MainMenu extends Component {
    render() {
        return (
            <div className="ContainerHolder">
                    <div className="LogoHolder">
                        <img src={Logo} alt="" className="LogoImage"/>

                    </div>
                <div className="LinkHolder">
                    <a href="" className="LinkText">HOME</a>
                </div>
                <div className="LinkHolder">
                    <a href="" className="LinkText">SERVICES</a>
                </div>
                <div className="LinkHolder">
                    <a href="" className="LinkText">PRODUCTS</a>
                </div>
                <div className="LinkHolder">
                    <a href="" className="LinkText">ABOUT</a>
                </div>
                <div className="LinkHolder">
                    <a href="" className="LinkText">CONTACT</a>
                </div>
                <div className="LanguageHolder">
                    <a href="" className="LinkText">HEB | ENG</a>
                </div>

            </div>
        );
    }
}

export default MainMenu;