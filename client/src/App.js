import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";


import './App.css';
//
import {Animated} from "react-animated-css";
import {ParallaxProvider} from 'react-scroll-parallax';
// components
import MainMenu from './components/layout/MainMenu';
import MobileMenu from './components/layout/MobileMenu';
import Footer from './components/layout/Footer';
import HomePage from './components/pages/HomePage';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import About from './components/pages/About';
import Contact from './components/pages/Contact'
import Catalog from './components/pages/Catalog';



class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            counter: 0,
            currentPage: 'home',
            menuScrolled: false
        }
    }

    changeScrollState(bool, page){
        console.log('chengeState', bool)
        if(bool){
            this.setState({counter: this.state.counter += 1})
        }
        this.setState({menuScrolled: bool,currentPage: page })
    }


    componentWillMount() {
        setTimeout(() => this.setState({
            loading: false
        }), 1000);
    }

    render() {

        if (!this.state.loading) {
            return (

                <Router>
                    <ParallaxProvider>
                        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                            <div className="AppContainer">
                                <div className="AppRow">


                                    <div className="ColPageHolder">
                                        <MobileMenu/>
                                        <Route exact path="/" render={() => <HomePage state={this.state} changeScrollState={this.changeScrollState.bind(this)} />}/>
                                        <Route exact path="/services"
                                               render={() => <Services state={this.state} changeScrollState={this.changeScrollState.bind(this)} />}/>
                                        <Route exact path="/products" render={() => <Products state={this.state} changeScrollState={this.changeScrollState.bind(this)} />}
                                        />
                                        <Route exact path="/about"
                                               render={() => <About state={this.state} changeScrollState={this.changeScrollState.bind(this)} />}/>
                                        <Route exact path="/contact"  render={() => <Contact state={this.state} changeScrollState={this.changeScrollState.bind(this)} />}/>
                                        <Route exact path="/catalog"  render={() => <Catalog  />}/>
                                        <Footer/>
                                    </div>
                                    <div className="NavHolder">
                                        <MainMenu state={this.state}
                                        />
                                    </div>

                                </div>
                            </div>
                        </Animated>
                    </ParallaxProvider>
                </Router>
            );
        } else {
            return (<div className="LoaderHolder">
                <div className="cs-loader">
                    <div className="cs-loader-inner">
                        <label> ●</label>
                        <label> ●</label>
                        <label> ●</label>
                        <label> ●</label>
                        <label> ●</label>
                        <label> ●</label>
                    </div>
                </div>
            </div>)
        }
    }
}

export default App;
