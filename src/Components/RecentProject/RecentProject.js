import React, { Component } from 'react';
import { Fragment } from 'react';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class RecentProject extends Component {
    render() {
        return (
            <Fragment>
                <Container className='text-center projectCardAll'>
                <h1 className='serviceMainTitle'>Recent Project</h1>
                    <Row className="projectCardBottom">

                        <Col sm={12} md={6} lg={4}>
                                <Card className="projectCard">
                                    <Card.Img variant="top" src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                                    <Card.Body>
                                        <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                        <Card.Text className="projectCardDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <Button variant="primary" className="projectCardBtn"><Link to="/project">Details</Link></Button>
                                    </Card.Body>
                                </Card>
                        </Col>

                        <Col sm={12} md={6} lg={4}>
                            <Card className="projectCard">
                                    <Card.Img variant="top" src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                    <Card.Body>
                                        <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                        <Card.Text className="projectCardDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <Button variant="primary"><Link className="projectCardBtn" to="/project">Details</Link></Button>
                                    </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} md={6} lg={4}>
                            <Card className="projectCard">
                                    <Card.Img variant="top" src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                                    <Card.Body>
                                        <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                        <Card.Text className="projectCardDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <Button variant="primary" className="projectCardBtn"><Link to="/project">Details</Link></Button>
                                    </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} md={6} lg={4} className="mt-5">
                            <Card className="projectCard">
                                    <Card.Img variant="top" src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                                    <Card.Body>
                                        <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                        <Card.Text className="projectCardDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <Button variant="primary" className="projectCardBtn"><Link to="/project">Details</Link></Button>
                                    </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} md={6} lg={4} className="mt-5">
                            <Card className="projectCard">
                                    <Card.Img variant="top" src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                                    <Card.Body>
                                        <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                        <Card.Text className="projectCardDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <Button variant="primary" className="projectCardBtn"><Link to="/project">Details</Link></Button>
                                    </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} md={6} lg={4} className="mt-5">
                            <Card className="projectCard">
                                    <Card.Img variant="top" src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                                    <Card.Body>
                                        <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                        <Card.Text className="projectCardDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <Button variant="primary" className="projectCardBtn"><Link to="/project">Details</Link></Button>
                                    </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default RecentProject;