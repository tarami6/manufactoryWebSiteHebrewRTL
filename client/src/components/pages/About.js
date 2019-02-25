import React, {Component} from 'react';
// Images
import Century from "../../assets/img/Century.png";
import Vi from "../../assets/video/About.mp4";

// Animations
import {Animated} from "react-animated-css";
import Services from "../../assets/img/Services.jpg";
import Img1927 from "../../assets/img/1972.jpg";
import Img1975 from "../../assets/img/1975.jpg";
import Img1990 from "../../assets/img/1990.jpg";
import Img2009 from "../../assets/img/2009.jpg";
import Img2019 from "../../assets/img/2019.jpg";
import Img2025 from "../../assets/img/2025.jpg";


// import {Parallax} from 'react-scroll-parallax';

class About extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }


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
                                <img src={Century} alt="" className="Image02"/>

                            </div>
                            <div className="ProductsAndServiceConatainer">
                                <div className="ServicesHolder">
                                    <div className="ImageHolder07">
                                        <img src={Img1927} className="Image03" alt=""/>
                                    </div>
                                    <div className="ContentHolder03">
                                        <h1>1972</h1>
                                        <p>
                                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with
                                        </p>
                                    </div>
                                </div>
                                <div className="ProductsHolder">
                                    <div className="ContentHolder04">
                                        <h1>1975</h1>
                                        <p>
                                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with
                                        </p>
                                    </div>
                                    <div className="ImageHolder06">
                                        <img src={Img1975} className="Image03" alt=""/>
                                    </div>

                                </div>

                                <div className="ServicesHolder">
                                    <div className="ImageHolder07">
                                        <img src={Img1990} className="Image03" alt=""/>
                                    </div>
                                    <div className="ContentHolder03">
                                        <h1>1990</h1>
                                        <p>
                                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with
                                        </p>
                                    </div>
                                </div>
                                <div className="ProductsHolder">
                                    <div className="ContentHolder04">
                                        <h1>2009</h1>
                                        <p>
                                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with
                                        </p>
                                    </div>
                                    <div className="ImageHolder06">
                                        <img src={Img2009} className="Image03" alt=""/>
                                    </div>

                                </div>
                                <div className="ServicesHolder">
                                    <div className="ImageHolder07">
                                        <img src={Img2019} className="Image03" alt=""/>
                                    </div>
                                    <div className="ContentHolder03">
                                        <h1>2019</h1>
                                        <p>
                                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with
                                        </p>
                                    </div>
                                </div>
                                <div className="ProductsHolder">
                                    <div className="ContentHolder04">
                                        <h1>2025</h1>
                                        <p>
                                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with
                                        </p>
                                    </div>
                                    <div className="ImageHolder06">
                                        <img src={Img2025} className="Image03" alt=""/>
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

export default About;