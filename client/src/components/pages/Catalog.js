import React, {Component} from 'react';
import {Document, Page} from "react-pdf";
import {Animated} from "react-animated-css";
import MdArrowBack from 'react-icons/lib/md/arrow-back';
import MdArrowForward from 'react-icons/lib/md/arrow-forward';


class Catalog extends Component {

    state = {
        numPages: null,
        pageNumber: 3,
        width: window.innerWidth,
        toAnimate: true
    }

    onDocumentLoad = ({numPages}) => {
        this.setState({numPages});
    }

    componentDidMount() {
        // Additionally I could have just used an arrow function for the binding `this` to the component...
        window.addEventListener("resize", this.updateDimensions);
    }

    updateDimensions = () => {
        this.setState({
            height: window.innerHeight,
            width: window.innerWidth
        });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions)
    }

    movePageForward = () => {
        if (this.state.pageNumber != 16)
            this.setState({
                pageNumber: this.state.pageNumber += 1,
            })
    }
    movePageBack = () => {
        if (this.state.pageNumber != 3)
            this.setState({
                pageNumber: this.state.pageNumber -= 1,
            })
    }

    render() {
        const {pageNumber, numPages} = this.state;
        console.log("state", this.state)
        return (
            <div>
                <Document
                    className="CatalogHolder"
                    file='catalog2014.pdf'
                    onLoadSuccess={this.onDocumentLoad}
                >
                    <div id="pdfWrapper" style={{width: "90vw"}}>
                        <button className="ButtonMdArrowBack" onClick={this.movePageForward}><MdArrowBack
                            className="MdArrowBack"/>
                            {(pageNumber - 2) !== 14  ?
                            <p className={"PageTextHolder"}>Page {pageNumber -2} of {numPages-3}</p>
                                : null}
                        </button>
                        <Page pageNumber={pageNumber} className="CatalogPageHolder" width={this.state.width * 0.7}/>
                        <button className="ButtonMdArrowBack" onClick={this.movePageBack}><MdArrowForward className="MdArrowForward"/>
                            { (pageNumber - 3) !== 0 ?
                        <p className={"PageTextHolder"}>Page {pageNumber - 3} of {numPages-3}</p>
                                : null }
                        </button>
                    </div>
                </Document>


            </div>
        );
    }
}

export default Catalog;


