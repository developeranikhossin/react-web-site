import React, { Component } from 'react';
import { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

class AllCourses extends Component {
    render() {
        return (
            <Fragment>
            <Container className="text-center mt-5">
                <Row>

                    <Col lg={6} md={12} sm={12} className="p-2">
                        <Row>
                                <Col lg={6} md={6} sm={12}>
                                        <img className='courseImg' src="https://www.worldgyani.com/Images/computer.png" alt="" />
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <h2 className='text-start courseTitle'>Web Development</h2>
                                        <p className='text-start courseDes'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolore architecto velit quas dolorum nulla.</p>
                                        <Link className='text-start courseDetails float-start' to="/CourseDetails">Details</Link>
                                     </Col>  
                        </Row>               
                    </Col>

                    <Col lg={6} md={12} sm={12} className="p-2">
                                <Row>
                                    <Col lg={6} md={6} sm={12}>
                                    <img className='courseImg' src="https://www.worldgyani.com/Images/computer.png" alt="" />
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <h2 className='text-start courseTitle'>Web Development</h2>
                                        <p className='text-start courseDes'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolore architecto velit quas dolorum nulla.</p>
                                        <Link className='text-start courseDetails float-start' to="/CourseDetails">Details</Link>
                                    </Col>              
                                 </Row>  
                    </Col>

                    <Col lg={6} md={12} sm={12} className="p-2">
                                <Row>
                                    <Col lg={6} md={6} sm={12}>
                                    <img className='courseImg' src="https://www.worldgyani.com/Images/computer.png" alt="" />
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <h2 className='text-start courseTitle'>Web Development</h2>
                                        <p className='text-start courseDes'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolore architecto velit quas dolorum nulla.</p>
                                        <Link className='text-start courseDetails float-start' to="/CourseDetails">Details</Link>
                                    </Col>              
                                 </Row>  
                    </Col>

                    <Col lg={6} md={12} sm={12} className="p-2">
                                <Row> 
                                    <Col lg={6} md={6} sm={12}>
                                    <img className='courseImg' src="https://www.worldgyani.com/Images/computer.png" alt="" />
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <h2 className='text-start courseTitle'>Web Development</h2>
                                        <p className='text-start courseDes'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolore architecto velit quas dolorum nulla.</p>
                                        <Link className='text-start courseDetails float-start' to="/CourseDetails">Details</Link>
                                    </Col>              
                                 </Row>  
                    </Col>
                    <Col lg={6} md={12} sm={12} className="p-2">
                                <Row> 
                                    <Col lg={6} md={6} sm={12}>
                                    <img className='courseImg' src="https://www.worldgyani.com/Images/computer.png" alt="" />
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <h2 className='text-start courseTitle'>Web Development</h2>
                                        <p className='text-start courseDes'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolore architecto velit quas dolorum nulla.</p>
                                        <Link className='text-start courseDetails float-start' to="/CourseDetails">Details</Link>
                                    </Col>              
                                 </Row>  
                    </Col>
                    <Col lg={6} md={12} sm={12} className="p-2">
                                <Row> 
                                    <Col lg={6} md={6} sm={12}>
                                    <img className='courseImg' src="https://www.worldgyani.com/Images/computer.png" alt="" />
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <h2 className='text-start courseTitle'>Web Development</h2>
                                        <p className='text-start courseDes'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolore architecto velit quas dolorum nulla.</p>
                                        <Link className='text-start courseDetails float-start' to="/CourseDetails">Details</Link>
                                    </Col>              
                                 </Row>  
                    </Col>
                    <Col lg={6} md={12} sm={12} className="p-2">
                                <Row> 
                                    <Col lg={6} md={6} sm={12}>
                                    <img className='courseImg' src="https://www.worldgyani.com/Images/computer.png" alt="" />
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <h2 className='text-start courseTitle'>Web Development</h2>
                                        <p className='text-start courseDes'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolore architecto velit quas dolorum nulla.</p>
                                        <Link className='text-start courseDetails float-start' to="/CourseDetails">Details</Link>
                                    </Col>              
                                 </Row>  
                    </Col>
                    <Col lg={6} md={12} sm={12} className="p-2">
                                <Row> 
                                    <Col lg={6} md={6} sm={12}>
                                    <img className='courseImg' src="https://www.worldgyani.com/Images/computer.png" alt="" />
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <h2 className='text-start courseTitle'>Web Development</h2>
                                        <p className='text-start courseDes'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolore architecto velit quas dolorum nulla.</p>
                                        <Link className='text-start courseDetails float-start' to="/CourseDetails">Details</Link>
                                    </Col>              
                                 </Row>  
                    </Col>
                </Row>
            </Container>
        </Fragment>
        );
    }
}

export default AllCourses;