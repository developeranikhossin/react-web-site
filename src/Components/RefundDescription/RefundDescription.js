import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class RefundDescription extends Component {
    render() {
        return (
        <Fragment>
            <Container className='mt-5'>
                <Row>
                    <Col sm={12} lg={12} md={12}>
                        <ul>
                            
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, vel.</li>

                            <li>Lorem ipsum sectetur adipisicing elit.  sit amet consecte dolor met consectetur adipisicing elit.  sit amet consectetur adipisicing elit. Accusantium, vel.</li>

                            <li>Lorem ipsum sectetur adipisicing elit.  sit amet consecte dolor met consectetur adipisicing elit.  sit amet consectetur adipisicing elit. Accusantium, vel.</li>

                            <li>Lorem ipsum sectetur adipisicing elit.  sit amet consecte dolor met consectetur adipisicing elit.  sit amet consectetur adipisicing elit. Accusantium, vel.</li>

                            <li>Lorem ipsum sectetur adipisicing elit.  sit amet consecte dolor met consectetur adipisicing elit.  sit amet consectetur adipisicing elit. Accusantium, vel.</li>

                        </ul>
                    </Col>
                </Row>
            </Container>
        </Fragment>
        );
    }
}

export default RefundDescription;