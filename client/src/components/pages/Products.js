import React, {Component} from 'react';

// functions
import {scrollUp} from '../functions/functions'

// Images
import PerfectProducts from "../../assets/img/PerfectProductsHeb.png";
import Vi from "../../assets/video/Products.mp4";


// Animations
import {Animated} from "react-animated-css";
import Services from "../../assets/img/product01.jpg";
import Product from "../../assets/img/product01.jpg";


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
                                <h1>הנאה לצד מקצועיות</h1>
                                <p className='rtlText'>החתירה למצוינות והשאיפה לאיכות ולשלמות, חשוב לנו ליהנות ממה שאנחנו עושים, וליהנות מכל יום אותו אנחנו מבלים בעבודה.

                                    גישה זו מורגשת ובאה לידי ביטוי בקשרים וביחסים שלנו עם כל אחד מהגרמים איתם באה חברת עקיבא טולצ'ינסקי במגע - הלקוחות, הספקים, השותפים לעסקים, וכן, גם הקולגות שלנו לתחום או המתחרים שלנו.
                                </p>
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
