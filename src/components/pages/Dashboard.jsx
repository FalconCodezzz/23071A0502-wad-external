import React from 'react';
import { students } from '../../data/students';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Dashboard = () => {
    return (
        <Container className="mt-5">
            <h1 className="mb-4">Student Dashboard</h1>
            <Row>
                {students.map(student => (
                    <Col md={4} key={student.rollNumber} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{student.name}</Card.Title>
                                <Card.Text>
                                    <strong>Roll Number:</strong> {student.rollNumber}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Marks:</strong>
                                    <ul className="list-unstyled mt-2">
                                        {Object.entries(student.subjects).map(([subject, mark]) => (
                                            <li key={subject}>
                                                <span className="text-muted">{subject}:</span> {mark}
                                            </li>
                                        ))}
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Dashboard;
