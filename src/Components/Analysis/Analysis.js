import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";


class Analysis extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">Technology Used</h1>
                    <Row>
                        <Col lg={6} md={12} sm={12}>


                        </Col>

                        <Col lg={6} md={12} sm={12}>
                        <p className="text-justify des">To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application. I use MySQL database for relational database system. To build NoSQL application i use MongoDB. Firebase database system is used where it is necessary to provide realtime data flow facilities.</p>
                            <p className="text-justify des"> I always build dynamic application. Admin panel is the heart of such kinds of application. I always try to provide sufficient features in admin panel to dominate application. According to client demand I use PHP OOP, CodeIgniter and Laravel to build admin panel section. </p>
                            <p className="text-justify des"> Application security is a big deal for commercial application. I always ensure security portion of my application, moreover i build a security alert system, to notify admin when his system at risk. </p>

                        </Col>

                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Analysis;