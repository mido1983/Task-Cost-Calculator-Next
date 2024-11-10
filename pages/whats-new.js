import Head from 'next/head';
import Layout from '../components/Layout';

export default function WhatsNew() {

    const updates = [
        {
            date: '10 November 2024',
            title: 'Contact Features Update',
            features: [
                ' - Added WhatsNew page to track project updates',
                '- Implemented chronological display of features and changes',
                '- Added three main update sections:',
                    '* Contact Features Update',
                    '* UI and Structure Improvements',
                    '* Initial Release',
                '- Maintained consistent styling with existing pages',
                '- Used Bootstrap card layout for updates display'
            ]
        },
        {
            date: '10 November 2024',
            title: 'Contact Features Update',
            features: [
                'Added email functionality',
                'Implemented contact form for user support',
                'Integrated EmailJS for message handling'
            ]
        },
        {
            date: '8 November 2024',
            title: 'UI and Structure Improvements',
            features: [
                'Enhanced header and footer components',
                'Added new navigation pages',
                'Improved overall layout structure',
                'Optimized project architecture'
            ]
        },
        {
            date: '7 November 2024',
            title: 'Initial Release',
            features: [
                'Core task cost calculation functionality',
                'Basic project structure setup',
                'Foundation for future features'
            ]
        }
    ];

    return (
        <Layout>
            <Head>
                <title>What's New - Task Cost Calculator</title>
                <meta name="description" content="Latest updates and changes in Task Cost Calculator" />
            </Head>
            <div className="container py-5">
                <h1>What's New?</h1>
                <div className="row mt-4">
                    {updates.map((update, index) => (
                        <div className="col-12 mb-4" key={index}>
                            <div className="card">
                                <div className="card-body">
                                    <div className="text-muted small mb-2">{update.date}</div>
                                    <h2 className="h4 mb-3">{update.title}</h2>
                                    <div className="update-features">
                                        <ul className="list-unstyled mb-0">
                                            {update.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="mb-2">
                                                    <i className="fas fa-check-circle text-success me-2"></i>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
} 