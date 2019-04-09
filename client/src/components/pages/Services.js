import React, {Component} from 'react';
// Images
import Customers from "../../assets/img/CustomersHeb.png";
import Vi from "../../assets/video/PlasticInjection.mp4";

import FaCircle from 'react-icons/lib/fa/circle';


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
                                <Link className="MenuItem" activeClass="active" to="test3" spy={true} smooth={true} >
                                    <FaCircle size={5} color={'#E75125'} />
                                    עיבוד מתכות
                                </Link>
                                <Link className="MenuItem" activeClass="active" to="test2" spy={true} smooth={true} >
                                    <FaCircle size={5} color={'#E75125'} />

                                    עיבוד שבבי
                                </Link>
                                <Link className="MenuItem" activeClass="active" to="test1" spy={true} smooth={true} >
                                    <FaCircle size={5} color={'#E75125'} />
                                    הזרקת פלסטיק
                                </Link>

                            </div>

                            <div className="ContentHolder08">
                                <div className="FirstContent">
                                    <h1>יחס אישי ורצינות מקצועית</h1>
                                    <p className="rtlText">כשאתה טוב במה שאתה עושה, אתה יודע שאתה טוב בזה, וזה מאפשר לך להעניק לאנשים איתם אתה בא במגע,
                                        מלבד הרצינות המקצועית, היושר והיחס החם האישי, גם את החיוך הידידותי, שהפך כבר מזמן לסמל הזיהוי הידוע של עובדי חברת עקיבא טולוצ'ינסקי.
                                        אנחנו רוצים ליהנות ממה שאנחנו עושים כל יום בעבודה, ואנחנו רוצים שכל מי שבא
                                        איתנו במגע - ייהנה מהאינטראקציה איתנו גם הוא. ההקפדה על הפרטים הקטנים, היא זו ההופכת אותנו לייחודיים כל כך בנוף התעשייה בישראל וגם בחו"ל.
                                    </p>
                                    <p className="rtlText">החל מאפיון המוצר , בחירת סוג חומר הגלם , התאמה מרחבית של התבנית  לנפח היצור הנדרש על מנת ליעיל את תהליך היצור ולהוזיל עליות , בנוסף חברתנו מקפידה  על הליך יצור התבנית עצמו  על רמת הדיוק ושימוש בחומר גלם איכותי, כדי להעריך את חיי התבנית, ולדאוג שרמת אחידות המוצרים תהיה גבוה מאד.  </p>
                                </div>
                                <Element name="test1"  className="SecondContent">
                                    <h2>הזרקת פלסטיק</h2>
                                    <p className="rtlText">
                                        הזרקת פלסטיק, היא טכנולוגיה אשר מטרתה היא ייצור רכיבים או מוצרים שלמים מפלסטיק באמצעות התכתו של חומר הגלם והזרקתו לתבנית אשר המבנה שלה זהה בצורתו לצורתו של המוצר / הרכיב הסופי. הזרקת פלסטיק, הוא אחד התהליכים הנפוצים ביותר לייצור חלקי פלסטיק.
                                        זהי טכניקת עיבוד להמרת טרמולפסטיק וטרמוסט לתוך כל מיני סוגי מוצרים, במגוון תעשיות: תעשיית הרכב, רפואי, ספורט, בנייה ועוד...
                                        מגוון הצורות הנוצרות כתוצאה מהזרקת פלסטיק הן אינסופיות וניתן ליצור כמעט כל צורה העולה בדמיון.    </p>
                                    <p className="rtlText">
                                        חברת עקיבא טולוצ'ינסקי מתמחה בפיתוח ובייצור בהזרקת פלסטיק
                                        החברה נחשבת לחברה המובילה בישראל בתהליכים של פיתוח וייצור באמצעות הזרקת פלסטיק. במסגרת שירותיה, מספקת החברה ללקוח את כל שירותים הכרוכים בתכנון, בפיתוח ובייצורם של המוצרים והתבניות להזרקת הפלסטיק. היא מהווה נקודת מפגש אחת ללקוח לאורכו של כל התהליך, משלב גיבוש הקונספט ודרך שלבי הפיתוח, ייצור התבנית, ייצור אב-הטיפוס (כשהיא מציעה ללקוחותיה את האפשרויות הייחודיות לבניית המודלים לפני הפיתוח) וכלה בייצורו ובהרכבתו של המוצר הסופי. כל זה, תחת דגם עסקי ייחודי לה, שמאפשר ללקוח ליהנות מאיכות מוצר ויתרונותיהם של הליכי הפיתוח המתקדמים בכחול-לבן, אבל במחירים משתלמים.

                                    </p>
                                    <p className="rtlText">
                                        אנחנו מלווים כל לקוח שלנו מתחילת דרכו בתהליך הייצור הרכיב או המוצר העשוי מפלסטיק, ועד לרגע בו התוצאה המוגמרת מונחת בכפות ידיו. המקצועיות והניסיון עתר השנים שלנו מאפשר לנו לייעץ לו במהלך התלבטויותיו, ואף לסייע לו בבחירה בין החלופות השונות, אשר לעיתים ניצבות בפניו.

                                    </p>
                                </Element>
                                <Element name="test2" className="FirstContent">
                                    <h2>עיבוד שבבי לחומרים מורכבים</h2>
                                    <p className='rtlText'>עיבוד שבבי, הוא תהליך שבו חומר גלם נחתך לתוך צורה סופית רצויה, על ידי הסרת חומר באופן מבוקר.
                                        עיבוד שבבי הוא חלק בייצור של מוצרי מתכת רבים, אבל זה יכול לשמש גם על חומרים כגון עץ, פלסטיק, קרמיקה, וחומרים מרוכבים.
                                        חלק גדול מהעיבוד המודרני מתבצע על ידי מכונת (CNC), שבה מחשבים משמשים לשליטה בתנועה ובהפעלה של טחנות, מחרטות ומכונות חיתוך אחרות. </p>

                                    <p className='rtlText'>
                                        אנחנו מאמינים כי התפקיד שלנו בתהליך אינו מתרכז רק באספקת השירות ללקוח, אלא במתן ייעוץ והכוונה לדרך הנכונה ביותר לביצוע הדברים, תוך בחינת הנושא דרך עיני הלקוח והקפדה על שמירה על האינטרסים שלו. גם אם הדבר דורש מאיתנו חשיבה יצירתית או מציאת פתרונות שאינם שגרתיים.
                                    </p>
                                </Element>
                                <Element name="test3" className="ThirdContent">
                                    <h2>עיבוד מתכות בכבישה קרה/חמה</h2>
                                    <p className='rtlText'>כבישה היא תהליך שבו אנו בעצם מציבים את המתכת מתחת למכבש. התפקיד של המכבש הוא ליצור לחץ חזק מאד על המתכת, ולשנות את צורתה.
                                        קיימות שתי שיטות מרכזיות לביצוע כבישה - חמה או קרה. בכבישה החמה, משתמשים בחימום המתכת לטמפרטורות מאוד גבוהה כזאת המאפשרת לחומר דינמיות.
                                        ברוב המקרים עם זאת, משתמשים בכבישה הקרה, שנעשית בטמפרטורת החדר, כאשר הכבישה עצמה, היא זו שיוצרת טמפרטורה גבוהה שמסייעת להקטנת השטח.</p>
                                    <p className='rtlText'>
                                        אנחנו, בחברת עקיבא טולוצ'ינסקי, מאמינים כי תפקידינו בתהליך הייצור אינו מסתכם אף ורק בייצור הפשוט - אספקת השירות הטכני ללקוח, אלא שהוא רחב יותר וכולל את מתן הייעוץ וההכוונה לדרך המתאימה ביותר לביצועם של הדברים. וזאת, תוך בחינת הסוגיה דרך עיניו של הלקוח וההקפדה על שמירת האינטרסים שלו. אנחנו דבקים בגישת עבודה זו, גם אם, לעיתים, הדבר עלול לדרוש מאיתנו מציאת פתרונות שאינם שגרתיים, או חשיבה מחוץ לקופסה.

                                    </p>
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
