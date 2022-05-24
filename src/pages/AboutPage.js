import React, { Component, Fragment } from 'react';
import TopNavigation from "../Components/TopNavigation/TopNavigation";
import PageTop from "../Components/PageTop/PageTop";
import AboutDes from "../Components/AboutDes/AboutDes";
import Footer from "../Components/footer/Footer";


class AboutPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="About"/>
                <PageTop pageTitle="About Me"/>
                <AboutDes />
                <Footer />
            </Fragment>
        );
    }
}

export default AboutPage;