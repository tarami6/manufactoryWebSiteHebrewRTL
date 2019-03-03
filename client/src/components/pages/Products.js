import React, {Component} from 'react';

// functions
import {scrollUp} from '../functions/functions'

// Images
import PerfectProducts from "../../assets/img/PerfectProductsHeb.png";
import Vi from "../../assets/video/Products.mp4";


// Animations
import {Animated} from "react-animated-css";
import Services from "../../assets/img/Services.jpg";
import Product from "../../assets/img/Products.jpg";


class Products extends Component {

    async componentDidMount() {
        this.props.changeScrollState(false, 'products')
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
            this.props.changeScrollState(true, 'products')
            window.removeEventListener('scroll', this.chageParentSate)
        }
    }

    componentWillUnmount() {
        console.log("unmount")
        this.props.changeScrollState(false, 'products')
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
                                <img src={PerfectProducts} alt="" className="Image02"/>

                            </div>
                        </div>
                        <div className="ContentHolder08">
                            <div className="FirstContent">
                                <h1>Title</h1>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            </div>

                        </div>
                        <div className="ProductsAndServiceConatainer">
                            <div className="ServicesHolder">
                                <div className="ImageHolder02">
                                    <img src={Services} className="Image03" alt=""/>
                                </div>
                                <div className="ContentHolder03">
                                    <h1>Product</h1>
                                    <p>
                                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with
                                    </p>
                                </div>
                            </div>
                            <div className="ProductsHolder">
                                <div className="ContentHolder04">
                                    <h1>Product</h1>
                                    <p>
                                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with
                                    </p>
                                </div>
                                <div className="ImageHolder03">
                                    <img src={Product} className="Image03" alt=""/>
                                </div>

                            </div>
                            <div className="ServicesHolder">
                                <div className="ImageHolder02">
                                    <img src={Services} className="Image03" alt=""/>
                                </div>
                                <div className="ContentHolder03">
                                    <h1>Product</h1>
                                    <p>
                                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with
                                    </p>
                                </div>
                            </div>
                            <div className="ProductsHolder">
                                <div className="ContentHolder04">
                                    <h1>Product</h1>
                                    <p>
                                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with
                                    </p>
                                </div>
                                <div className="ImageHolder03">
                                    <img src={Product} className="Image03" alt=""/>
                                </div>

                            </div>
                            <div className="ServicesHolder">
                                <div className="ImageHolder02">
                                    <img src={Services} className="Image03" alt=""/>
                                </div>
                                <div className="ContentHolder03">
                                    <h1>Product</h1>
                                    <p>
                                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with
                                    </p>
                                </div>
                            </div>
                            <div className="ProductsHolder">
                                <div className="ContentHolder04">
                                    <h1>Product</h1>
                                    <p>
                                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with
                                    </p>
                                </div>
                                <div className="ImageHolder03">
                                    <img src={Product} className="Image03" alt=""/>
                                </div>

                            </div>
                        </div>
                    </div>



                </div>
            </Animated>
        );
    }
}

export default Products;