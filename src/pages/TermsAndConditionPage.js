import React, { Component, Fragment } from 'react';
import TopNavigation from "../Components/TopNavigation/TopNavigation";
import PageTop from "../Components/PageTop/PageTop";
import TermsAndCondition from "../Components/TermsAndCondition/TermsAndCondition";
import Footer from "../Components/footer/Footer";


class TermsAndConditionPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                    <TopNavigation title="Terms And Condition"/>
                    <PageTop pageTitle="Terms And Condition"/>
                    <TermsAndCondition />
                    <Footer />
            </Fragment>
        );
    }
}

export default TermsAndConditionPage;