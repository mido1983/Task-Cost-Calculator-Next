import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Plans() {
    const plans = [
        {
            id: 'paid-5',
            name: 'Basic Plan',
            price: 5,
            features: [
                'Unlimited documents',
                'Invoice, order, deal invoice',
                'Deposit receipt, receipt',
                'Credit invoice, bill of lading',
                'Commercial offer',
                'Invoice with receipt',
                'Expense management',
                'One company',
                'Single user'
            ]
        },
        {
            id: 'paid-10',
            name: 'Standard Plan',
            price: 10,
            features: ['Under Development']
        },
        {
            id: 'paid-15',
            name: 'Premium Plan',
            price: 15,
            features: ['Under Development']
        }
    ];

    return (
        <Layout>
            <Head>
                <title>Subscription Plans - Task Cost Calculator</title>
                <meta name="description" content="Choose your subscription plan" />
            </Head>
            <div className="container py-5">
                <h1 className="text-center mb-5">Subscription Plans</h1>
                <h2 className={'text-center bg-warning'}>Page Under Construction</h2>
                <div className="row justify-content-center">
                    {plans.map((plan) => (
                        <div key={plan.id} className="col-md-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body d-flex flex-column">
                                    <h2 className="card-title text-center h4">{plan.name}</h2>
                                    <div className="card-text text-center mb-4">
                                        <span className="display-4">${plan.price}</span>
                                        <span className="text-muted">/month</span>
                                    </div>
                                    <ul className="list-unstyled mb-4">
                                        {plan.features.map((feature, index) => (
                                            <li key={index} className="mb-2">
                                                ✓ {feature}
                                            </li>
                                        ))}
                                        <li className="mb-2">✓ 45-day free trial</li>
                                    </ul>
                                    <Link 
                                        href={`/register?plan=${plan.id}`} 
                                        className="btn btn-primary mt-auto disabled"
                                    >
                                        Register Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
} 