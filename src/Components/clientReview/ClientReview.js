import React, { Component } from 'react';
import { Fragment } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";



class ClientReview extends Component {
    render() {



        var settings = {
            autoplaySpeed:3000,
            autoplay:true,
            dots: true,
            infinite: true,
            speed: 3000,
            vertical:true,
            verticalSwiping:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
        };



        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className='serviceMainTitle'>Client Review</h1>

                    <Slider {...settings}>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImg" src="https://i.pinimg.com/originals/5e/08/7f/5e087f963a226ff47b5febda02dfccb2.png" alt="" />
                                    <h1>Web Development</h1>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est at iusto sapiente repudiandae cum aliquid facilis commodi ratione, modi aut dolores quis doloremque adipisci sint.</p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImg" src="https://i.pinimg.com/originals/5e/08/7f/5e087f963a226ff47b5febda02dfccb2.png" alt="" />
                                    <h1>Web Development</h1>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est at iusto sapiente repudiandae cum aliquid facilis commodi ratione, modi aut dolores quis doloremque adipisci sint.</p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImg" src="https://i.pinimg.com/originals/5e/08/7f/5e087f963a226ff47b5febda02dfccb2.png" alt="" />
                                    <h1>Web Development</h1>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est at iusto sapiente repudiandae cum aliquid facilis commodi ratione, modi aut dolores quis doloremque adipisci sint.</p>
                                </Col>
                            </Row>
                        </div>
                    </Slider>

                </Container>
            </Fragment>
        );
    }
}

export default ClientReview;