import React, { Component, Fragment } from 'react';
import { Col, Container, Row, Button, Card } from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';




<FontAwesomeIcon icon="fa-solid fa-circle-check" />
class Summary extends Component {
    render() {
        return (
            <Fragment>

                <Container fluid className="SummaryBanner SummarySection p-0">
                    <div className="SummaryBannerOverLay">
                        <Container className='text-center'>
                            <Row>

                                <Col lg={8} md={6} sm={12}>
                                    <Row className='countSection'>
                                        <Col>
                                             <h1 className='countNumber'>
                                                    <CountUp start={0} end={22000}>
                                                        {({ countUpRef, start }) => (
                                                            <VisibilitySensor onChange={start} delayedCall>
                                                                <span ref={countUpRef} />                                                               
                                                            </VisibilitySensor>
                                                        )}
                                                    </CountUp>
                                             </h1>
                                             <h4 className='countTitle'>Total Project</h4>
                                              <hr className='bg-white w-25' />
                                        </Col>
                                        <Col>
                                              <h1 className='countNumber'>
                                                    <CountUp start={0} end={5000}>
                                                        {({ countUpRef, start }) => (
                                                            <VisibilitySensor onChange={start} delayedCall>
                                                                <span ref={countUpRef} />                                                               
                                                            </VisibilitySensor>
                                                        )}
                                                    </CountUp>
                                             </h1>
                                             <h4 className='countTitle'>Total Project</h4>
                                              <hr className="bg-white w-25" />
                                        </Col>
                                    </Row>
                                </Col>

                                <Col lg={4} md={6} sm={12}>
                                     <Card className='cardWork'>
                                        <Card.Body>
                                                <Card.Title className='CardTitle text-start'>How I Work</Card.Title>
                                                <Card.Text>
                                                    <p className='CardSubTitle text-start'><FontAwesomeIcon className='cardIcon' icon={faCircleCheck} /> Lorem ipsum dolor sit amet.</p>
                                                    <p className='CardSubTitle text-start'><FontAwesomeIcon className='cardIcon' icon={faCircleCheck} /> Lorem ipsum dolor sit amet.</p>
                                                    <p className='CardSubTitle text-start'><FontAwesomeIcon className='cardIcon' icon={faCircleCheck} /> Lorem ipsum dolor sit amet.</p>
                                                    <p className='CardSubTitle text-start'><FontAwesomeIcon className='cardIcon' icon={faCircleCheck} /> Lorem ipsum dolor sit amet.</p>
                                                </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>

                            </Row>
                        </Container>
                    </div>
                </Container>
                
            </Fragment>
        );
    }
}

export default Summary;