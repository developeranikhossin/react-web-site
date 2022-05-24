import React, { Component, Fragment } from 'react';
import TopNavigation from "../Components/TopNavigation/TopNavigation";
import PageTop from "../Components/PageTop/PageTop";
import ProjectPage from "../Components/ProjectDetaile/ProjectDetaile";
import Footer from "../Components/footer/Footer";


class ProjectDetailsPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Project"/>
                <PageTop pageTitle="Project Name"/>
                <ProjectPage />
                <Footer />
            </Fragment>
        );
    }
}

export default ProjectDetailsPage;