import React, { Component, Fragment } from 'react';
import '../../asset/css/Custom.css';
import '../../asset/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import webLogo from '../../asset/image/web.svg';
import graphicsLogo from '../../asset/image/graphics.svg';
import mobileLogo from '../../asset/image/mobile.svg';




class Services extends Component {
    render() {
        return (
            <div>
                <Fragment>
                    <Container className='text-center'>
                           <h1 className='serviceMainTitle'>My Services</h1>
                        <Row>
                            
                            <Col lg={4} md={6} sm={12}>
                                <div className='serviceCard text-center'>
                                    <img src={webLogo} alt="" />
                                    <h2 className='serviceName'>Web Development</h2>
                                    <p className='service-P'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sed autem minus nam culpa aliquam ut molestiae ducimus nisi minima?</p>
                                </div>
                            </Col>

                            <Col lg={4} md={6} sm={12}>
                                <div className='serviceCard text-center'>
                                    <img src={mobileLogo} alt="" />
                                    <h2 className='serviceName'>Mobile Development</h2>
                                    <p className='service-P'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sed autem minus nam culpa aliquam ut molestiae ducimus nisi minima?</p>
                                </div>
                            </Col>

                            <Col lg={4} md={6} sm={12}>                               
                                <div className='serviceCard text-center'>
                                    <img src={graphicsLogo} alt="" />
                                    <h2 className='serviceName'>Graphics Development</h2>
                                    <p className='service-P'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sed autem minus nam culpa aliquam ut molestiae ducimus nisi minima?</p>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </Fragment>
            </div>
        );
    }
}

export default Services;
