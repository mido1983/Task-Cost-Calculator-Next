import Head from 'next/head';
import Layout from '../components/Layout';

export default function Terms() {
    return (
        <Layout>
            <Head>
                <title>Terms of Service - Task Cost Calculator</title>
                <meta name="description" content="Terms of Service for Task Cost Calculator" />
            </Head>
            <div className="container py-5">
                <h1>Terms of Service</h1>
                <div className="mt-4">
                    <h2>1. Acceptance of Terms</h2>
                    <p>By accessing and using Task Cost Calculator, you accept and agree to be bound by the terms and provision of this agreement.</p>

                    <h2>2. Use License</h2>
                    <p>Permission is granted to temporarily use Task Cost Calculator for personal, non-commercial transitory viewing only.</p>

                    <h2>3. Disclaimer</h2>
                    <p>The materials on Task Cost Calculator are provided on an 'as is' basis. Task Cost Calculator makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

                    <h2>4. Limitations</h2>
                    <p>In no event shall Task Cost Calculator or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use Task Cost Calculator.</p>
                </div>
            </div>
        </Layout>
    );
} 