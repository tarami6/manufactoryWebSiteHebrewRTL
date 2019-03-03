import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Logo from '../../assets/img/largeLogo.png';
import {Animated} from "react-animated-css";
import classnames from 'classname';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

class MainMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 'home'
        }
    }

    scrolDown() {
        let height = window.innerHeight;
        window.scrollTo({
            top: height,
            behavior: 'smooth'
        });
    }

    componentDidMount() {
        this.setState({currentPage: this.props.state.currentPage})
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (this.props.state.currentPage !== nextProps.state.currentPage) {
            this.setState({currentPage: nextProps.state.currentPage})
        }
    }


    render() {
        console.log("page", this.state.currentPage)
        return (
            <div>
                <div className="ContainerHolder">
                    <div className="LogoHolder">
                        <img src={Logo} alt="" className="LogoImage"/>

                    </div>
                    {this.props.state.menuScrolled || this.props.state.counter > 2 ?
                        <div>
                            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                                <div className={classnames('LinkHolder',
                                    {'CurrentPageLinkHolder': this.state.currentPage === 'home'})}
                                >
                                    <Link to="/"
                                          className={classnames('LinkText',
                                              {'CurrentPageLinkText': this.state.currentPage === 'home'})}
                                    >ראשי</Link>
                                </div>

                                <div className={classnames('LinkHolder',
                                    {'CurrentPageLinkHolder': this.state.currentPage === 'services'})}
                                >
                                    <Link to="/services" className={classnames('LinkText',
                                        {'CurrentPageLinkText': this.state.currentPage === 'services'})}
                                    >שירותים</Link>
                                </div>

                                <div className={classnames('LinkHolder',
                                    {'CurrentPageLinkHolder': this.state.currentPage === 'products'})}
                                >
                                    <Link to="/products" className={classnames('LinkText',
                                        {'CurrentPageLinkText': this.state.currentPage === 'products'})}
                                    >מוצרים</Link>
                                </div>

                                <div className={classnames('LinkHolder',
                                    {'CurrentPageLinkHolder': this.state.currentPage === 'about'})}
                                >
                                    <Link to="/about" className={classnames('LinkText',
                                        {'CurrentPageLinkText': this.state.currentPage === 'about'})}
                                    >אודות</Link>
                                </div>

                                <div className={classnames('LinkHolder',
                                    {'CurrentPageLinkHolder': this.state.currentPage === 'contact'})}
                                >
                                    <Link to="/contact" className={classnames('LinkText',
                                        {'CurrentPageLinkText': this.state.currentPage === 'contact'})}
                                    >צור קשר</Link>
                                </div>
                                <div className="LanguageHolder">
                                    <a href="" className="LinkText">HEB | ENG</a>
                                </div>
                            </Animated>
                        </div>
                        :

                        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>

                            <div onClick={this.scrolDown} className="mouse_wave">

                                <p>בבקשה</p>
                                <p>לגלול</p>
                                <p>למטה</p>
                                <span className="scroll_arrows one"></span>
                                <span className="scroll_arrows two"></span>
                                <span className="scroll_arrows three"></span>
                            </div>
                        </Animated>

                    }
                </div>
            </div>
        );
    }
}

export default MainMenu;