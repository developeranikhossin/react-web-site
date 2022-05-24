import React, { Component, Fragment } from 'react';
import TopNavigation from "../Components/TopNavigation/TopNavigation";
import PageTop from "../Components/PageTop/PageTop";
import Refund from "../Components/RefundDescription/RefundDescription";
import Footer from "../Components/footer/Footer";



class RefundPages extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Refund Policy" />
                <PageTop pageTitle="Refund Policy"/>
                <Refund />
                <Footer />
            </Fragment>
        );
    }
}

export default RefundPages;