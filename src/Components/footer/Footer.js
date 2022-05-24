import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube  } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";




class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className=" text-center footerSection">
                    <Row>

                        <Col lg={3} md={6} sm={12} className="p-5 text-start">
                            <h1 className='serviceMainTitle'>Follow Me</h1>
                            <a className='socialLink' href="#"><FontAwesomeIcon  className='socialIcon' icon={faFacebook} /> Facebook</a><br />
                            <a className='socialLink' href="#"><FontAwesomeIcon className='socialIcon' icon={faYoutube} /> Youtube</a>
                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-start">
                            <h1 className='serviceMainTitle'>Address</h1>
                            <p className='service-P'>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                            <p className='service-P'><FontAwesomeIcon className='socialIcon' icon={faEnvelope} /> mdanikhossin99@gmail.com</p>
                            <p className='service-P'><FontAwesomeIcon className='socialIcon' icon={faPhone} /> Phone : 01993553423</p>
                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-start">
                            <h1 className='serviceMainTitle'>Information</h1>
                            <Link  className='socialLink' to="/about"><a>About Me</a></Link><br />
                            <Link  className='socialLink' to="/contact"><a>Contact Me</a></Link>
                                                     
                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-start">
                             <h1 className='serviceMainTitle'>Legal</h1>
                             <Link className='socialLink' to="/refund">Refund Policy</Link><br />
                            <Link className='socialLink' to="/Terms">Terms And Condition</Link><br />
                            <Link className='socialLink' to="/policy">Privacy Policy</Link>                          
                        </Col>

                    </Row>
                </Container>

                <Container className='text-center copyRightSection' fluid={true}>
                        <a className='copyRightLink' href="#">Copyright © 2022 Designed By Developer Anik. All Rights Reserved.</a>
                </Container>

            </Fragment>
        );
    }
}

export default Footer;