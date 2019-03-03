import React, {Component} from 'react';
import {Link} from "react-router-dom";


// functions
import {scrollUp} from '../functions/functions'
// Images
import Years from "../../assets/img/90YearsHeb.png";
import Services from "../../assets/img/Services.jpg";
import Products from "../../assets/img/Products.jpg";

// Animations
import {Animated} from "react-animated-css";
import {Parallax} from 'react-scroll-parallax';

class HomePage extends Component {

    async componentDidMount() {
        this.props.changeScrollState(false, 'home')
        await scrollUp()
        await this.scrollEvent()
    }

    scrollEvent() {
        if (!this.props.state.menuScrolled && window.pageYOffset == 0) {
            window.addEventListener('scroll', this.chageParentSate)
        }
    }

    chageParentSate = () => {
        if (window.pageYOffset !== 0) {
            this.props.changeScrollState(true, 'home')
            window.removeEventListener('scroll', this.chageParentSate)
        }
    }

    componentWillUnmount() {
        console.log("unmount")
        this.props.changeScrollState(false, 'home')
    }


    render() {
        return (
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                <div className="PageHolder">
                    <div className="FirstContainer">
                        <div className="ImageHolder01">
                            <Parallax
                                className="custom-class"
                                offsetYMax={50}
                                offsetYMin={-50}
                                slowerScrollRate
                                tag="figure"
                            >
                                <img src={Years} alt="" className="Image01"/>
                            </Parallax>
                        </div>
                    </div>
                    <div className="ContentHolder01">
                        <h1 className="Title01">Welcome <span style={{color: '#D64E25'}}>Text Who we are</span></h1>
                        <p className="TextHolder">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.
                            Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p className="TextHolderOrange">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.
                            Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className="FutureContainer">
                        <div className="ContentHolder02">
                            <div className="TextHolder01">
                                <h2>We build our future</h2>
                                <span>Industry 4.0</span>
                            </div>
                            <div className="ButtonHolder">
                                <Link to="/contact">
                                    <button className="ContactUs">Contact Us</button>
                                </Link>
                                <Link to="/about">
                                    <button className="ReadHistory">Read Our History</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="ProductsAndServiceConatainer">
                        <div className="ServicesHolder">
                            <div className="ImageHolder02">
                                <img src={Services} className="Image03" alt=""/>
                            </div>
                            <div className="ContentHolder03">
                                <h1>Our Service</h1>
                                <p>
                                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
                                    print, graphic or web designs. The passage is attributed to an unknown typesetter in
                                    the 15th century who is thought to have scrambled parts of Cicero's De Finibus
                                    Bonorum et Malorum for use in a type specimen book. It usually begins with
                                </p>
                                <Link to="/services">
                                    <button className="ContactUs">Raed More</button>
                                </Link>
                            </div>
                        </div>
                        <div className="ProductsHolder">
                            <div className="ContentHolder04">
                                <h1>Our Products</h1>
                                <p>
                                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
                                    print, graphic or web designs. The passage is attributed to an unknown typesetter in
                                    the 15th century who is thought to have scrambled parts of Cicero's De Finibus
                                    Bonorum et Malorum for use in a type specimen book. It usually begins with
                                </p>
                                <Link to="/products">
                                    <button className="ContactUs">Raed More</button>
                                </Link>

                            </div>
                            <div className="ImageHolder03">
                                <img src={Products} className="Image03" alt=""/>
                            </div>

                        </div>
                    </div>
                </div>
            </Animated>
        );
    }
}

export default HomePage;