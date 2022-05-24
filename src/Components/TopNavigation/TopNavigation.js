import React, { Component, Fragment } from 'react';
import { Navbar, Container, Nav, NavLink } from 'react-bootstrap';
import '../../asset/css/Custom.css';
import '../../asset/css/bootstrap.min.css';
import WhiteLogo from '../../asset/image/navlogo.svg';
import BlueLogo from '../../asset/image/navlogoScroll.svg';
import { Link } from "react-router-dom";



class TopNavigation extends Component {

    constructor(props){
        super();
        this.state={
            NavBarTitle: "navTitle",
            NavBarLogo: [WhiteLogo],
            NavbarBack:"NavBackground",
            NavbarItem:"NavItem",
            pageTitle:props.title
        }
    }


    onScroll=()=>{
        if (window.scrollY>100) {
            this.setState({NavBarTitle:'navTitleScroll', NavBarLogo: [BlueLogo], NavbarBack:"NavBackgroundScroll",NavbarItem:"NavItemScroll", Variant:"dark"})
        }
        else if(window.scrollY<100){
            this.setState({NavBarTitle:'navTitle', NavBarLogo: [WhiteLogo], NavbarBack:"NavBackground",NavbarItem:"NavItem"})
        }
    }


    componentDidMount(){
        window.addEventListener('scroll', this.onScroll)
    }




    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
                <Navbar variant={this.state.NavVariant} className={this.state.NavbarBack} fixed="top" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand><Link className={this.state.NavBarTitle} to="/"><img src={this.state.NavBarLogo} alt="" /> Anik Hossin</Link></Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                             <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">

                                </Nav>
                                <Nav>                                
                                     <Nav.Link> <Link className={this.state.NavbarItem} to="/">HOME</Link> </Nav.Link> 
                                     <Nav.Link> <Link className={this.state.NavbarItem} to="/service">SERVICES</Link></Nav.Link> 
                                     <Nav.Link> <Link className={this.state.NavbarItem} to="/course">COURSES</Link></Nav.Link> 
                                     <Nav.Link> <Link className={this.state.NavbarItem} to="/portfolio">PORTFOLIO</Link></Nav.Link> 
                                     <Nav.Link> <Link className={this.state.NavbarItem} to="/contact">CONTACT</Link></Nav.Link> 
                                     <Nav.Link> <Link className={this.state.NavbarItem} to="/about">ABOUT</Link></Nav.Link> 
                               </Nav>
                        </Navbar.Collapse>
                        </Container>
                    </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;