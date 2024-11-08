import Head from 'next/head';
import Layout from '../components/Layout';
import Image from 'next/image';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function About() {
    return (
        <Layout>
            <Head>
                <title>About Me - Task Cost Calculator</title>
                <meta name="description" content="Learn more about the developer behind Task Cost Calculator" />
            </Head>

            <Container className="py-5">
                <Row className="mb-5">
                    <Col md={8} className="mx-auto text-center">
                        <h1 className="display-4 mb-4">About Me</h1>
                        <p className="lead text-muted">
                            Hi, I'm John Doe, a full-stack developer passionate about creating useful tools for businesses
                        </p>
                    </Col>
                </Row>

                <Row className="mb-5">
                    <Col md={4} className="mb-4 mb-md-0">
                        <Card className="h-100 shadow-sm">
                            <div className="text-center p-3">
                                <Image
                                    src="/assets/images/profile.jpg"
                                    alt="Developer Profile"
                                    width={200}
                                    height={200}
                                    className="rounded-circle"
                                />
                            </div>
                            <Card.Body className="text-center">
                                <Card.Title>John Doe</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Full Stack Developer</Card.Subtitle>
                                <div className="social-links mt-3">
                                    <a href="https://github.com/yourusername" className="mx-2" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-github fa-lg"></i>
                                    </a>
                                    <a href="https://linkedin.com/in/yourusername" className="mx-2" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-linkedin fa-lg"></i>
                                    </a>
                                    <a href="https://twitter.com/yourusername" className="mx-2" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-twitter fa-lg"></i>
                                    </a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={8}>
                        <Card className="h-100 shadow-sm">
                            <Card.Body>
                                <h2 className="h4 mb-4">My Story</h2>
                                <p>
                                    With over 5 years of experience in web development, I've always been passionate about 
                                    creating tools that make people's lives easier. Task Cost Calculator was born from 
                                    the need to simplify project cost calculations for freelancers and small businesses.
                                </p>
                                
                                <h3 className="h5 mb-3 mt-4">Skills & Expertise</h3>
                                <Row>
                                    <Col sm={6}>
                                        <ul className="list-unstyled">
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle text-success me-2"></i>
                                                React & Next.js
                                            </li>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle text-success me-2"></i>
                                                Node.js & Express
                                            </li>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle text-success me-2"></i>
                                                MongoDB & MySQL
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col sm={6}>
                                        <ul className="list-unstyled">
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle text-success me-2"></i>
                                                UI/UX Design
                                            </li>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle text-success me-2"></i>
                                                AWS & DevOps
                                            </li>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle text-success me-2"></i>
                                                Agile Methodologies
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>

                                <h3 className="h5 mb-3 mt-4">Current Projects</h3>
                                <p>
                                    Besides Task Cost Calculator, I'm working on several other projects:
                                </p>
                                <ul>
                                    <li>Project Management Dashboard</li>
                                    <li>Time Tracking Application</li>
                                    <li>Invoice Generator</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col md={12}>
                        <Card className="shadow-sm">
                            <Card.Body>
                                <h2 className="h4 mb-4">Get in Touch</h2>
                                <p>
                                    I'm always interested in hearing about new projects and opportunities. 
                                    Feel free to reach out if you'd like to collaborate or just chat!
                                </p>
                                <div className="d-flex justify-content-start align-items-center">
                                    <a href="mailto:your.email@example.com" className="btn btn-primary me-3">
                                        <i className="fas fa-envelope me-2"></i>
                                        Email Me
                                    </a>
                                    <a href="/contact" className="btn btn-outline-primary">
                                        <i className="fas fa-paper-plane me-2"></i>
                                        Contact Form
                                    </a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
} 