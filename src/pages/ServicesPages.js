import React, { Component, Fragment } from 'react';
import TopNavigation from '../Components/TopNavigation/TopNavigation';
import PageTop from "../Components/PageTop/PageTop";
import Services from "../Components/services/Services";
import ContactSection from '../Components/ContactSection/ContactSection';
import Footer from '../Components/footer/Footer';


class ServicesPages extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Services"/>
                <PageTop pageTitle="ALL Services"/>
                <Services />
                <ContactSection />
                <Footer />
            </Fragment>
        );
    }
}

export default ServicesPages;