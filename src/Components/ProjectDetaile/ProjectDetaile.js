import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

class ProjectDetaile extends Component {
    render() {
        return (
            <Fragment>
                <Container className='m-5'>
                    <Row>

                        <Col lg={6} md={6} sm={12}>
                            <img className='img' src="https://www.the-american-dream.com/assets/Uploads-DE/Sharing/sharing-arbeiten-usa.jpg" alt="" />
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <h2>BOll Bazzar</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut reiciendis minus voluptatibus natus numquam soluta eaque ut laboriosam officia porro.</p>
                            <ul>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, minus.</li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, minus.</li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, minus.</li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, minus.</li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, minus.</li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, minus.</li>
                            </ul>

                            <Button variant="primary">More Info</Button>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ProjectDetaile;