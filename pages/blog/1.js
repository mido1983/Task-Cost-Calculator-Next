import Head from 'next/head';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import { formatDate } from '../../utils/dateFormatter';

// Sample blog post data (in real app, this would come from an API or database)
const blogPost = {
    id: 1,
    title: "How to Effectively Track Project Costs",
    date: "2024-10-15",
    category: "Project Management",
    content: `
        <div class="blog-content">
            <h4 class="mb-4">Introduction</h4>
            <p>The success of any project depends not only on meeting deadlines but also on efficient cost management. For freelancers and small teams with limited budgets, tracking expenses is key to financial stability and long-term success. In this article, we'll explore how to effectively manage project costs using modern tools and methodologies.</p>

            <h4 class="mt-5 mb-4">1. Why is Tracking Costs Important?</h4>
            <p>Tracking costs helps to:</p>
            <ul>
                <li><strong>Avoid budget overruns.</strong> Without clear control, money can quickly run out.</li>
                <li><strong>Improve forecasting.</strong> Analyzing past projects helps to plan future ones more accurately.</li>
                <li><strong>Demonstrate project value.</strong> Clients and investors often want to see how their money is being spent.</li>
            </ul>

            <h4 class="mt-5 mb-4">2. Main Types of Costs</h4>
            <p>Project costs can be divided into several categories:</p>
            <ul>
                <li><strong>Direct costs:</strong> wages, materials.</li>
                <li><strong>Indirect costs:</strong> office rent, software licenses.</li>
                <li><strong>Fixed costs:</strong> monthly rent, subscriptions.</li>
                <li><strong>Variable costs:</strong> dependent on work volume, such as transportation expenses.</li>
            </ul>

            <h4 class="mt-5 mb-4">3. Tools for Tracking Costs</h4>
            <h5 class="mb-3">Spreadsheets and Databases</h5>
            <ul>
                <li><strong>Google Sheets/Excel:</strong> versatile tools for manual expense tracking.</li>
                <li><strong>Airtable:</strong> a hybrid of spreadsheets and databases with advanced automation capabilities.</li>
            </ul>

            <h5 class="mb-3">Specialized Tools</h5>
            <ul>
                <li><strong>Task Cost Calculator:</strong> an ideal solution for freelancers, enabling them to calculate budgets, taxes, and discounts in one place.</li>
            </ul>

            <h5 class="mb-3">Project Management Software</h5>
            <ul>
                <li><strong>Asana, Monday, ClickUp:</strong> systems that integrate cost tracking with task management.</li>
            </ul>

            <h4 class="mt-5 mb-4">4. Methods for Tracking Costs</h4>
            <h5 class="mb-3">Task-based Cost Accounting</h5>
            <p>Each task is assigned a budget. This approach allows for detailed analysis of overruns and bottlenecks.</p>

            <h5 class="mb-3">Percentage Completion Method</h5>
            <p>Costs are tracked based on project progress. This method is especially useful for long-term projects.</p>

            <h5 class="mb-3">Cost-Revenue Analysis</h5>
            <p>Compares project expenses to the revenue it generates, helping to evaluate profitability.</p>

            <h4 class="mt-5 mb-4">5. How to Minimize Overruns?</h4>
            <ul>
                <li><strong>Accurate initial estimation.</strong> Create a detailed budget considering all possible expenses.</li>
                <li><strong>Regular monitoring.</strong> Check the budget status weekly.</li>
                <li><strong>Automation.</strong> Use tools for automatic accounting and reporting.</li>
                <li><strong>Set limits.</strong> Establish caps on specific cost categories.</li>
            </ul>

            <h4 class="mt-5 mb-4">6. Managing Budget Changes</h4>
            <p>Budgets can change due to external factors:</p>
            <ul>
                <li><strong>Discuss changes with the client.</strong> Transparency is crucial.</li>
                <li><strong>Use a contingency budget.</strong> Allocate an additional 10-20% for unforeseen expenses.</li>
                <li><strong>Document every adjustment.</strong> This helps avoid disputes.</li>
            </ul>

            <h4 class="mt-5 mb-4">7. Examples of Successful Cost Management</h4>
            <h5 class="mb-3">Example 1: Freelancer</h5>
            <p>A freelancer working on multiple projects uses Task Cost Calculator to split their workday between projects and track the time and resources spent on each. This helps avoid overruns and proactively discuss budget changes with clients.</p>

            <h5 class="mb-3">Example 2: Small Design Studio</h5>
            <p>A small design studio uses Google Sheets with automated formulas to track expenses. The team quickly identifies budget overruns and adjusts their actions accordingly.</p>
        </div>
    `
};

export default function BlogPost() {
    const router = useRouter();

    return (
        <Layout>
            <Head>
                <title>{blogPost.title} - Task Cost Calculator Blog</title>
                <meta name="description" content={blogPost.title} />
            </Head>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <span className="badge bg-primary mb-2">{blogPost.category}</span>
                        <h1 className="mb-4">{blogPost.title}</h1>
                        <p className="text-muted mb-4" suppressHydrationWarning>
                            {formatDate(blogPost.date)}
                        </p>
                        <div 
                            className="blog-post"
                            dangerouslySetInnerHTML={{ __html: blogPost.content }}
                        />
                        <div className="mt-5">
                            <button 
                                onClick={() => router.back()} 
                                className="btn btn-outline-primary"
                            >
                                ← Back to Blog
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
} 