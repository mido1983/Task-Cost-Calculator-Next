import Head from 'next/head';
import Layout from '../components/Layout';
import Image from 'next/image';
import { Container, Row, Col, Card } from 'react-bootstrap';

// ... existing imports ...

export default function About() {
    return (
        <Layout>
            <Head>
                <title>About - Task Cost Calculator</title>
                <meta name="description" content="Learn more about Task Cost Calculator - Your freelance invoicing solution" />
            </Head>

            <Container className="py-5">
                <Row className="mb-5">
                    <Col md={8} className="mx-auto text-center">
                        <h1 className="display-4 mb-4">About Task Cost Calculator</h1>
                        <p className="lead text-muted">
                            A powerful, user-friendly tool designed specifically for freelancers in Europe and America
                        </p>
                    </Col>
                </Row>

                <Row className="mb-5">
                    <Col md={12}>
                        <Card className="shadow-sm">
                            <Card.Body>
                                <p className="mb-4">
                                    Our mission is to simplify the process of creating professional invoices while helping you stay on top of your taxes, discounts, and project costs.
                                </p>

                                <h2 className="h4 mb-4">Why Choose Us?</h2>
                                
                                <h3 className="h5 mb-3">Streamlined Invoicing</h3>
                                <p>Generate detailed invoices in just a few clicks. No more spreadsheets or manual calculations – focus on what you do best, and let us handle the rest.</p>

                                <h3 className="h5 mb-3">Tax & Discount Management</h3>
                                <p>Our system helps you accurately calculate taxes and apply discounts, ensuring compliance with regional tax regulations while maximizing your profits.</p>

                                <h3 className="h5 mb-3">Localization</h3>
                                <p>Supporting multiple currencies and languages, Task Cost Calculator is tailored to meet the needs of freelancers working across different countries.</p>

                                <h3 className="h5 mb-3">Efficiency and Simplicity</h3>
                                <p>Built with Next.js, the platform is fast, secure, and optimized for both desktop and mobile users. All data is temporarily stored in your local storage, giving you full control over your information.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col md={12}>
                        <Card className="shadow-sm">
                            <Card.Body>
                                <h2 className="h4 mb-4">Our Vision</h2>
                                <p>
                                    We believe that freelancers should spend more time doing what they love and less time worrying about administrative tasks. Task Cost Calculator is here to support you every step of the way, from project estimation to invoicing.
                                </p>
                                <p className="mb-0">
                                    Join us as we redefine how freelancers manage their work and finances, one invoice at a time.
                                </p>
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
                                    Have questions or suggestions? We'd love to hear from you!
                                </p>
                                <div className="d-flex justify-content-start align-items-center">
                                    <a href="mailto:taskcostcalculator@proton.me" className="btn btn-primary me-3">
                                        <i className="fas fa-envelope me-2"></i>
                                        Email Us
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