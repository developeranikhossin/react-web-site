import React, { Component, Fragment } from 'react';
import TopNavigation from '../Components/TopNavigation/TopNavigation';
import PageTop from "../Components/PageTop/PageTop";
import AllCourses from "../Components/AllCourses/AllCourses";
import Footer from '../Components/footer/Footer';

class AllCoursesPages extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Courses"/>
                <PageTop pageTitle="ALL Courses"/>
                <AllCourses />
                <Footer />
            </Fragment>
        );
    }
}

export default AllCoursesPages;