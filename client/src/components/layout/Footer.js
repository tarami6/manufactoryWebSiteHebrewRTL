import React, {Component} from 'react';
import Logo from '../../assets/img/largeLogo.png';
import Time from 'react-icons/lib/md/access-time';
import Location from 'react-icons/lib/md/location-on';
import Phone from 'react-icons/lib/md/phone-in-talk';
import Email from 'react-icons/lib/md/email';


class Footer extends Component {
    mapsSelector =()=> {
        if /* if we're on iOS, open in Apple Maps */
        ((navigator.platform.indexOf("iPhone") != -1) ||
            (navigator.platform.indexOf("iPad") != -1) ||
            (navigator.platform.indexOf("iPod") != -1))
            window.open("maps://maps.google.com/maps?daddr=32.923277,35.312480&amp;ll=");
        else /* else use Google */
            window.open("https://maps.google.com/maps?daddr=32.923277,35.312480&amp;ll=");
    }
    render() {
        return (
            <div className="FooterContainer">
                <div className="ContentHolder06">
                    <div className="Col12">
                        <div className="ImageHolder04">
                            <img src={Logo} className="Image04" alt=""/>
                        </div>
                    </div>
                    <div className="Col12">
                        <div className="ContentHolder05">
                            <h3 className="rtlText">מידע עסקי</h3>
                            <div>
                                <ul>
                                    <li><p className="rtlText">עקיבא טולוצ'ינסקי</p></li>
                                    <li><p className="rtlText">קבלנים לעבודות חשמל בע"ם</p></li>
                                </ul>
                                <p>Copyright 2019 All Rights reserves</p>
                            </div>
                        </div>
                    </div>
                    <div className="Col12">
                        <div className="ContentHolder05">
                            <h3 className="rtlText">שעות פעילות</h3>
                            <p className="TimingText rtlText"><Time className="TimeIcon"/> 18:00 - 9:00</p>
                        </div>
                    </div>
                    <div className="Col12">
                        <div className="ContentHolder05">
                            <h3 className="rtlText">צור קשר</h3>
                            <p className="ContactTextFirst rtlText" onClick={this.mapsSelector} ><Location className="TimeIcon"/><a href="">המגל 12 - כרמיאל</a>
                            </p>
                            <p className="rtlText"><Phone className="TimeIcon"/>  <a href="tel:04-8660523">04-8660523</a></p>
                            <p className="rtlText"><Phone className="TimeIcon"/>  <a href="tel:04-8660523">04-8620254</a> </p>
                            <p className="rtlText"><Email className="TimeIcon"/> <a href='mailto:Atec@bezeqint.net'>שלח לנו מייל
                            </a> </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
