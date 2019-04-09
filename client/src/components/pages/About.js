import React, {Component} from 'react';


// functions
import {scrollUp} from '../functions/functions'
// Images
import Century from "../../assets/img/CenturyHeb.png";
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



    async componentDidMount() {
        this.props.changeScrollState(false, 'about')
        await scrollUp()
        await this.scrollEvent()
    }
    componentWillReceiveProps(nextProps){
        console.log("scroll2",nextProps )
    }

    scrollEvent(){
        console.log("scroll",this.props.state.menuScrolled )
        if(!this.props.state.menuScrolled && window.pageYOffset == 0 ){
            window.addEventListener('scroll',this.chageParentSate )
        }
    }

    chageParentSate = () =>{
        console.log("34")
        if (window.pageYOffset !== 0) {
            this.props.changeScrollState(true, 'about')
            window.removeEventListener('scroll',this.chageParentSate )
        }

    }
    componentWillUnmount() {
        console.log("unmount")
        this.props.changeScrollState(false, 'about')
    }







    render() {
        console.log("props", this.props.state)
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
                                        <h2 className="titleGrey">1927</h2>
                                        <p className="rtlText">
                                            עקיבא טולוצ'נסקי הוקמה ב-1927 ע"י מר טולוצ'ינסקי. את עיקר פעילותה החלה כחברה קבלנית לעבודות חשמל בתעשייה: הקמת מתקני חשמל שונים, תחנות שאיבה, תחנות השנאה, תכנון וייצור מכונות ייעודיות ולוחות פיקוד בקרה.
                                        </p>
                                    </div>
                                </div>
                                <div className="ProductsHolder">
                                    <div className="ContentHolder04">
                                        <h2 className="titleGrey">1975</h2>
                                        <p className="rtlText">
                                            בשנת 1975 נפטר מייסד החברה. החברה עברה לניהול הדור השני: הורחבה פעילות הייצור במגוון מוצרים בתחום המתכת בטכנולוגיות כבישה קרה וחמה, עיבוד שבבי, כיפוף וניקוב, ייצור של צנרת גמישה ממתכת עם כולל ריתוך צנרת בלחץ גבוה. CO2, עבודות ריתוך בארגון, אלקטרודה ו PVCציפוי עם התקדמות בייצור הצנרת, החברה פיתחה את תחום הפלסטיק והחלה בייצור מוצרים בטכנולוגיות אקסטרוזיה והזרקה.
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
                                        <h2 className="titleGrey">1990</h2>
                                        <p className="rtlText">
                                            בתחילת שנות ה-90 החברה נרשמה כחברת עקיבא טולוצ'ינסקי קבלנים לעבודות חשמל בע"מ, הדור השלישי הצטרף לניהול עם הדור השני. החברה הרחיבה את פעילות הייצור והחלה לייצר אבזרי חשמל לפי תקנים בינלאומיים שונים ומוטות הארקה לפי התקן ההולנדי המחמיר KEMA.
                                            בשנת 1996אושרה החברה ע"י מכון התקנים הישראלי ל- 9002 ISO.
                                        </p>
                                    </div>
                                </div>
                                <div className="ProductsHolder">
                                    <div className="ContentHolder04">
                                        <h2 className="titleGrey">2009</h2>
                                        <p className="rtlText">
                                            בשנת 2009 עברה השליטה בחברה לדור הרביעי למשפחת טולוצ'ינסקי והמפעל עבר מחיפה לאזור התעשייה בכרמיאל. המבנה החדש אפשר הרחבה ושיפור קווי ייצור קיימים עם הכנסת טכנולוגיות חדישות בתחומי ההלחמה האולטרסונים.
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
                                        <h2 className="titleGrey">2019</h2>
                                        <p className="rtlText">
                                            כיום עוסקת החברה בתכנון, פיתוח, ייצור ושיווק של מוצרי פלסטיק ומתכת והשילובים שלהם, ובאחזקת תווי תקן למוצריה. החברה דוגלת ברמת איכות הגבוהה ביותר במוצריה ובמוצרים שמייצרת בקבלנות משנה.
                                        </p>
                                    </div>
                                </div>
                                <div className="ProductsHolder">
                                    <div className="ContentHolder04">
                                        <h2 className="titleGrey">2025</h2>
                                        <p className="rtlText">
                                            מעבר להיסטוריה המכובדת והמרשימה שלה, חברת עקיבא טולוצ'ינסקי היא בעלת חזון ברור ומגובש, המצעיד אותה בבטחה היישר לקראת עידן תעשייה 4.0.
                                            החזון שלנו הוא פשוט למדי, אבל יחד עם זאת, יוצא דופן בייחודו - אנחנו מאמינים כי מקצועיות או חדשנות תעשייתית אינן יכולות להתקיים אך ורק בזכות עצמן, אם הן אינן מלוות ביתרון נוסף - העשייה המלווה בחיוך. זו הייתה דרכנו מאז ומעולם, וזו תמשיך להיות הדרך היחידה בה נמשיך לעשות עסקים עם לקוחותינו, ספקינו ושותפינו העסקיים!
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
