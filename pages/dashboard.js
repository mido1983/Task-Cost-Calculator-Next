import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link';

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userData = localStorage.getItem('user');
        
        if (!token || !userData) {
            router.push('/login');
            return;
        }
        
        setUser(JSON.parse(userData));
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <Layout>
            <Head>
                <title>Dashboard - Task Cost Calculator</title>
            </Head>
            
            {/* Horizontal Menu */}
            <div className="bg-light border-bottom">
                <div className="d-flex overflow-x-auto">
                    <Link href="/dashboard" className="px-4 py-3 text-dark text-decoration-none border-bottom border-primary">
                        Overview
                    </Link>
                    <Link href="/dashboard/projects" className="px-4 py-3 text-dark text-decoration-none">
                        Projects
                    </Link>
                    <Link href="/dashboard/clients" className="px-4 py-3 text-dark text-decoration-none">
                        Clients
                    </Link>
                    <Link href="/dashboard/reports" className="px-4 py-3 text-dark text-decoration-none">
                        Reports
                    </Link>
                </div>
            </div>

            <div className="d-flex">
                {/* Vertical Menu */}
                <div className="bg-light border-end" style={{ width: '250px', minHeight: 'calc(100vh - 60px)' }}>
                    <div className="p-3">
                        <h6 className="text-uppercase text-muted mb-3">Main Menu</h6>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link href="/dashboard" className="nav-link active">
                                    Dashboard
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/dashboard/tasks" className="nav-link">
                                    Tasks
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/dashboard/calendar" className="nav-link">
                                    Calendar
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/dashboard/analytics" className="nav-link">
                                    Analytics
                                </Link>
                            </li>
                        </ul>

                        <h6 className="text-uppercase text-muted mb-3 mt-4">Settings</h6>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link href="/dashboard/profile" className="nav-link">
                                    Profile
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/dashboard/settings" className="nav-link">
                                    Settings
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-grow-1 p-4">
                    <div className="row">
                        <div className="col-md-3 mb-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Clients</h5>
                                    <div className="display-4">0</div>
                                    <small className="text-muted">Total number of clients</small>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 mb-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Expenses</h5>
                                    <div className="display-4">100%</div>
                                    <small className="text-muted">Total expenses</small>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 mb-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Monthly Revenue</h5>
                                    <div className="display-4">$1,760</div>
                                    <small className="text-muted">Total monthly income</small>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 mb-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Net Balance</h5>
                                    <div className="display-4">$0.00</div>
                                    <small className="text-muted">Current bank balance</small>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Where's My Money</h5>
                                    <div style={{ height: '300px' }}>
                                        <p className="text-center text-muted">
                                            Chart will be added later
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
} 