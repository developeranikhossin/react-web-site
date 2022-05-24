import React, { Component, Fragment } from 'react';
import '../../asset/css/Custom.css';
import '../../asset/css/bootstrap.min.css';
import { Col, Container, Row, Button } from 'react-bootstrap';

class TopBanner extends Component {

    // constructor(){
    //     super();
    //     this.state={
    //         title:"",
    //         subtitle:""
    //     }
    // }

    // componentDidMount(){
    //     RestClient.GetRequest(AppUrl.HomePage).then(result=>{

    //     });
    // }



    render() {
        return (
            <Fragment>
                <Container fluid className="topFixedBanner p-0">
                    <div className="toBannerOverLay">
                        <Container className="topContent">
                                <Row>
                                    <Col className='text-center topBannerTextAll'>
                                        <h1 className='topTitle'>SoftWare Engineer</h1>
                                        <h4 className='topSubTitle'>Mobile & Web Application</h4>
                                        <Button variant="primary">More Info</Button>
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