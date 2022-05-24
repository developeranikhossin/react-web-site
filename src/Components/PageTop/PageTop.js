import React, { Component, Fragment } from 'react';
import '../../asset/css/Custom.css';
import '../../asset/css/bootstrap.min.css';
import { Col, Container, Row} from 'react-bootstrap';

class TopBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid className="pageFixedBanner p-0">
                    <div className="pageOverLay">
                        <Container className="pageContent">
                                <Row>
                                    <Col className='text-center '>
                                        <h1 className='pageTitle'>{this.props.pageTitle}</h1>
                                    </Col>
                                </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default TopBanner;