import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function Dashboard() {
    const router = useRouter();
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            router.push('/login');
        },
    });

    // Показываем загрузку пока проверяется сессия
    if (status === "loading") {
        return <div>Loading...</div>;
    }

    // Если нет сессии, пользователь будет перенаправлен автоматически
    if (!session) {
        return null;
    }

    return (
        <Layout>
            <Head>
                <title>Dashboard - Task Cost Calculator</title>
            </Head>
            <button className="btn btn-outline-primary d-md-none" onClick={() => document.querySelector('.sidebar').classList.toggle('active')}>
                    <i className="fas fa-bars"></i>
                </button>
            {/* Horizontal Menu */}
       

            <div className="d-flex">
                {/* Vertical Menu */}
                <div className="bg-light border-end sidebar" style={{width: '250px', minHeight: 'calc(100vh - 60px)'}}>
                    <button 
                        className="sidebar-close" 
                        onClick={() => document.querySelector('.sidebar').classList.remove('active')}
                    >
                        <i className="fas fa-times"></i>
                    </button>
                    <div className="p-3">
                        <h6 className="text-uppercase text-muted mb-3">Main Menu</h6>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link href="/dashboard" className="nav-link active">
                                    <i className="fas fa-tachometer-alt"></i> Dashboard
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/dashboard/customers" className="nav-link">
                                    <i className="fas fa-users"></i> Customers
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/dashboard/suppliers" className="nav-link">
                                    <i className="fas fa-truck"></i> Suppliers
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/dashboard/documents" className="nav-link">
                                    <i className="fas fa-file-alt"></i> Documents
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/dashboard/bank-account" className="nav-link">
                                    <i className="fas fa-university"></i> My bank account
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/dashboard/expenses" className="nav-link">
                                    <i className="fas fa-wallet"></i> Expenses
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/dashboard/pricelist" className="nav-link">
                                    <i className="fas fa-tags"></i> Pricelist
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/dashboard/reports" className="nav-link">
                                    <i className="fas fa-chart-line"></i> Reports
                                </Link>
                            </li>
                        </ul>

                        <h6 className="text-uppercase text-muted mb-3 mt-4">System</h6>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link href="/dashboard/settings" className="nav-link">
                                    <i className="fas fa-cog"></i> Settings
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/dashboard/modules" className="nav-link">
                                    <i className="fas fa-puzzle-piece"></i> Modules
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/dashboard/log" className="nav-link">
                                    <i className="fas fa-file-alt"></i> Log
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/dashboard/export-import" className="nav-link">
                                    <i className="fas fa-exchange-alt"></i> Export & Import
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/dashboard/affiliate-program" className="nav-link">
                                    <i className="fas fa-hands-helping"></i> Affiliate Program
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/dashboard/chart-of-accounts" className="nav-link">
                                    <i className="fas fa-sitemap"></i> Chart of Accounts
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-grow-1 p-4">

        
                        <div className="col-md-4 text-md-center session-info">
                            {session.user?.email ? (
                                <>
                                    <p className="mb-0">Name: {session.user.name}</p>
                                    <p className="mb-0">Email: {session.user.email}</p>
                                    <p className="mb-0">Role: {session.user.role || 'N/A'}</p>
                                    <p className="mb-0">Plan: {session.user.planType || 'N/A'}</p>
                                    <p className="mb-0">Payment Status: {session.user.paymentStatus || 'N/A'}</p>
                                </>
                            ) : (
                                <p className="mb-0">User information not available</p>
                            )}
                        </div>
          

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
                                    <div style={{height: '300px'}}>
                                        <p className="text-center text-muted">
                                            Chart will be added later
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End of first row */}

                    <div className="row mt-4">
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Clients</h5>
                                    <div className="display-4">0</div>
                                    <small className="text-muted">Total number of clients</small>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Expenses</h5>
                                    <div className="display-4">100%</div>
                                    <small className="text-muted">Total expenses</small>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Monthly Revenue</h5>
                                    <div className="display-4">$1,760</div>
                                    <small className="text-muted">Total monthly income</small>
                                </div>
                            </div>
                        </div>


                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Where's My Money</h5>
                                    <div style={{height: '300px'}}>
                                        <p className="text-center text-muted">
                                            Chart will be added later
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End of second row */}
                </div>
            </div>
        </Layout>
    );
}