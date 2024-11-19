import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Head from 'next/head';
import { useSession } from 'next-auth/react';

export default function Customers() {
    const router = useRouter();
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            router.push('/login');
        },
    });
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (session?.user?.role !== 'admin') {
            router.push('/dashboard');
            return;
        }

        const fetchUsers = async () => {
            console.log('Client Session:', {
                exists: !!session,
                user: session?.user,
                role: session?.user?.role
            });

            try {
                const response = await fetch('/api/users/index', {
                    method: 'GET',
                    credentials: 'include'
                });
                
                const data = await response.json();
                console.log('API Response:', data);
                
                if (data.success) {
                    setUsers(data.users);
                } else {
                    setError(data.message);
                }
            } catch (err) {
                console.error('Fetch error:', err);
                setError('Failed to fetch users');
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, [session]);

    const handleDeleteUser = async (userId) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                const response = await fetch(`/api/users/${userId}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Cookie': document.cookie
                    },
                    credentials: 'include'
                });
                const data = await response.json();
                if (data.success) {
                    setUsers(users.filter(user => user._id !== userId));
                } else {
                    setError(data.message);
                }
            } catch (err) {
                setError('Failed to delete user');
            }
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
                <title>Customers Management - Task Cost Calculator</title>
            </Head>
            <div className="container-fluid p-4">
                <h1 className="h3 mb-4">Customers Management</h1>
                
                {error && <div className="alert alert-danger">{error}</div>}
                
                <div className="card">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Plan Type</th>
                                        <th>Payment Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user => (
                                        <tr key={user._id}>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.role || 'user'}</td>
                                            <td>{user.planType || 'free'}</td>
                                            <td>{user.paymentStatus || 'none'}</td>
                                            <td>
                                                <button 
                                                    className="btn btn-sm btn-primary me-2"
                                                    onClick={() => router.push(`/dashboard/customers/${user._id}`)}
                                                >
                                                    Edit
                                                </button>
                                                <button 
                                                    className="btn btn-sm btn-danger"
                                                    onClick={() => handleDeleteUser(user._id)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
} 