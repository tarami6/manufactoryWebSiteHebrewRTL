import React, {Component} from 'react';
// Images
import Smile from "../../assets/img/Smile.png";
import Vi from "../../assets/video/Contact.mp4";

import LocationIcon from "../../assets/img/LocationIcon.png";
import CallIcon from "../../assets/img/CallIcon.png";
import MailIcon from "../../assets/img/MailIcon.png";


// Animations
import {Animated} from "react-animated-css";



// import {Parallax} from 'react-scroll-parallax';

class Contact extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }


    render() {
        return (
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>

                <div className="PageHolder">
                    <div className="ContentHolder07">
                        <video className="Video01" loop={false} autoPlay>
                            <source src={Vi} type="video/mp4"/>
                        </video>

                        <div className="OnVideo">
                            <div className="ImageHolder05">
                                <img src={Smile} alt="" className="Image02"/>

                            </div>
                            <div className="FutureContainer01">
                                <div className="IconHolder">
                                    <div className="Icon1">
                                        <img src={LocationIcon} alt=""/>
                                        <h3>Address</h3>
                                        <p>Hamagal - 12 Karmiel Israel</p>
                                    </div>
                                    <div className="Icon1">
                                        <img src={CallIcon} alt=""/>
                                        <h3>Phone</h3>
                                        <p>04-8660523</p>

                                    </div>
                                    <div className="Icon1">
                                        <img src={MailIcon} alt=""/>
                                        <h3>Email</h3>
                                        <p>Atec@bezeqint.net</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </Animated>
        );
    }
}

export default Contact;