import React, { Component, Fragment } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';


class ContactSection extends Component {
    render() {
        return (
            <Fragment>
                <Container className='mt-5'> 
                    <Row>

                        <Col lg={6} md={6} sm={12}>
                             <h1 className='serviceMainTitle'>Quick Connect</h1>


                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Your Name</Form.Label>
                                            <Form.Control type="text" placeholder="Your Name"/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Your Email Address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter Your email"/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Your Message</Form.Label>
                                            <Form.Control as="textarea" rows={3} placeholder="Enter Your Message"/>
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>

                                </Form>



                        </Col>

                        <Col lg={6} md={6} sm={12}>
                        <h1 className='serviceMainTitle'>Discuss Now</h1>
                            <p className='service-P'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate totam eum vitae quis debitis corrupti excepturi laboriosam repellendus accusantium. Nostrum!</p>
                            <p className='service-P'><FontAwesomeIcon className='socialIcon' icon={faEnvelope} /> mdanikhossin99@gmail.com</p>
                            <p className='service-P'><FontAwesomeIcon className='socialIcon' icon={faPhone} /> Phone : 01993553423</p>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ContactSection;