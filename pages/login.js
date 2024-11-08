import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Здесь будет логика авторизации
            console.log('Login attempt:', formData);
            // После успешной авторизации
            router.push('/');
        } catch (err) {
            setError('Invalid email or password');
        }
    };

    return (
        <Layout>
            <Head>
                <title>Login - Task Cost Calculator</title>
                <meta name="description" content="Login to your Task Cost Calculator account" />
            </Head>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h1 className="h4 text-center mb-4">Login</h1>
                                {error && <div className="alert alert-danger">{error}</div>}
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            value={formData.password}
                                            onChange={(e) => setFormData({...formData, password: e.target.value})}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">
                                        Login
                                    </button>
                                </form>
                                <div className="text-center mt-3">
                                    <Link href="/register" className="text-decoration-none">
                                        Don't have an account? Register
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
} 