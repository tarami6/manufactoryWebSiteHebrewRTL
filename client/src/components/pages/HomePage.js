import React, {Component} from 'react';
// Images
import Years from "../../assets/img/90Years.png";
import Services from "../../assets/img/Services.jpg";
import Products from "../../assets/img/Products.jpg";

// Animations
import {Animated} from "react-animated-css";
import {Parallax} from 'react-scroll-parallax';

class HomePage extends Component {
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
                                <button className="ContactUs">Contact Us</button>
                                <button className="ReadHistory">Read Our History</button>
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
                                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with
                                </p>
                                <button className="ContactUs">Raed More</button>
                            </div>
                        </div>
                        <div className="ProductsHolder">
                            <div className="ContentHolder04">
                                <h1>Our Products</h1>
                                <p>
                                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with
                                </p>
                                <button className="ContactUs">Raed More</button>
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