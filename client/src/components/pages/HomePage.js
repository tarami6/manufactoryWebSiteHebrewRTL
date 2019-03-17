import React, {Component} from 'react';
import {Link} from "react-router-dom";


// functions
import {scrollUp} from '../functions/functions'
// Images
import Years from "../../assets/img/firstCover.png";
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
                        <h1 className="Title01 "> <span style={{color: '#D64E25'}}>עקיבא טולוצ'ינסקי</span> קבלנים לעבודות חשמל בע"מ</h1>
                        <p className="TextHolder rtlText">
                            חברת עקיבא טולוצ'ינסקי נחשבת לחלוצה בענפי התעשייה המקומיים והבינלאומיים, כשלצידה ניסיון של כמעט מאה שנות פעילות פורצת דרך בתחומי המתכת והפלסטיק ושיתופי הפעולה הפוריים שלה עם חברות-ענק מארץ וממדינות רבות אחרות בעולם.
                        </p>
                        <p className="TextHolderOrange rtlText">
                            את עיקר פעילות החברה מנהלת משפחת טולוצ'ינסקי מהמפעל המתקדם הממוקם בכרמיאל, המעסיק קרוב ל-70 עובדים מישובי הסביבה ומפעיל עשרות מכונות חכמות, העדכניות ביותר מסוגן בכל תחום בו עוסקת החברה.
                        </p>
                    </div>
                    <div className="FutureContainer">
                        <div className="ContentHolder02">
                            <div className="TextHolder01">
                                <h2 >We build our future</h2>
                                <span>Industry 4.0</span>
                            </div>
                            <div className="ButtonHolder">
                                <Link to="/contact">
                                    <button className="ContactUs">צור קשר</button>
                                </Link>
                                <Link to="/about">
                                    <button className="ReadHistory">קרא על המורשת שלנו</button>
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
                                <h1 className="rtlText titleGrey">השירותים שלנו</h1>
                                <p className="rtlText">
                                    המפעל שלנו כולל מספר מחלקות שונות העוסקות ממגוון תחומי עיסוק רחב, בהזרקות הפלסטיק ועד לעיבוד שבבי, כולל כל מה שנמצא ביניהם. אנחנו מלווים כל לקוח שלנו, קטן או גדול, משלב התכנון והפיתוח של המוצר הנדרש ועד לשלב יצור המוצר הסופי, מורכב ככל שיהיה. רמתה המקצועית של חברת עקיבא טולוצ'ינסקי מאפשרת לה להבטיח, כי השירות הנלווה למוצר, אף הוא יהיה נרמה הראשונה במעלה.
                                </p>
                                <Link to="/services">
                                    <button className="ContactUs rtlText">תראו לי עוד...</button>
                                </Link>
                            </div>
                        </div>
                        <div className="ProductsHolder">
                            <div className="ContentHolder04">
                                <h1 className="rtlText titleGrey" >המוצרים שלנו</h1>
                                <p className="rtlText" >
                                    במפעלנו שבכרמיאל, אנחנו מייצרים אביזרי חשמל במתח נמוך וציוד-קצה.
                                    בזכות הניסיון בן עשרות השנים שלנו, אנחנו דוגלים בגישה הוותיקה, עושים שימוש בחומרי הגלם האיכותיים ביותר,
                                    וכתוצאה מכך, המוצרים שאנחנו מייצרים עמידים יותר מאחרים ומחזיקים עשרות שנים.
                                    בזכות ניסיון זה ובזכותה של הרמה המקצועית אליה הגענו, ביכולתנו להתמודד גם עם משימות ייצור מורכבות של מוצרים המורכבים ממכלול.
                                </p>
                                <Link to="/products">
                                    <button className="ContactUs rtlText">תראו לי עוד...</button>
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
