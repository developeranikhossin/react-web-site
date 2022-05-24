import React, { Component, Fragment } from 'react';
import TopNavigation from '../Components/TopNavigation/TopNavigation';
import PageTop from "../Components/PageTop/PageTop";
import AllPortfolio from "../Components/AllPortfolio/AllPortfolio";
import Footer from '../Components/footer/Footer';

class AllPortfolioPages extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Portfolio"/>
                <PageTop pageTitle="ALL Portfolio"/>
                <AllPortfolio />
                <Footer />
            </Fragment>
        );
    }
}

export default AllPortfolioPages;