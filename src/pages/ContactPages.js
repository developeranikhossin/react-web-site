import React, { Component, Fragment } from 'react';
import ContactSection from '../Components/ContactSection/ContactSection';
import TopNavigation from '../Components/TopNavigation/TopNavigation';
import PageTop from "../Components/PageTop/PageTop";
import Footer from '../Components/footer/Footer';


class ContactPages extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Contact"/>
                <PageTop pageTitle="Contact"/>
                <ContactSection />
                <Footer />
            </Fragment>
        );
    }
}

export default ContactPages;