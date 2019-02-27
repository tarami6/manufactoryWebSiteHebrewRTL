import React, {Component} from 'react';
// Images
import Smile from "../../assets/img/Smile.png";
import Vi from "../../assets/video/Contact.mp4";

import LocationIcon from "../../assets/img/LocationIcon.png";
import CallIcon from "../../assets/img/CallIcon.png";
import MailIcon from "../../assets/img/MailIcon.png";



// Animations
import {Animated} from "react-animated-css";
import {scrollUp} from "../functions/functions";



// import {Parallax} from 'react-scroll-parallax';

class Contact extends Component {
     mapsSelector =()=> {
        if /* if we're on iOS, open in Apple Maps */
        ((navigator.platform.indexOf("iPhone") != -1) ||
            (navigator.platform.indexOf("iPad") != -1) ||
            (navigator.platform.indexOf("iPod") != -1))
            window.open("maps://maps.google.com/maps?daddr=32.923277,35.312480&amp;ll=");
        else /* else use Google */
            window.open("https://maps.google.com/maps?daddr=32.923277,35.312480&amp;ll=");
    }

    async componentDidMount() {
        this.props.changeScrollState(false, 'contact')
        await scrollUp()
        await this.scrollEvent()
    }

    scrollEvent(){
        if(!this.props.state.menuScrolled && window.pageYOffset == 0 ){
            window.addEventListener('scroll',this.chageParentSate )
        }
    }

    chageParentSate = () =>{
        if (window.pageYOffset !== 0) {
            this.props.changeScrollState(true, 'contact')
            window.removeEventListener('scroll', this.chageParentSate)
        }
    }

    componentWillUnmount() {
        console.log("unmount")
        this.props.changeScrollState(false, 'contact')
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
                                            <img className="LocationIcon" onClick={this.mapsSelector} src={LocationIcon} alt=""/>
                                            <h3>Address</h3>
                                            <a href="">Hamagal - 12 Karmiel Israel</a>
                                    </div>
                                    <div className="Icon1">
                                        <a href="tel:04-8660523">
                                        <img src={CallIcon} alt=""/>
                                        <h3>Phone</h3>
                                        <p>04-8660523</p>
                                        </a>

                                    </div>
                                    <div className="Icon1">
                                        <a href="mailto:Atec@bezeqint.net">


                                        <img src={MailIcon} alt=""/>
                                        <h3>Email</h3>
                                        <a style={{color:'#fff'}}  href="mailto:Atec@bezeqint.net">Email us
                                        </a>
                                        </a>
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