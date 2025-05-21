import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container className="mt-5">
            <h1 className="text-center mb-5">Contact Us</h1>
            <Row>
                <Col md={8} className="mx-auto">
                    <Row>
                        <Col md={6}>
                            <Card className="mb-4">
                                <Card.Body>
                                    <Card.Title className="text-center mb-4">
                                        <i className="bi bi-tools me-2 text-primary"></i>
                                        Technical Support
                                    </Card.Title>
                                    <div className="text-center">
                                        <p className="mb-2">
                                            <i className="bi bi-envelope me-2"></i>
                                            Email: support@studentms.com
                                        </p>
                                        <p>
                                            <i className="bi bi-telephone me-2"></i>
                                            Phone: +91 1234567890
                                        </p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="mb-4">
                                <Card.Body>
                                    <Card.Title className="text-center mb-4">
                                        <i className="bi bi-book me-2 text-primary"></i>
                                        Academic Queries
                                    </Card.Title>
                                    <div className="text-center">
                                        <p className="mb-2">
                                            <i className="bi bi-envelope me-2"></i>
                                            Email: academics@studentms.com
                                        </p>
                                        <p>
                                            <i className="bi bi-telephone me-2"></i>
                                            Phone: +91 0987654321
                                        </p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title className="text-center mb-4">
                                <i className="bi bi-geo-alt me-2 text-primary"></i>
                                Address
                            </Card.Title>
                            <div className="text-center">
                                <p className="mb-2">
                                    <i className="bi bi-building me-2"></i>
                                    123 Education Street
                                </p>
                                <p className="mb-2">
                                    <i className="bi bi-city me-2"></i>
                                    Technology City
                                </p>
                                <p>
                                    <i className="bi bi-geo me-2"></i>
                                    India - 500001
                                </p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
