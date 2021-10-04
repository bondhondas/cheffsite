import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>

            <h3 className="text-danger mt-5">
                About Chinese Culinary Institute
            </h3>
            <Container>
                <Row>
                    <Col xs={6}><img src="./cheff.jpg" className="card-img-top person-img img-fluid my-5" /></Col>
                    <Col xs={6}><h5 className="text-primary  my-5">About Chinese Culinary Institute</h5>
                        <p className="text-success fw-bold">
                            Chinese cuisine has a long and venerable history; food is more than simple sustenance, it is an integral part of the culture. It is also one of the world’s favourite cuisines, taken to all corners of the earth by the extensive Chinese diaspora.

                            Hong Kong, with its own vibrant culture and well-established tourism industry, is the spiritual home of Cantonese cuisine, but here in Hong Kong, one will find restaurants specialising in regional Chinese cuisine.

                            Being one of the Capital Millennium Projects initiated by the Government of the Hong Kong Special Administrative Region, the Chinese Culinary Institute (CCI) provides both full-time and part-time programmes to youngsters and practicing chefs in the industry who wish to obtain or upgrade their qualifications in Chinese Cuisine.
                        </p>
                    </Col>
                </Row>
            </Container>

            <div>

            </div>

        </div>
    );
};

export default About;