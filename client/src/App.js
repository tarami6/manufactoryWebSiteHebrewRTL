import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
//
import {Animated} from "react-animated-css";
import { ParallaxProvider } from 'react-scroll-parallax';
// components
import MainMenu from './components/layout/MainMenu';
import Footer from './components/layout/Footer';
import HomePage from './components/pages/HomePage';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }

    componentWillMount() {
        setTimeout(() => this.setState({
            loading: false
        }), 100);
    }

    render() {
        if (!this.state.loading) {
            return (

                <Router>
                    <ParallaxProvider>
                    <Animated animationIn="fadeIn"  animationOut="fadeOut" isVisible={true}>
                        <div className="AppContainer">
                            <div className="AppRow">
                                <div className="NavHolder">
                                    <MainMenu/>
                                </div>
                                <div className="ColPageHolder">
                                    <Route exact path="/" component={HomePage}/>
                                    <Footer/>
                                </div>

                            </div>
                        </div>
                    </Animated>
                    </ParallaxProvider>
                </Router>
            );
        } else {
            return (<div>Loading</div>)
        }
    }
}

export default App;
