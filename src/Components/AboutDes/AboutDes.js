import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class AboutDes extends Component {
    render() {
        return (
            <Fragment>
                <Container className='mt-5'>
                    <Row>
                        <Col sm={12} lg={12} md={12}>
                            <h1>Who i am</h1>
                            <hr />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora inventore magni odio amet quisquam earum unde nihil. Nemo dolore officiis, non tenetur inventore recusandae in culpa aperiam eius, odit harum est nihil corrupti repellat cupiditate quo id error libero ipsum accusantium nam dolores corporis? Odit quos illo porro vitae quidem.</p>

                            <h1>my mission</h1>
                            <hr />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora inventore magni odio amet quisquam earum unde nihil. Nemo dolore officiis, non tenetur inventore recusandae in culpa aperiam eius, odit harum est nihil corrupti repellat cupiditate quo id error libero ipsum accusantium nam dolores corporis? Odit quos illo porro vitae quidem.</p>

                            <h1>my vision</h1>
                            <hr />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora inventore magni odio amet quisquam earum unde nihil. Nemo dolore officiis, non tenetur inventore recusandae in culpa aperiam eius, odit harum est nihil corrupti repellat cupiditate quo id error libero ipsum accusantium nam dolores corporis? Odit quos illo porro vitae quidem.</p>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AboutDes;