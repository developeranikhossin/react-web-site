import React, { Component, Fragment } from 'react';
import TopNavigation from "../Components/TopNavigation/TopNavigation";
import PageTop from "../Components/PageTop/PageTop";
import PrivacyPolicy from "../Components/PrivacyPolicy/PrivacyPolicy";
import Footer from "../Components/footer/Footer";

class PrivacyPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                    <TopNavigation title="Privacy Policy"/>
                    <PageTop pageTitle="Privacy Policy"/>
                    <PrivacyPolicy />
                    <Footer />
            </Fragment>
        );
    }
}

export default PrivacyPage;