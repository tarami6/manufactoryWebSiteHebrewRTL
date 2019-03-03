import React, {Component} from 'react';
// Images
import Customers from "../../assets/img/CustomersHeb.png";
import Vi from "../../assets/video/PlasticInjection.mp4";

import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
// Animations
import {Animated} from "react-animated-css";
import {scrollUp} from "../functions/functions";
// import {Parallax} from 'react-scroll-parallax';

class Services extends Component {

    async componentDidMount() {
        this.props.changeScrollState(false, 'services')
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
            this.props.changeScrollState(true, 'services')
            window.removeEventListener('scroll', this.chageParentSate)
        }
    }

    componentWillUnmount() {
        console.log("unmount")
        this.props.changeScrollState(false, 'services')
    }

    scrollToMyRef = (ref) =>  ref.current.scrollIntoView({behavior: 'smooth',block: "nearest", inline :'nearest'})

    render() {
        return (
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>

                <div className="PageHolder">
                    <div className="ContentHolder07">
                        <video className="Video01" loop={true} autoPlay>
                            <source src={Vi} type="video/mp4"/>
                        </video>

                        <div className="OnVideo">
                            <div className="ImageHolder05">
                                <img src={Customers} alt="" className="Image02"/>

                            </div>
                            <div className="Submenu">
                                <Link className="MenuItem" activeClass="active" to="test1" spy={true} smooth={true} >
                                    Test 1
                                </Link>
                                <Link className="MenuItem" activeClass="active" to="test2" spy={true} smooth={true} >
                                    Test 2
                                </Link>
                                <Link className="MenuItem" activeClass="active" to="test3" spy={true} smooth={true} >
                                    Test 3
                                </Link>

                            </div>

                            <div className="ContentHolder08">
                                <div className="FirstContent">
                                    <h1>Title</h1>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                </div>
                                <Element name="test1"  className="SecondContent">
                                    <h1>Title1</h1>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                </Element>
                                <Element name="test2" className="FirstContent">
                                    <h1>Title2</h1>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                </Element>
                                <Element name="test3" className="ThirdContent">
                                    <h1>Title3</h1>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                </Element>
                            </div>

                        </div>
                    </div>



                </div>
            </Animated>
        );
    }
}

export default Services;