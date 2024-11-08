import Head from 'next/head';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { formatDate } from '../../utils/dateFormatter';

// Имитация данных блога
const blogPosts = [
    {
        id: 1,
        title: "How to Effectively Track Project Costs",
        excerpt: "Learn the best practices for tracking project costs and managing resources...",
        date: "2024-03-15",
        category: "Project Management"
    },
    {
        id: 2,
        title: "Understanding Tax Calculations in Projects",
        excerpt: "A comprehensive guide to handling taxes in your project calculations...",
        date: "2024-03-10",
        category: "Finance"
    },
    // Добавьте больше постов...
];

export default function Blog() {
    return (
        <Layout>
            <Head>
                <title>Blog - Task Cost Calculator</title>
                <meta name="description" content="Latest articles about project cost management and tips" />
            </Head>
            <div className="container py-5">
                <h1>Blog</h1>
                <div className="row mt-4">
                    {blogPosts.map(post => (
                        <div key={post.id} className="col-md-6 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <span className="badge bg-primary mb-2">{post.category}</span>
                                    <h2 className="h5 card-title">{post.title}</h2>
                                    <p className="card-text">{post.excerpt}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <small className="text-muted" suppressHydrationWarning>
                                            {formatDate(post.date)}
                                        </small>
                                        <Link href={`/blog/${post.id}`} className="btn btn-outline-primary btn-sm">
                                            Read More
                                        </Link>
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