import Head from 'next/head';
import Layout from '../components/Layout';

export default function About() {
    return (
        <Layout>
            <Head>
                <title>About - Task Cost Calculator</title>
                <meta name="description" content="Learn more about Task Cost Calculator and its features" />
            </Head>
            <div className="container py-5">
                <h1>About Task Cost Calculator</h1>
                <div className="row mt-4">
                    <div className="col-md-8">
                        <h2>Our Mission</h2>
                        <p>Task Cost Calculator helps professionals and businesses accurately track and calculate project costs, time, and resources.</p>
                        
                        <h2 className="mt-4">Key Features</h2>
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <i className="fas fa-check-circle text-success me-2"></i>
                                Accurate time and cost tracking
                            </li>
                            <li className="mb-3">
                                <i className="fas fa-check-circle text-success me-2"></i>
                                Custom tax rates and discounts
                            </li>
                            <li className="mb-3">
                                <i className="fas fa-check-circle text-success me-2"></i>
                                Professional PDF reports
                            </li>
                            <li className="mb-3">
                                <i className="fas fa-check-circle text-success me-2"></i>
                                Project templates
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h3>Contact Us</h3>
                                <p>Have questions? We're here to help!</p>
                                <a href="mailto:support@taskcostcalculator.com" className="btn btn-primary">
                                    Contact Support
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
} 