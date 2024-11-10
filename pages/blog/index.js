import Head from 'next/head';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { formatDate } from '../../utils/dateFormatter';

const blogPosts = [
    {
        id: 1,
        title: "How to Effectively Track Project Costs",
        excerpt: "Managing project budgets can be a daunting task, but with the right strategies, you can keep costs under control and avoid unpleasant surprises. In this guide, we’ll explore essential tips and tools to help you track project expenses effectively, from setting a realistic budget to monitoring progress in real time. Whether you're a freelancer or part of a larger team, these insights will ensure your project stays on track financially.",
        date: "10-15-2024",
        category: "Project Management"
    },
    {
        id: 2,
        title: "Understanding Tax Calculations in Projects",
        excerpt: "Taxes can be a tricky aspect of project management, often leading to unexpected costs if not properly accounted for. This article breaks down the essentials of tax calculations, helping you understand how to apply them to your project’s budget. From VAT to sales tax, we’ll guide you through common scenarios and provide tips on ensuring accurate invoicing. Mastering these basics will not only keep your finances in check but also boost your credibility with clients.",
        date: "11-10-2024",
        category: "Finance"
    },
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