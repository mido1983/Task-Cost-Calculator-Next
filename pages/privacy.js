import Head from 'next/head';
import Layout from '../components/Layout';

export default function Privacy() {
    return (
        <Layout>
            <Head>
                <title>Privacy Policy - Task Cost Calculator</title>
                <meta name="description" content="Privacy Policy for Task Cost Calculator" />
            </Head>
            <div className="container py-5">
                <h1>Privacy Policy</h1>
                <div className="mt-4">
                    <h2>1. Information We Collect</h2>
                    <p>We collect information that you provide directly to us, including when you:</p>
                    <ul>
                        <li>Create an account</li>
                        <li>Use our services</li>
                        <li>Contact us for support</li>
                    </ul>

                    <h2>2. How We Use Your Information</h2>
                    <p>We use the information we collect to:</p>
                    <ul>
                        <li>Provide and maintain our services</li>
                        <li>Improve our services</li>
                        <li>Send you technical notices and updates</li>
                    </ul>

                    <h2>3. Data Security</h2>
                    <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction or damage.</p>
                </div>
            </div>
        </Layout>
    );
} 