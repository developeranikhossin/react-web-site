import React, { Component, Fragment } from 'react';
import { Col, Container, Row, Button} from 'react-bootstrap';





class CourseDetails extends Component {
    render() {
        return (
            <Fragment>


                <Container fluid className="topFixedBanner-course p-0">
                    <div className="toBannerOverLay-course">
                        <Container className="topContent-course">
                            <Row>

                                <Col sm={12} md={6} lg={6}>
                                    <h3 className='courseDetailsTitle'>Lorem ipsum dolor sit amet.</h3>
                                    <p className='courseDetailsPra'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, consequuntur.</p>
                                    <p className='courseDetailsPra'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, consequuntur.</p>
                                </Col>

                                <Col sm={12} md={6} lg={6}>
                                    <p className='courseDetailsPra'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sed tempore placeat in repudiandae porro ullam nostrum ut laboriosam dicta rem fuga eaque nihil totam, odio, dolor neque aliquam quas, iste pariatur deserunt quaerat! Odit dolorem odio libero natus voluptatum.</p>
                                </Col>

                            </Row>
                        </Container>
                    </div>
                </Container>

                <Container className="mt-5">
                    <Row>

                        <Col sm={12} md={6} lg={6}>
                            <h1>Skill You Get</h1>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <Button variant="primary">Buy Now</Button>
                        </Col>

                        <Col sm={12} md={6} lg={6}>
                            <Fragment>
                                <h1>Lorem ipsum dolor sit amet.</h1>
                                <h1>Lorem ipsum dolor sit amet.</h1>
                                <h1>Lorem ipsum dolor sit amet.</h1>
                                <h1>Lorem ipsum dolor sit amet.</h1>
                                <h1>Lorem ipsum dolor sit amet.</h1>
                                <h1>Lorem ipsum dolor sit amet.</h1>
                            </Fragment>
                        </Col>

                    </Row>
                </Container>


            </Fragment>
        );
    }
}

export default CourseDetails;