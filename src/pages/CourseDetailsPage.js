import React, { Component, Fragment } from 'react';
import TopNavigation from "../Components/TopNavigation/TopNavigation";
import CourseDetails from "../Components/CourseDetails/CourseDetails";
import Footer from "../Components/footer/Footer";


class courseDetailsPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Course Details"/>
                <CourseDetails />
                <Footer />
            </Fragment>
        );
    }
}

export default courseDetailsPage;