import React, {Component} from 'react';
import Logo from '../../assets/img/largeLogo.png';
import Time from 'react-icons/lib/md/access-time';
import Location from 'react-icons/lib/md/location-on';
import Phone from 'react-icons/lib/md/phone-in-talk';
import Email from 'react-icons/lib/md/email';


class Footer extends Component {
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
                            <h3>Buisness Details</h3>
                            <div>
                                <ul>
                                    <li><p>Akiva Tolochinsky</p></li>
                                    <li><p>Electrical Contracting constructor</p></li>
                                </ul>
                                <p>Copyright 2019 All Rights reserves</p>
                            </div>

                        </div>
                    </div>
                    <div className="Col12">
                        <div className="ContentHolder05">
                            <h3>Timing</h3>
                            <p className="TimingText"><Time className="TimeIcon"/> 17:00 - 18:00</p>
                        </div>
                    </div>
                    <div className="Col12">
                        <div className="ContentHolder05">
                            <h3>Contact</h3>
                            <p className="ContactTextFirst"><Location className="TimeIcon"/> Hamagal-12 Karmiel Israel
                            </p>
                            <p className=""><Phone className="TimeIcon"/> 04-8660523</p>
                            <p className=""><Phone className="TimeIcon"/> 04-8620254 </p>
                            <p className=""><Email className="TimeIcon"/> Atec@bezeqint.net </p>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Footer;