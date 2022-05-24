import React, { Component, Fragment } from 'react';
import TopNavigation from "../Components/TopNavigation/TopNavigation";
import TopBanner from "../Components/topBanner/TopBanner";
import Services from "../Components/services/Services";
import Analysis from "../Components/Analysis/Analysis";
import Summary from "../Components/summary/Summary";
import RecentProject from "../Components/RecentProject/RecentProject";
import Courses from "../Components/Courses/Courses";
import Video from "../Components/video/Video";
import ClientReview from "../Components/clientReview/ClientReview";
import Footer from "../Components/footer/Footer";


class HomePages extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                    <TopNavigation title="Home"/>
                    <TopBanner />
                    <Services />
                    <Analysis />
                    <Summary />
                    <RecentProject />
                    <Courses />
                    <Video />
                    <ClientReview />
                    <Footer />
            </Fragment>
        );
    }
}

export default HomePages;