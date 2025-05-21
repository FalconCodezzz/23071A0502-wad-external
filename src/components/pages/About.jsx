import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
    return (
        <Container className="mt-5">
            <h1 className="text-center mb-5">About Student Management System</h1>
            <Row>
                <Col md={8} className="mx-auto">
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title className="text-center mb-4">System Overview</Card.Title>
                            <p className="text-muted">
                            This student management system (set number 2) is made for <strong>WAD EXTERNAL</strong>conducted on 21st may,2025, it consists of register, login, contact,dashboard and about pages
                            </p>
                            
                            <h3 className="mt-4">Features</h3>
                            <ul className="list-unstyled">
                                <li className="d-flex align-items-center mb-2">
                                    <i className="bi bi-check-circle me-2 text-primary"></i>
                                    Student Information Management
                                </li>
                                <li className="d-flex align-items-center mb-2">
                                    <i className="bi bi-check-circle me-2 text-primary"></i>
                                    Subject-wise Marks Tracking
                                </li>
                                <li className="d-flex align-items-center mb-2">
                                    <i className="bi bi-check-circle me-2 text-primary"></i>
                                    Secure Login System
                                </li>
                                <li className="d-flex align-items-center mb-2">
                                    <i className="bi bi-check-circle me-2 text-primary"></i>
                                    Responsive Design
                                </li>
                            </ul>

                            <h3 className="mt-4">Subjects Covered</h3>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <ul className="list-unstyled">
                                        <li className="d-flex align-items-center mb-2">
                                            <i className="bi bi-book me-2 text-primary"></i>
                                            Web Application Development
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <i className="bi bi-book me-2 text-primary"></i>
                                            Operating System
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <i className="bi bi-book me-2 text-primary"></i>
                                            Computer Organization
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="list-unstyled">
                                        <li className="d-flex align-items-center mb-2">
                                            <i className="bi bi-book me-2 text-primary"></i>
                                            Design and Analysis of Algorithms
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <i className="bi bi-book me-2 text-primary"></i>
                                            Software Engineering
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
