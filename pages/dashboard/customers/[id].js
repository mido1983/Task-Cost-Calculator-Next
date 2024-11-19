import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';
import Head from 'next/head';
import { useSession } from 'next-auth/react';

export default function EditCustomer() {
    const router = useRouter();
    const { id } = router.query;
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            router.push('/login');
        },
    });

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: '',
        planType: '',
        paymentStatus: ''
    });

    useEffect(() => {
        console.log('Current session:', session);
        
        if (session?.user?.role !== 'admin') {
            console.log('User role is not admin:', session?.user?.role);
            router.push('/dashboard');
            return;
        }

        const fetchUser = async () => {
            try {
                const response = await fetch(`/api/users/${id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Cookie': document.cookie
                    },
                    credentials: 'include'
                });
                const data = await response.json();
                if (data.success) {
                    setUser(data.user);
                    setFormData({
                        name: data.user.name,
                        email: data.user.email,
                        role: data.user.role || 'user',
                        planType: data.user.planType || 'free',
                        paymentStatus: data.user.paymentStatus || 'none'
                    });
                } else {
                    setError(data.message);
                }
            } catch (err) {
                setError('Failed to fetch user data');
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchUser();
        }
    }, [id, session]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/users/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if (data.success) {
                router.push('/dashboard/customers');
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Failed to update user');
        }
    };

    if (status === "loading" || loading) {
        return <div>Loading...</div>;
    }

    if (!session || session?.user?.role !== 'admin') {
        return null;
    }

    return (
        <Layout>
            <Head>
                <title>Edit Customer - Task Cost Calculator</title>
            </Head>
            <div className="container-fluid p-4">
                <h1 className="h3 mb-4">Edit Customer</h1>
                
                {error && <div className="alert alert-danger">{error}</div>}
                
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Role</label>
                                <select
                                    className="form-select"
                                    value={formData.role}
                                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                                >
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Plan Type</label>
                                <select
                                    className="form-select"
                                    value={formData.planType}
                                    onChange={(e) => setFormData({...formData, planType: e.target.value})}
                                >
                                    <option value="free">Free</option>
                                    <option value="basic">Basic</option>
                                    <option value="premium">Premium</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Payment Status</label>
                                <select
                                    className="form-select"
                                    value={formData.paymentStatus}
                                    onChange={(e) => setFormData({...formData, paymentStatus: e.target.value})}
                                >
                                    <option value="none">None</option>
                                    <option value="pending">Pending</option>
                                    <option value="active">Active</option>
                                    <option value="cancelled">Cancelled</option>
                                </select>
                            </div>
                            <div className="d-flex justify-content-between">
                                <button type="button" className="btn btn-secondary" onClick={() => router.back()}>
                                    Back
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
} 